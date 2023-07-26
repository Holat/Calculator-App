const getTextClr = (value: string) => {
  if (!Number(value) && value != "C" && value != "0" && value != "=")
    return "#2E8510";
  else if (value == "C") return "#FF6F66";
  else return "white";
};

export { getTextClr };
