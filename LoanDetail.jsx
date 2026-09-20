import { Link, useParams } from "react-router-dom";
import Layout from "../../components/Layout.jsx";
import { getLoanBySlug, loanTypes } from "../../data/loanTypes.js";

export default function LoanDetail() {
  const { slug } = useParams();
  const loan = getLoanBySlug(slug);

  if (!loan) {
    return (
      <Layout>
        <section className="page">
          <div className="container">
            <h1>We couldn't find that loan type</h1>
            <p>It may have moved. Here's the full list instead.</p>
            <Link to="/loans" className="btn btn-gold">Back to Loans</Link>
          </div>
        </section>
      </Layout>
    );
  }

  const others = loanTypes.filter((l) => l.slug !== slug).slice(0, 3);

  return (
    <Layout>
      <section className="loan-hero">
        <div className="container loan-hero-grid">
          <div>
            <span className="eyebrow-plain">Loans / {loan.name}</span>
            <h1>{loan.name}</h1>
            <p className="hero-lead">{loan.tagline}</p>
            <div className="hero-actions">
              <Link to={`/signup?loan=${loan.slug}`} className="btn btn-gold">
                Check eligibility
              </Link>
              <Link to="/emi-calculator" className="btn btn-outline">Calculate EMI</Link>
            </div>
          </div>
          <img src={loan.image} alt={loan.name} />
        </div>
      </section>

      <section className="section">
        <div className="container loan-detail-grid">
          <div>
            <h2>What you'll need</h2>
            <hr className="hr-gold" />
            <ul className="check-list">
              {loan.documents.map((doc) => (
                <li key={doc}>{doc}</li>
              ))}
            </ul>

            <h2>Eligibility</h2>
            <hr className="hr-gold" />
            <p>{loan.eligibility}</p>
          </div>

          <aside className="loan-facts card">
            <h3>Key numbers</h3>
            <dl className="fact-list">
              <div>
                <dt>Interest rate</dt>
                <dd>{loan.rate}</dd>
              </div>
              <div>
                <dt>Tenure</dt>
                <dd>{loan.tenure}</dd>
              </div>
              <div>
                <dt>Maximum amount</dt>
                <dd>{loan.maxAmount}</dd>
              </div>
            </dl>
            <p className="hint">Rates are indicative ranges across our lending partners and depend on your credit profile.</p>
          </aside>
        </div>
      </section>

      <section className="section section-tint">
        <div className="container">
          <span className="eyebrow-plain">You might also consider</span>
          <h2>Other loan categories</h2>
          <hr className="hr-gold" />
          <div className="loan-grid">
            {others.map((l) => (
              <Link key={l.slug} to={`/loans/${l.slug}`} className="loan-card">
                <img src={l.image} alt={l.name} />
                <div className="loan-card-body">
                  <h3>{l.name}</h3>
                  <p>{l.tagline}</p>
                </div>
              </Link>
            ))}
          </div>
        </div>
      </section>
    </Layout>
  );
}
