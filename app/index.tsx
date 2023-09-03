import {
  StyleSheet,
  View,
  StatusBar,
  Platform,
  SafeAreaView,
  TextInput,
  Pressable,
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
  const [op, setOperator] = useState("");
  const clearProp = {
    setInput,
    setOperator,
    setNum1,
    setNum2,
    setResult,
  };

  const operatorProp = {
    setResult,
    setInput,
    setOperator,
    setNum1,
    setNum2,
    num1,
    num2,
    result,
    op,
  };

  const numProp = {
    setOperator,
    setInput,
    setNum1,
    setNum2,
    num1,
    num2,
    result,
    op,
  };

  const handlePress = () => {
    if (num1 !== "" && num2 === "" && op === "") {
      setNum1((prevNum1) => prevNum1.slice(0, -1));
      setInput((prevIn) => prevIn.slice(0, -1));
    } else if ((num1 !== "" && op !== "" && num2 === "") || op === "") {
      setNum1((prevNum1) => prevNum1.slice(0, -1));
      setOperator((prevOp) => prevOp.slice(0, -1));
      setInput((prevIn) => prevIn.slice(0, -1));
      setResult("");
    } else {
      setNum2((prevNum2) => prevNum2.slice(0, -1));
      setInput((prevIn) => prevIn.slice(0, -1));
    }
  };

  return (
    <SafeAreaView style={{ flex: 1 }}>
      <View style={styles.cont}>
        <View>
          <TextInput style={styles.input1} value={input} editable={false} />
          <TextInput style={styles.input2} value={result} editable={false} />
        </View>
        <View style={styles.navBar}>
          <MaterialCommunityIcons name="history" size={24} color="#99989C" />
          <Pressable onPress={handlePress}>
            <Feather
              name="delete"
              size={24}
              color={input === "" ? "#385826" : "#22AA44"}
            />
          </Pressable>
        </View>
        <View style={styles.btnG}>
          <View style={styles.btnCont}>
            <CalcBtn value="C" {...clearProp} />
            <CalcBtn value="()" />
            <CalcBtn value="%" isOp={true} isEqu={false} {...operatorProp} />
            <CalcBtn value="/" isOp={true} isEqu={false} {...operatorProp} />
          </View>
          <View style={styles.btnCont}>
            <CalcBtn value="7" isOp={false} {...numProp} />
            <CalcBtn value="8" isOp={false} {...numProp} />
            <CalcBtn value="9" isOp={false} {...numProp} />
            <CalcBtn value="x" isOp={true} isEqu={false} {...operatorProp} />
          </View>
          <View style={styles.btnCont}>
            <CalcBtn value="4" isOp={false} {...numProp} />
            <CalcBtn value="5" isOp={false} {...numProp} />
            <CalcBtn value="6" isOp={false} {...numProp} />
            <CalcBtn value="-" isOp={true} isEqu={false} {...operatorProp} />
          </View>
          <View style={styles.btnCont}>
            <CalcBtn value="1" isOp={false} {...numProp} />
            <CalcBtn value="2" isOp={false} {...numProp} />
            <CalcBtn value="3" isOp={false} {...numProp} />
            <CalcBtn value="+" isOp={true} isEqu={false} {...operatorProp} />
          </View>
          <View style={styles.btnCont}>
            <CalcBtn value="+/-" />
            <CalcBtn value="0" isOp={false} {...numProp} />
            <CalcBtn value="." isOp={false} {...numProp} />
            <CalcBtn value="=" isOp={true} isEqu={true} {...operatorProp} />
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
    flex: 1,
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
