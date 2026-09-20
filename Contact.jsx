import { useState } from "react";
import Layout from "../components/Layout.jsx";

export default function Contact() {
  const [sent, setSent] = useState(false);

  function handleSubmit(e) {
    e.preventDefault();
    setSent(true);
  }

  return (
    <Layout>
      <section className="page-header">
        <div className="container">
          <span className="eyebrow-plain">Contact Us</span>
          <h1>Talk to an advisor directly</h1>
          <p>Send a message, call, or reach us on WhatsApp — whichever's easiest.</p>
        </div>
      </section>

      <section className="section">
        <div className="container emi-grid">
          <form className="card" onSubmit={handleSubmit}>
            {sent && <div className="form-success">Thanks — we'll get back to you shortly.</div>}
            <div className="field">
              <label htmlFor="name">Your name</label>
              <input id="name" type="text" required />
            </div>
            <div className="field">
              <label htmlFor="phone">Phone number</label>
              <input id="phone" type="tel" required />
            </div>
            <div className="field">
              <label htmlFor="message">How can we help?</label>
              <textarea id="message" rows="4" required />
            </div>
            <button type="submit" className="btn btn-gold btn-block">Send message</button>
          </form>

          <div className="card">
            <h3>Reach us directly</h3>
            <ul className="check-list">
              <li>📍 Nagpur, Maharashtra, India</li>
              <li>✉️ moneynestadvisor@gmail.com</li>
              <li>📞 +91 7387988539</li>
            </ul>
            <a href="https://wa.me/917387988539" target="_blank" rel="noreferrer" className="btn btn-forest btn-block">
              Chat on WhatsApp
            </a>
          </div>
        </div>
      </section>
    </Layout>
  );
}
