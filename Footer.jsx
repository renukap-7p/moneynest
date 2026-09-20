import { Link } from "react-router-dom";

export default function Footer() {
  return (
    <footer className="site-footer">
      <div className="container footer-grid">
        <div>
          <div className="brand brand-footer">
            <span className="brand-mark">MN</span>
            <span className="brand-name">Money Nest</span>
          </div>
          <p>
            A loan and investment guidance platform. Money Nest connects you with
            RBI-registered lending partners — we do not lend money directly.
          </p>
        </div>

        <div>
          <h4>Loans</h4>
          <ul>
            <li><Link to="/loans/home-loan">Home Loan</Link></li>
            <li><Link to="/loans/car-loan">Car Loan</Link></li>
            <li><Link to="/loans/education-loan">Education Loan</Link></li>
            <li><Link to="/loans/personal-loan">Personal Loan</Link></li>
          </ul>
        </div>

        <div>
          <h4>Company</h4>
          <ul>
            <li><Link to="/about">About Us</Link></li>
            <li><Link to="/investments">Investments &amp; SIPs</Link></li>
            <li><Link to="/documents">Documents</Link></li>
            <li><Link to="/contact">Contact</Link></li>
          </ul>
        </div>

        <div>
          <h4>Account</h4>
          <ul>
            <li><Link to="/login">Log in</Link></li>
            <li><Link to="/signup">Create account</Link></li>
            <li><Link to="/admin/login">Admin</Link></li>
          </ul>
        </div>
      </div>
      <div className="container footer-bottom">
        <p>© {new Date().getFullYear()} Money Nest. All amounts and rates shown are indicative.</p>
      </div>
    </footer>
  );
}
