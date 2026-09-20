import { useState } from "react";
import { Link, NavLink } from "react-router-dom";
import { useAuth } from "../context/AuthContext.jsx";

const links = [
  { to: "/", label: "Home" },
  { to: "/loans", label: "Loans" },
  { to: "/investments", label: "Investments" },
  { to: "/insurance", label: "Insurance" },
  { to: "/property", label: "Property" },
  { to: "/emi-calculator", label: "EMI Calculator" },
  { to: "/credit-checker", label: "Credit Checker" },
  { to: "/documents", label: "Documents" },
  { to: "/about", label: "About Us" },
  { to: "/contact", label: "Contact Us" },
];

const WHATSAPP_NUMBER = "917387988539";

export default function Navbar() {
  const [open, setOpen] = useState(false);
  const { currentUser, logout } = useAuth();

  return (
    <>
      <div className="topbar">
        <div className="container topbar-inner">
          <div className="topbar-left">
            <span className="topbar-item">📍 Nagpur, Maharashtra, India</span>
            <a className="topbar-item" href="mailto:moneynestadvisor@gmail.com">✉️ moneynestadvisor@gmail.com</a>
            <a className="topbar-item" href="tel:+917387988539">📞 +91 7387988539</a>
          </div>
          <div className="topbar-right">
            <span>Follow Us:</span>
            <a className="topbar-social" href="#" aria-label="Facebook">f</a>
            <a className="topbar-social" href="#" aria-label="Instagram">ig</a>
            <a className="topbar-social" href="#" aria-label="LinkedIn">in</a>
          </div>
        </div>
      </div>

      <header className="navbar">
        <div className="container navbar-inner">
          <Link to="/" className="brand" onClick={() => setOpen(false)}>
            <span className="brand-mark">MN</span>
            <span>
              <span className="brand-name">Money<span className="brand-accent">Nest</span></span>
              <span className="brand-tagline">Your Financial Growth Partner</span>
            </span>
          </Link>

          <nav className={`nav-links ${open ? "is-open" : ""}`}>
            {links.map((l) => (
              <NavLink
                key={l.to}
                to={l.to}
                end={l.to === "/"}
                className={({ isActive }) => "nav-link" + (isActive ? " active" : "")}
                onClick={() => setOpen(false)}
              >
                {l.label}
              </NavLink>
            ))}
            <div className="nav-auth">
              {currentUser ? (
                <>
                  <Link to="/profile" className="btn btn-outline">My Profile</Link>
                  <button className="btn btn-gold" onClick={logout}>Log out</button>
                </>
              ) : (
                <>
                  <Link to="/login" className="btn btn-outline">Log in</Link>
                  <Link to="/signup" className="btn btn-gold">Get started</Link>
                </>
              )}
              <a
                href={`https://wa.me/${WHATSAPP_NUMBER}`}
                target="_blank"
                rel="noreferrer"
                className="btn btn-forest"
              >
                Talk to Advisor
              </a>
            </div>
          </nav>

          <button
            className="nav-toggle"
            aria-label="Toggle navigation"
            onClick={() => setOpen((o) => !o)}
          >
            <span />
            <span />
            <span />
          </button>
        </div>
      </header>
    </>
  );
}
