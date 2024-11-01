export const getFourDigitCode = () => {
  let code = 1;
  while (code % 3 !== 0) {
    code = Math.floor(Math.random() * (9999-1000)) + 1000;
  }
  return code + 1;
};

export const getParsedPizzaCode = (pizzaCode, startingNumber) => {
  return parseInt(startingNumber + pizzaCode.toString());
};
