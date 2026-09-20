import Layout from "../components/Layout.jsx";
import { loanTypes } from "../data/loanTypes.js";

const generalDocs = [
  "PAN Card",
  "Aadhaar Card",
  "Passport-size photographs",
  "Address proof (utility bill / rent agreement / passport)",
  "Bank statements (last 3–6 months)",
];

export default function Documents() {
  return (
    <Layout>
      <section className="page-header">
        <div className="container">
          <span className="eyebrow-plain">Documents</span>
          <h1>The exact checklist, by loan type</h1>
          <p>Every lender asks for slightly different paperwork. Here's what's common, and what's specific to each loan.</p>
        </div>
      </section>

      <section className="section">
        <div className="container">
          <h2>Common to every application</h2>
          <hr className="hr-gold" />
          <ul className="check-list">
            {generalDocs.map((d) => <li key={d}>{d}</li>)}
          </ul>
        </div>
      </section>

      <section className="section section-tint">
        <div className="container">
          <h2>By loan type</h2>
          <hr className="hr-gold" />
          <div className="doc-grid">
            {loanTypes.map((loan) => (
              <div key={loan.slug} className="card">
                <h3>{loan.name}</h3>
                <ul className="check-list">
                  {loan.documents.map((d) => <li key={d}>{d}</li>)}
                </ul>
              </div>
            ))}
          </div>
        </div>
      </section>
    </Layout>
  );
}
