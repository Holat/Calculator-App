import {
  StyleSheet,
  Text,
  View,
  StatusBar,
  Platform,
  SafeAreaView,
  TextInput,
} from "react-native";
import React, { useState } from "react";
import { Feather, MaterialCommunityIcons } from "@expo/vector-icons";

import CalcBtn from "@/components/calcBtn";
import FONTS from "@/constants/FONTS";

const Home = () => {
  const [input, setInput] = useState("");
  const [num1, setNum1] = useState("");
  const [num2, setNum2] = useState("");
  const [result, setResult] = useState("");
  const [operator, setOperator] = useState("");

  return (
    <SafeAreaView style={{ flex: 1 }}>
      <View style={styles.cont}>
        <View style={styles.input}>
          <TextInput style={styles.input1} value={input} editable={false} />
          <TextInput style={styles.input2} value={result} editable={false} />
        </View>
        <View style={styles.navBar}>
          <MaterialCommunityIcons name="history" size={24} color="#99989C" />
          <Feather name="delete" size={24} color="#22AA44" />
        </View>
        <View style={styles.btnG}>
          <View style={styles.btnCont}>
            <CalcBtn
              value="C"
              setInput={setInput}
              setOperator={setOperator}
              setNum1={setNum1}
              setNum2={setNum2}
              setResult={setResult}
            />
            <CalcBtn value="()" />
            <CalcBtn
              value="%"
              setInput={setInput}
              setOperator={setOperator}
              isOp={true}
              num1={num1}
              num2={num2}
              op={operator}
              setResult={setResult}
              result={result}
              setNum1={setNum1}
              setNum2={setNum2}
            />
            <CalcBtn
              value="/"
              setInput={setInput}
              setOperator={setOperator}
              isOp={true}
              num1={num1}
              num2={num2}
              op={operator}
              setResult={setResult}
              result={result}
              setNum1={setNum1}
              setNum2={setNum2}
            />
          </View>
          <View style={styles.btnCont}>
            <CalcBtn
              value="7"
              setNum1={setNum1}
              setNum2={setNum2}
              setInput={setInput}
              setOperator={setOperator}
              isOp={false}
              num1={num1}
              num2={num2}
              op={operator}
            />
            <CalcBtn
              value="8"
              setNum1={setNum1}
              setNum2={setNum2}
              setInput={setInput}
              setOperator={setOperator}
              isOp={false}
              num1={num1}
              num2={num2}
              op={operator}
            />
            <CalcBtn
              value="9"
              setNum1={setNum1}
              setNum2={setNum2}
              setInput={setInput}
              isOp={false}
              num1={num1}
              op={operator}
              num2={num2}
              setOperator={setOperator}
            />
            <CalcBtn
              value="x"
              setInput={setInput}
              setOperator={setOperator}
              isOp={true}
              num1={num1}
              num2={num2}
              op={operator}
              setResult={setResult}
              result={result}
              setNum1={setNum1}
              setNum2={setNum2}
            />
          </View>
          <View style={styles.btnCont}>
            <CalcBtn
              value="4"
              setNum1={setNum1}
              setNum2={setNum2}
              setInput={setInput}
              isOp={false}
              num1={num1}
              num2={num2}
              op={operator}
              setOperator={setOperator}
            />
            <CalcBtn
              value="5"
              setNum1={setNum1}
              setNum2={setNum2}
              setInput={setInput}
              isOp={false}
              num1={num1}
              num2={num2}
              op={operator}
              setOperator={setOperator}
            />
            <CalcBtn
              value="6"
              setNum1={setNum1}
              setNum2={setNum2}
              setInput={setInput}
              isOp={false}
              num1={num1}
              num2={num2}
              op={operator}
              setOperator={setOperator}
            />
            <CalcBtn
              value="-"
              setInput={setInput}
              setOperator={setOperator}
              isOp={true}
              num1={num1}
              num2={num2}
              op={operator}
              setResult={setResult}
              result={result}
              setNum1={setNum1}
              setNum2={setNum2}
            />
          </View>
          <View style={styles.btnCont}>
            <CalcBtn
              value="1"
              setNum1={setNum1}
              setNum2={setNum2}
              setInput={setInput}
              isOp={false}
              num1={num1}
              num2={num2}
              op={operator}
              setOperator={setOperator}
            />
            <CalcBtn
              value="2"
              setNum1={setNum1}
              setNum2={setNum2}
              setInput={setInput}
              isOp={false}
              num1={num1}
              num2={num2}
              op={operator}
              setOperator={setOperator}
            />
            <CalcBtn
              value="3"
              setNum1={setNum1}
              setNum2={setNum2}
              setInput={setInput}
              isOp={false}
              num1={num1}
              num2={num2}
              op={operator}
              setOperator={setOperator}
            />
            <CalcBtn
              value="+"
              setInput={setInput}
              setOperator={setOperator}
              isOp={true}
              num1={num1}
              num2={num2}
              op={operator}
              setResult={setResult}
              result={result}
              setNum1={setNum1}
              setNum2={setNum2}
            />
          </View>
          <View style={styles.btnCont}>
            <CalcBtn value="+/-" />
            <CalcBtn
              value="0"
              setNum1={setNum1}
              setNum2={setNum2}
              setInput={setInput}
              num1={num1}
              num2={num2}
              isOp={false}
              op={operator}
              setOperator={setOperator}
            />
            <CalcBtn
              value="."
              setNum1={setNum1}
              setNum2={setNum2}
              setInput={setInput}
              num1={num1}
              num2={num2}
              isOp={false}
              op={operator}
              setOperator={setOperator}
            />
            <CalcBtn value="=" />
          </View>
        </View>
      </View>
    </SafeAreaView>
  );
};

export default Home;

const styles = StyleSheet.create({
  cont: {
    flex: 1,
    paddingHorizontal: 10,
    paddingTop: Platform.OS === "android" ? StatusBar.currentHeight : 0,
  },
  input: {
    flex: 1,
  },
  input1: {
    marginBottom: 30,
    fontSize: 45,
    paddingVertical: 10,
    paddingHorizontal: 10,
    textAlign: "right",
    fontFamily: FONTS.RemRegular,
    color: "white",
    marginTop: 15,
  },
  input2: {
    textAlign: "right",
    color: "#99989C",
    padding: 10,
    fontSize: 25,
    fontFamily: FONTS.RemRegular,
  },
  navBar: {
    paddingVertical: 10,
    paddingHorizontal: 15,
    marginBottom: 25,
    flexDirection: "row",
    alignItems: "center",
    justifyContent: "space-between",
  },
  btnG: {
    justifyContent: "space-between",
    flex: 2,
    borderTopColor: "#1b1b1b",
    borderTopWidth: 2,
    paddingVertical: 15,
  },
  btnCont: {
    flexDirection: "row",
    alignItems: "center",
    justifyContent: "space-between",
  },
});
