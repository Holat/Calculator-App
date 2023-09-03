const getTextClr = (value: string) => {
  if (
    !Number(value) &&
    value != "C" &&
    value != "0" &&
    value != "=" &&
    value != "."
  )
    return "#2E8510";
  else if (value == "C") return "#FF6F66";
  else return "white";
};

const getOp = (op: string | undefined, Num1: number, Num2: number) => {
  let res = 0;
  switch (op) {
    case "+":
      res = Num1 + Num2;
      break;
    case "-":
      res = Num1 - Num2;
      break;
    case "/":
      res = Num1 / Num2;
      break;
    case "x":
      res = Num1 * Num2;
      break;
    case "%":
      res = Num1 % Num2;
      break;
    default:
      res = 0;
      break;
  }
  return res;
};

export { getTextClr, getOp };
