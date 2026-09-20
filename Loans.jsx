import { Link } from "react-router-dom";
import Layout from "../../components/Layout.jsx";
import { loanTypes } from "../../data/loanTypes.js";

export default function Loans() {
  return (
    <Layout>
      <section className="page-header">
        <div className="container">
          <span className="eyebrow-plain">Loans</span>
          <h1>Six kinds of borrowing, one clear process</h1>
          <p>
            Pick a category to see current rate ranges, tenure options, and the exact
            documents you'll need — before you start an application anywhere.
          </p>
        </div>
      </section>

      <section className="section">
        <div className="container">
          <div className="loan-grid loan-grid-wide">
            {loanTypes.map((loan) => (
              <Link key={loan.slug} to={`/loans/${loan.slug}`} className="loan-card">
                <img src={loan.image} alt={loan.name} />
                <div className="loan-card-body">
                  <h3>{loan.name}</h3>
                  <p>{loan.tagline}</p>
                  <div className="loan-card-meta">
                    <span>{loan.rate}</span>
                    <span>Up to {loan.maxAmount}</span>
                  </div>
                </div>
              </Link>
            ))}
          </div>
        </div>
      </section>
    </Layout>
  );
}
