const steps = [
  {
    n: "01",
    title: "Tell us what you need",
    body: "Share a few details about the loan or plan you're looking for — no paperwork yet, just the shape of what you need.",
  },
  {
    n: "02",
    title: "We match you, transparently",
    body: "We show you real rate ranges and eligibility upfront. No hidden fees, no fine print you find out about later.",
  },
  {
    n: "03",
    title: "Verified document checklist",
    body: "You'll always know exactly what to submit, and why — every document request is explained in plain language.",
  },
  {
    n: "04",
    title: "Licensed partners only",
    body: "We only work with RBI-registered lenders and SEBI-registered investment partners. You can verify every partner we name.",
  },
  {
    n: "05",
    title: "Your data, protected",
    body: "Your information is used to process your application and nothing else. You can request its deletion at any time.",
  },
];

export default function TrustProcess() {
  return (
    <section className="trust-process">
      <div className="container">
        <span className="eyebrow-plain">How we work</span>
        <h2>A process built to be checked, not just trusted</h2>
        <p>
          Money Nest exists because loan-shopping is usually opaque. Here's exactly
          what happens between you telling us what you need, and money reaching your account.
        </p>
        <hr className="hr-gold" />
        <ol className="trust-steps">
          {steps.map((s) => (
            <li key={s.n} className="trust-step">
              <span className="trust-step-n">{s.n}</span>
              <div>
                <h3>{s.title}</h3>
                <p>{s.body}</p>
              </div>
            </li>
          ))}
        </ol>
      </div>
    </section>
  );
}
