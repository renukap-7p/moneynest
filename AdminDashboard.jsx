import { Navigate } from "react-router-dom";
import { useAuth } from "../../context/AuthContext.jsx";
import { getLoanBySlug } from "../../data/loanTypes.js";

export default function AdminDashboard() {
  const { isAdmin, adminLogout, allUsers } = useAuth();

  if (!isAdmin) return <Navigate to="/admin/login" replace />;

  const users = allUsers();

  return (
    <div className="admin-shell">
      <header className="admin-header">
        <div className="container admin-header-inner">
          <span className="brand-name" style={{ color: "var(--paper)" }}>Money Nest — Admin</span>
          <button className="btn btn-outline" onClick={adminLogout}>Log out</button>
        </div>
      </header>

      <main className="container admin-main">
        <h1>Registered users</h1>
        <p className="hint">
          This reads from the browser's local demo store. In production this should
          come from your real backend/database over an authenticated API, with
          passwords hashed and never displayed in plain text.
        </p>

        <div className="card table-scroll">
          <table>
            <thead>
              <tr>
                <th>Name</th>
                <th>Phone</th>
                <th>Address</th>
                <th>Bank</th>
                <th>Loan interest</th>
                <th>Signed up</th>
              </tr>
            </thead>
            <tbody>
              {users.length === 0 && (
                <tr><td colSpan={6}>No signups yet.</td></tr>
              )}
              {users.map((u) => {
                const loan = getLoanBySlug(u.loanInterest);
                return (
                  <tr key={u.id}>
                    <td>{u.name}</td>
                    <td>{u.phone}</td>
                    <td>{u.address}</td>
                    <td>{u.bankName}</td>
                    <td>{loan ? loan.name : u.loanInterest || "—"}</td>
                    <td>{new Date(u.createdAt).toLocaleDateString("en-IN")}</td>
                  </tr>
                );
              })}
            </tbody>
          </table>
        </div>
      </main>
    </div>
  );
}
