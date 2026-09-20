import Layout from "../components/Layout.jsx";

export default function About() {
  return (
    <Layout>
      <section className="page-header">
        <div className="container">
          <span className="eyebrow-plain">About Us</span>
          <h1>We started Money Nest after watching too many loan approvals go sideways on fine print</h1>
          <p>
            Money Nest is a Nagpur-based financial guidance platform connecting
            applicants with RBI-registered lenders and SEBI-registered investment
            partners across loans, mutual funds, insurance, and property.
          </p>
        </div>
      </section>

      <section className="section">
        <div className="container why-grid">
          <div>
            <h2>What we do</h2>
            <hr className="hr-gold" />
            <p>
              We don't lend money directly. Instead, we compare offers across our
              partner banks and NBFCs, show you the real rate range and document
              list upfront, and guide your application through to disbursal.
            </p>
            <h2>Our plans of finance</h2>
            <hr className="hr-gold" />
            <ul className="check-list">
              <li>Loan facilitation across home, car, education, health, personal, and business loans</li>
              <li>SIP and mutual fund guidance across debt, balanced, and equity categories</li>
              <li>Insurance advisory for life, health, and general cover</li>
              <li>Property buying, selling, and verification support</li>
            </ul>
          </div>
          <img
            src="https://images.unsplash.com/photo-1521791136064-7986c2920216?w=800&q=80"
            alt="Money Nest advisory team at work"
            className="why-image"
          />
        </div>
      </section>
    </Layout>
  );
}
