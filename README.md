# Money Nest — Loans, Investments, Insurance & Property

A React (Vite) frontend for a MoneyNest Advisor–style finance site: EMI
calculator, credit-health estimator, loan category pages, SIP/investment
planning, insurance & property pages, a scroll-triggered signup prompt, and
an admin view of signups.

## Run it locally

```bash
npm install
npm run dev
```

Then open the URL Vite prints (usually http://localhost:5173).

To build for production:
```bash
npm run build
npm run preview
```

## What's real vs. demo in this build

This project is **frontend-only**, as requested. A few pieces stand in for a
real backend and should be replaced before you take this live:

- **User accounts & admin dashboard** (`src/context/AuthContext.jsx`): signups
  and logins are stored in the browser's `localStorage`, not a real database.
  The admin dashboard at `/admin/dashboard` (demo login: `admin` /
  `moneynest@admin`) reads from the same local store. For production, replace
  the functions in `AuthContext.jsx` with calls to a real server: passwords
  must be hashed (e.g. bcrypt) server-side and never stored or shown in plain
  text, and admin access needs real authentication and authorization, not a
  hardcoded password.
- **Credit checker** (`src/utils/creditScore.js`): this is an illustrative
  estimator from self-reported numbers, not a real credit bureau pull. A real
  credit check needs an approved integration with CIBIL/Experian/CRIF via a
  backend, with the user's explicit consent, and should never be simulated
  as if it were the user's actual score.
- **Contact form**: currently just shows a success message; wire it to your
  email service or backend endpoint.

## Structure

- `src/pages/` — one file per page/route (loans, EMI calculator, credit
  checker, investments, insurance, property, documents, about, contact,
  login/signup, admin).
- `src/pages/loans/LoanDetail.jsx` — one shared template rendering a real
  URL per loan type (`/loans/home-loan`, `/loans/car-loan`, etc.) driven by
  `src/data/loanTypes.js`.
- `src/components/` — Navbar (with the top contact strip), Footer,
  TrustProcess (shown at the end of every page), ScrollLoginPrompt (the
  3-minute scroll-triggered signup modal), FloatingButtons (WhatsApp +
  advisor).
- `src/styles/theme.css` — the green/gold design system (colors, type,
  buttons, cards, forms) used across every page.

## Before launch, also do

- Swap the placeholder Unsplash images for your own licensed photography.
- Replace the demo phone/email/address if the ones on the reference design
  aren't final.
- Add real Terms, Privacy Policy, and a cookie/consent notice — this
  collects personal and financial-intent data, so a privacy policy isn't
  optional in most jurisdictions.
- Put the admin dashboard behind real authentication before deploying;
  right now it's a client-side demo, which is not secure for real user data.
