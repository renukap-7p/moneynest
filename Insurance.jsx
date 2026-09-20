import { Link } from "react-router-dom";
import Layout from "../components/Layout.jsx";

const plans = [
  {
    name: "Life Insurance",
    blurb: "Term plans that cover your family's expenses and goals if you're not there to provide for them.",
    image: "https://images.unsplash.com/photo-1518183214770-9cffbec72538?w=700&q=80",
  },
  {
    name: "Health Insurance",
    blurb: "Cashless treatment at network hospitals, covering you and the family members you add on.",
    image: "https://images.unsplash.com/photo-1576091160399-112ba8d25d1d?w=700&q=80",
  },
  {
    name: "General Insurance",
    blurb: "Vehicle, home, and travel cover for the everyday things worth protecting.",
    image: "https://images.unsplash.com/photo-1449965408869-eaa3f722e40d?w=700&q=80",
  },
];

export default function Insurance() {
  return (
    <Layout>
      <section className="page-header">
        <div className="container">
          <span className="eyebrow-plain">Insurance</span>
          <h1>Cover that's explained before you sign, not after</h1>
          <p>We compare policies from licensed insurers so you can see what's actually covered — and what isn't.</p>
        </div>
      </section>
      <section className="section">
        <div className="container">
          <div className="plan-grid">
            {plans.map((p) => (
              <div key={p.name} className="card plan-card">
                <img src={p.image} alt={p.name} style={{ width: "100%", borderRadius: 8, marginBottom: 14 }} />
                <h3>{p.name}</h3>
                <p>{p.blurb}</p>
                <Link to="/contact" className="btn btn-gold btn-block">Talk to an advisor</Link>
              </div>
            ))}
          </div>
        </div>
      </section>
    </Layout>
  );
}
