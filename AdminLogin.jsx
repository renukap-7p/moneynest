import { useState } from "react";
import { Navigate, useNavigate } from "react-router-dom";
import { useAuth } from "../../context/AuthContext.jsx";

export default function AdminLogin() {
  const [username, setUsername] = useState("");
  const [password, setPassword] = useState("");
  const [error, setError] = useState("");
  const { adminLogin, isAdmin } = useAuth();
  const navigate = useNavigate();

  if (isAdmin) return <Navigate to="/admin/dashboard" replace />;

  function handleSubmit(e) {
    e.preventDefault();
    const result = adminLogin(username.trim(), password);
    if (!result.ok) {
      setError(result.error);
      return;
    }
    navigate("/admin/dashboard");
  }

  return (
    <div className="admin-login-shell">
      <form className="card admin-login-card" onSubmit={handleSubmit}>
        <span className="eyebrow-plain">Money Nest Admin</span>
        <h1>Admin sign in</h1>
        {error && <div className="form-error">{error}</div>}
        <div className="field">
          <label htmlFor="username">Username</label>
          <input id="username" required value={username} onChange={(e) => setUsername(e.target.value)} />
        </div>
        <div className="field">
          <label htmlFor="password">Password</label>
          <input id="password" type="password" required value={password} onChange={(e) => setPassword(e.target.value)} />
        </div>
        <button type="submit" className="btn btn-gold btn-block">Sign in</button>
        <p className="hint" style={{ marginTop: 14 }}>
          Demo credentials: <code>admin</code> / <code>moneynest@admin</code> — replace before launch.
        </p>
      </form>
    </div>
  );
}
