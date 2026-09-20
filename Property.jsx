import { Link } from "react-router-dom";
import Layout from "../components/Layout.jsx";

const services = [
  {
    name: "Property Buying & Selling",
    blurb: "End-to-end support finding, verifying, and closing on residential or commercial property.",
    image: "https://images.unsplash.com/photo-1560518883-ce09059eeffa?w=700&q=80",
  },
  {
    name: "Bank-Seized Properties",
    blurb: "Below-market opportunities from bank auctions, with the paperwork checked before you bid.",
    image: "https://images.unsplash.com/photo-1568605114967-8130f3a36994?w=700&q=80",
  },
  {
    name: "New Layout Properties",
    blurb: "Early access to plotted layouts and new developments, verified for clear title.",
    image: "https://images.unsplash.com/photo-1503387762-592deb58ef4e?w=700&q=80",
  },
];

export default function Property() {
  return (
    <Layout>
      <section className="page-header">
        <div className="container">
          <span className="eyebrow-plain">Property</span>
          <h1>Buy, sell, or invest with someone checking the paperwork</h1>
          <p>We work alongside verified brokers and legal partners so title issues surface before you commit, not after.</p>
        </div>
      </section>
      <section className="section">
        <div className="container">
          <div className="plan-grid">
            {services.map((s) => (
              <div key={s.name} className="card plan-card">
                <img src={s.image} alt={s.name} style={{ width: "100%", borderRadius: 8, marginBottom: 14 }} />
                <h3>{s.name}</h3>
                <p>{s.blurb}</p>
                <Link to="/contact" className="btn btn-gold btn-block">Talk to an advisor</Link>
              </div>
            ))}
          </div>
        </div>
      </section>
    </Layout>
  );
}
