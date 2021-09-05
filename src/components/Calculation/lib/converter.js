export function celToFar(fahrenheit) {
  return (fahrenheit * 9) / 5 + 32;
}

export function farToCell(celsius) {
  return ((celsius - 32) * 5) / 9;
}

export function convertTo(temperature, converter) {
  const input = parseFloat(temperature);
  if (Number.isNaN(input)) {
    return "";
  }
  const output = converter(input);
  const rounded = Math.round(output * 1000) / 1000;
  return rounded.toString();
}
