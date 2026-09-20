/**
 * Standard reducing-balance EMI calculation.
 * principal: loan amount
 * annualRate: annual interest rate in percent, e.g. 9.5
 * tenureMonths: loan tenure in months
 */
export function calculateEmi(principal, annualRate, tenureMonths) {
  const monthlyRate = annualRate / 12 / 100;
  if (monthlyRate === 0) {
    const emi = principal / tenureMonths;
    return buildResult(principal, emi, tenureMonths);
  }
  const factor = Math.pow(1 + monthlyRate, tenureMonths);
  const emi = (principal * monthlyRate * factor) / (factor - 1);
  return buildResult(principal, emi, tenureMonths);
}

function buildResult(principal, emi, tenureMonths) {
  const totalPayment = emi * tenureMonths;
  const totalInterest = totalPayment - principal;
  return {
    emi: round(emi),
    totalInterest: round(totalInterest),
    totalPayment: round(totalPayment),
  };
}

export function amortizationSchedule(principal, annualRate, tenureMonths) {
  const monthlyRate = annualRate / 12 / 100;
  const { emi } = calculateEmi(principal, annualRate, tenureMonths);
  let balance = principal;
  const rows = [];
  for (let month = 1; month <= tenureMonths; month++) {
    const interestPart = balance * monthlyRate;
    const principalPart = emi - interestPart;
    balance = Math.max(balance - principalPart, 0);
    rows.push({
      month,
      principalPart: round(principalPart),
      interestPart: round(interestPart),
      balance: round(balance),
    });
  }
  return rows;
}

function round(n) {
  return Math.round(n * 100) / 100;
}
