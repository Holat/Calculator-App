import { StyleSheet, Text, TouchableOpacity } from "react-native";
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
  isEqu,
}: // result,
BtnProp) => {
  const [equ, setEqu] = useState("");

  const numInput = () => {
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

    if (
      setOperator &&
      setInput &&
      value !== "C" &&
      isOp === true &&
      isEqu === false
    ) {
      const handleSetOp = (prevOp: string) => {
        if (num1 !== "" && num2 === "") {
          if (prevOp === "") {
            setInput((prevValue) => prevValue + value);
            return value;
          } else {
            setInput((prevValue) => prevValue.slice(0, -1) + value);
            return value;
          }
        } else if (num1 !== "" && num2 !== "") {
          setInput((prevValue) => prevValue + value);
          return value;
        } else return "";
      };
      setOperator(handleSetOp);
    }
  };

  const calulate = () => {
    if (
      num1 &&
      num2 &&
      isOp === true &&
      setResult &&
      setNum1 &&
      setNum2 &&
      setOperator &&
      setInput
    ) {
      if (num1 !== "" && num2 !== "" && op !== "") {
        let res = 0;
        let Num1 = parseFloat(num1);
        let Num2 = parseFloat(num2);
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
        let final = res.toString();
        setResult(final);
        setEqu(final);
        setNum1(final);
        setNum2("");
        if (isEqu === true) {
          setInput(final);
          setResult("");
          setOperator("");
        }
      }
    }
  };

  const clear = () => {
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

  const handleBtnPress = () => {
    numInput();
    calulate();
    clear();
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
