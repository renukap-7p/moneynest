import { createContext, useContext, useEffect, useState } from "react";

/*
  DEMO DATA LAYER
  ----------------
  Money Nest's real backend (user accounts, KYC, loan applications)
  should live on a proper server with a real database, hashed
  passwords, and HTTPS. This context stands in for that so the
  frontend and the "admin block" have something to talk to while
  the backend is being built. Swap the functions below for real
  API calls (fetch/axios to your server) when that's ready —
  the rest of the app only depends on this file's exported shape,
  so nothing else needs to change.
*/

const AuthContext = createContext(null);
const USERS_KEY = "moneynest_users";
const SESSION_KEY = "moneynest_session";
const ADMIN_SESSION_KEY = "moneynest_admin_session";

function readUsers() {
  try {
    return JSON.parse(localStorage.getItem(USERS_KEY)) || [];
  } catch {
    return [];
  }
}
function writeUsers(users) {
  localStorage.setItem(USERS_KEY, JSON.stringify(users));
}

export function AuthProvider({ children }) {
  const [currentUser, setCurrentUser] = useState(null);
  const [isAdmin, setIsAdmin] = useState(false);

  useEffect(() => {
    const sessionId = sessionStorage.getItem(SESSION_KEY);
    if (sessionId) {
      const user = readUsers().find((u) => u.id === sessionId);
      if (user) setCurrentUser(user);
    }
    if (sessionStorage.getItem(ADMIN_SESSION_KEY) === "true") setIsAdmin(true);
  }, []);

  function signup(details) {
    const users = readUsers();
    if (users.some((u) => u.phone === details.phone)) {
      return { ok: false, error: "An account with this phone number already exists." };
    }
    const user = {
      id: `mn_${Date.now()}`,
      name: details.name,
      phone: details.phone,
      email: details.email || "",
      address: details.address,
      bankName: details.bankName,
      loanInterest: details.loanInterest,
      password: details.password, // demo only — hash server-side in production
      createdAt: new Date().toISOString(),
    };
    users.push(user);
    writeUsers(users);
    sessionStorage.setItem(SESSION_KEY, user.id);
    setCurrentUser(user);
    return { ok: true, user };
  }

  function login(phone, password) {
    const user = readUsers().find((u) => u.phone === phone && u.password === password);
    if (!user) return { ok: false, error: "We couldn't find an account with those details." };
    sessionStorage.setItem(SESSION_KEY, user.id);
    setCurrentUser(user);
    return { ok: true, user };
  }

  function logout() {
    sessionStorage.removeItem(SESSION_KEY);
    setCurrentUser(null);
  }

  function adminLogin(username, password) {
    // Demo credentials only — replace with real authentication before launch.
    if (username === "admin" && password === "moneynest@admin") {
      sessionStorage.setItem(ADMIN_SESSION_KEY, "true");
      setIsAdmin(true);
      return { ok: true };
    }
    return { ok: false, error: "Invalid admin credentials." };
  }

  function adminLogout() {
    sessionStorage.removeItem(ADMIN_SESSION_KEY);
    setIsAdmin(false);
  }

  function allUsers() {
    return readUsers();
  }

  return (
    <AuthContext.Provider
      value={{ currentUser, signup, login, logout, isAdmin, adminLogin, adminLogout, allUsers }}
    >
      {children}
    </AuthContext.Provider>
  );
}

export function useAuth() {
  const ctx = useContext(AuthContext);
  if (!ctx) throw new Error("useAuth must be used within AuthProvider");
  return ctx;
}
