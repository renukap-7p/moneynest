import { Link } from "react-router-dom";
import Layout from "../components/Layout.jsx";
import { loanTypes } from "../data/loanTypes.js";

const featureIcons = [
  { icon: "🛡️", label: "Trusted Financial Advisor" },
  { icon: "⚡", label: "Fast & Hassle Free Process" },
  { icon: "🏅", label: "Best Solutions for You" },
  { icon: "🤝", label: "Expert Guidance Always" },
];

const requirementCards = [
  {
    icon: "📈",
    title: "Mutual Fund SIP",
    body: "Start your wealth creation journey with disciplined investments.",
    items: ["SIP Planning", "Mutual Fund Investments", "Goal-Based Investing"],
    cta: "Explore SIP",
    to: "/investments",
  },
  {
    icon: "🏦",
    title: "Loans & Finance",
    body: "Get the right loan solutions for your personal or business needs.",
    items: ["Personal Loan", "Home Loan", "Business Loan", "Education & Car Loan"],
    cta: "Explore Loans",
    to: "/loans",
  },
  {
    icon: "🛡️",
    title: "Insurance",
    body: "Protect your family and assets with the right insurance plans.",
    items: ["Life Insurance", "Health Insurance", "General Insurance"],
    cta: "Explore Insurance",
    to: "/insurance",
  },
  {
    icon: "🏠",
    title: "Property",
    body: "Buy, sell or invest in the right property with expert assistance.",
    items: ["Property Buying & Selling", "Bank-Seized Properties", "New Layout Properties"],
    cta: "Explore Property",
    to: "/property",
  },
];

const stats = [
  { value: "1000+", label: "Happy Clients" },
  { value: "₹500Cr+", label: "Loans Facilitated" },
  { value: "50+", label: "Partner Banks & NBFCs" },
  { value: "98%", label: "Success Rate" },
  { value: "5+", label: "Years of Trust" },
];

export default function Home() {
  return (
    <Layout>
      <section className="hero-v2">
        <div className="container">
          <div className="hero-v2-top">
            <div>
              <h1>Money<span className="accent">Nest</span> Advisor</h1>
              <p className="hero-v2-sub">Your Trusted Partner for Loans, Investments, Insurance &amp; Property</p>

              <div className="feature-icons">
                {featureIcons.map((f) => (
                  <div className="feature-icon" key={f.label}>
                    <span className="icon-circle">{f.icon}</span>
                    <span>{f.label}</span>
                  </div>
                ))}
              </div>

              <div className="contact-pills">
                <a className="contact-pill" href="tel:+917387988539">📞 +91 7387988539</a>
                <a className="contact-pill" href="mailto:moneynestadvisor@gmail.com">✉️ moneynestadvisor@gmail.com</a>
                <span className="contact-pill">📍 Nagpur, Maharashtra, India</span>
              </div>
            </div>

            <div>
              <div className="founder-card">
                <span className="eyebrow-plain">Founder</span>
                <h3>Himanshu Chauragade</h3>
                <div className="founder-contact">
                  <span>📞 +91 7387988539</span>
                  <span>✉️ moneynestadvisor@gmail.com</span>
                  <span>📍 Nagpur, Maharashtra, India</span>
                </div>
                <span className="eyebrow-plain">We Help You With</span>
                <ul className="check-list">
                  <li>Loans &amp; Finance Solutions</li>
                  <li>Mutual Fund SIP &amp; Investments</li>
                  <li>Insurance Advisory</li>
                  <li>Property Assistance</li>
                  <li>Financial Planning &amp; Advisory</li>
                </ul>
              </div>
              <div className="hero-image-wrap">
                <img
                  src="https://images.unsplash.com/photo-1611974789855-9c2a0a7236a3?w=900&q=80"
                  alt="A growth chart made of stacked gold coins"
                />
              </div>
            </div>
          </div>
        </div>
      </section>

      <section className="requirement-section">
        <div className="container">
          <span className="eyebrow-plain">Choose your requirement</span>
          <h2>What are you looking for today?</h2>
          <p>Select the service that matches your financial goal. Money Nest Advisor will guide you to the right next step.</p>

          <div className="requirement-grid">
            {requirementCards.map((c) => (
              <Link key={c.title} to={c.to} className="requirement-card">
                <span className="icon-circle">{c.icon}</span>
                <h3>{c.title}</h3>
                <p>{c.body}</p>
                <ul className="check-list">
                  {c.items.map((i) => <li key={i}>{i}</li>)}
                </ul>
                <span className="btn btn-forest btn-block">{c.cta} →</span>
              </Link>
            ))}
          </div>
        </div>
      </section>

      <section className="stats-bar">
        <div className="container">
          {stats.map((s) => (
            <div className="stat-item" key={s.label}>
              <strong>{s.value}</strong>
              <span>{s.label}</span>
            </div>
          ))}
        </div>
      </section>

      <section className="section section-tint">
        <div className="container">
          <span className="eyebrow-plain">Loan categories</span>
          <h2>Whatever it's for, there's a clearer way to borrow for it</h2>
          <hr className="hr-gold" />
          <div className="loan-grid">
            {loanTypes.map((loan) => (
              <Link key={loan.slug} to={`/loans/${loan.slug}`} className="loan-card">
                <img src={loan.image} alt={loan.name} />
                <div className="loan-card-body">
                  <h3>{loan.name}</h3>
                  <p>{loan.tagline}</p>
                  <div className="loan-card-meta">
                    <span>{loan.rate}</span>
                    <span>{loan.tenure}</span>
                  </div>
                </div>
              </Link>
            ))}
          </div>
        </div>
      </section>

      <section className="section">
        <div className="container why-grid">
          <div>
            <span className="eyebrow-plain">Why Money Nest</span>
            <h2>Built around what usually goes wrong in loan-shopping</h2>
            <p>
              Most applicants find out the real interest rate, the real processing
              fee, or the real document list only after they've applied. We put all
              three in front of you before you commit to anything.
            </p>
            <ul className="check-list">
              <li>Rate ranges shown upfront, not after a hard credit pull</li>
              <li>Every partner lender is RBI-registered — verifiable, not just claimed</li>
              <li>One document checklist per loan type, nothing hidden in a call</li>
              <li>Your data is used only to process your application</li>
            </ul>
            <Link to="/about" className="btn btn-forest">More about Money Nest</Link>
          </div>
          <img
            className="why-image"
            src="https://images.unsplash.com/photo-1560520653-9e0e4c89eb11?w=800&q=80"
            alt="Advisor explaining a document to a client"
          />
        </div>
      </section>
    </Layout>
  );
}
