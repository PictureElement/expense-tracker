/**
 * Validate simple amount and description form
 * @param values - { amount: string, description: string }
 * @returns errors - {} | { amount: string } | { description: string } | { amount: string, description: string }
 */
 export default function validate(values) {
  let errors = {};

  // Positive numbers (integers or decimals) with up to 2 decimal places
  const validAmountRegex = /^(?!(?:0|0\.0|0\.00)$)[+]?\d+(\.\d|\.\d[0-9])?$/;

  if (!values.amount) {
    errors.amount = "Enter amount";
  } else if (!validAmountRegex.test(values.amount)) {
    errors.amount = "Enter a positive number (integer or decimal) with up to 2 decimal places";
  }

  if(!values.description) {
    errors.description = "Enter description";
  }

  return errors;
}