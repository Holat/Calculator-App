import {
  Pressable,
  StyleSheet,
  Text,
  TouchableOpacity,
  View,
} from "react-native";
import React, { useState } from "react";

import FONTS from "@/constants/FONTS";
import { BtnProp } from "@/types/types";
import { getTextClr } from "@/constants/FUNT";

const CalcBtn = ({
  value,
  setNum1,
  setNum2,
  setInput,
  setOperator,
  isOp,
  num1,
  num2,
  op,
  setResult,
}: BtnProp) => {
  const [op2, setOp2] = useState("");
  const handleBtnPress = () => {
    if (
      setNum1 &&
      setInput &&
      value !== "C" &&
      isOp === false &&
      setNum2 &&
      setOperator
    ) {
      if (
        (num1 === "" && op === "" && num2 === "") ||
        (num1 !== "" && op === "" && num2 === "")
      ) {
        setNum1((prevNum1) => prevNum1 + value);
        setInput((prevInput) => prevInput + value);
      } else if (
        (num1 !== "" && op !== "" && num2 === "") ||
        (num1 !== "" && op !== "" && num2 !== "")
      ) {
        setNum2((prevNum1) => prevNum1 + value);
        setInput((prevInput) => prevInput + value);
      }
    }

    if (setOperator && setInput && value !== "C" && isOp === true) {
      const handleSetOp = (prevOp: string) => {
        if (num1 !== "") {
          if (prevOp === "") {
            setInput((prevValue) => prevValue + value);
            return value;
          } else {
            setInput((prevValue) => prevValue.slice(0, -1) + value);
            return value;
          }
        } else return "";
      };
      setOperator(handleSetOp);
    }

    if (num1 && num2 && isOp === true && setResult) {
      if (num1 !== "" && num2 !== "" && op !== "") {
        let res = 0;
        let Num1 = parseInt(num1);
        let Num2 = parseInt(num2);
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
            res = NaN;
            break;
        }
        let final = res.toString();
        setResult(final);
      }
    }

    if (
      value === "C" &&
      setInput &&
      setOperator &&
      setNum1 &&
      setNum2 &&
      setResult
    ) {
      setInput("");
      setOperator("");
      setNum1("");
      setNum2("");
      setResult("");
    }
  };

  return (
    <TouchableOpacity
      style={[
        styles.cont,
        { backgroundColor: value == "=" ? "#2E8510" : "#141414" },
      ]}
      activeOpacity={0.7}
      onPress={handleBtnPress}
    >
      <Text style={[styles.btn, { color: getTextClr(value) }]}>{value}</Text>
    </TouchableOpacity>
  );
};

export default CalcBtn;

const styles = StyleSheet.create({
  cont: {
    borderRadius: 50,
    width: 90,
    aspectRatio: 1,
    alignItems: "center",
    justifyContent: "center",
    fontFamily: FONTS.RemRegular,
  },
  btn: {
    fontFamily: FONTS.RemBold,
    fontSize: 30,
  },
});
// switch (prevOp) {
//   case "+":
//     break;
//   case "-":
//     break;
//   case "/":
//     break;
//   case "*":
//     break;
//   case "%":
//     break;
//   default:
//     break;
// }
