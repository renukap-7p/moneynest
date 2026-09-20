import { Navigate } from "react-router-dom";
import Layout from "../components/Layout.jsx";
import { useAuth } from "../context/AuthContext.jsx";
import { getLoanBySlug } from "../data/loanTypes.js";

export default function Profile() {
  const { currentUser } = useAuth();

  if (!currentUser) return <Navigate to="/login" replace />;

  const loan = getLoanBySlug(currentUser.loanInterest);

  return (
    <Layout showTrustProcess={false}>
      <section className="page-header">
        <div className="container">
          <span className="eyebrow-plain">My Profile</span>
          <h1>Welcome back, {currentUser.name.split(" ")[0]}</h1>
        </div>
      </section>
      <section className="section">
        <div className="container">
          <div className="card" style={{ maxWidth: 560 }}>
            <dl className="fact-list">
              <div><dt>Full name</dt><dd>{currentUser.name}</dd></div>
              <div><dt>Phone</dt><dd>{currentUser.phone}</dd></div>
              {currentUser.email && <div><dt>Email</dt><dd>{currentUser.email}</dd></div>}
              <div><dt>Address</dt><dd>{currentUser.address}</dd></div>
              <div><dt>Bank</dt><dd>{currentUser.bankName}</dd></div>
              <div><dt>Loan interest</dt><dd>{loan ? loan.name : "Not sure yet"}</dd></div>
            </dl>
          </div>
        </div>
      </section>
    </Layout>
  );
}
