/**
 * This produces an illustrative credit-health estimate from
 * self-reported inputs. It is NOT a real bureau pull — an actual
 * credit check requires an integration with CIBIL/Experian/CRIF
 * (via an approved backend, with the user's consent) and returns
 * a real score from the bureau, not a client-side guess. Keep this
 * tool labelled as an estimator in the UI so users don't mistake
 * it for their real score.
 */
export function estimateCreditHealth({
  monthlyIncome,
  existingEmis,
  creditCardUtilisation, // percent, 0-100
  repaymentHistory, // 'always-on-time' | 'mostly-on-time' | 'some-delays' | 'frequent-delays'
  creditHistoryYears,
}) {
  let score = 300;

  // Debt-to-income: lower existing EMI burden relative to income scores higher.
  const dti = monthlyIncome > 0 ? existingEmis / monthlyIncome : 1;
  if (dti < 0.1) score += 140;
  else if (dti < 0.3) score += 100;
  else if (dti < 0.5) score += 60;
  else score += 20;

  // Credit utilisation: under 30% is considered healthy.
  if (creditCardUtilisation <= 30) score += 130;
  else if (creditCardUtilisation <= 50) score += 90;
  else if (creditCardUtilisation <= 75) score += 50;
  else score += 15;

  // Repayment history carries the most weight.
  const historyPoints = {
    "always-on-time": 220,
    "mostly-on-time": 150,
    "some-delays": 80,
    "frequent-delays": 20,
  };
  score += historyPoints[repaymentHistory] ?? 80;

  // Longer credit history adds a modest boost.
  score += Math.min(creditHistoryYears * 6, 60);

  score = Math.max(300, Math.min(900, Math.round(score)));

  let band, message;
  if (score >= 750) {
    band = "Excellent";
    message = "You're well placed for the best interest rates most lenders offer.";
  } else if (score >= 650) {
    band = "Good";
    message = "You should qualify for most loans, though rates may be a notch above the best tier.";
  } else if (score >= 550) {
    band = "Fair";
    message = "Approval is possible, but expect closer scrutiny and higher interest rates.";
  } else {
    band = "Needs work";
    message = "Focus on reducing card utilisation and clearing overdue payments before applying.";
  }

  return { score, band, message };
}
