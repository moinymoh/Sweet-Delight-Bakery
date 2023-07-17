export const currency = function (number) {
  return new Intl.NumberFormat('en-IN').format(number);
};
