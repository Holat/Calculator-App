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
  const [input, setInput] = useState<string>("20");
  return (
    <SafeAreaView style={{ flex: 1 }}>
      <View style={styles.cont}>
        <View style={styles.input}>
          <TextInput style={styles.input1} value={input} editable={false} />
          <TextInput style={styles.input2} value={input} editable={false} />
        </View>
        <View style={styles.navBar}>
          <MaterialCommunityIcons name="history" size={24} color="#99989C" />
          <Feather name="delete" size={24} color="#22AA44" />
        </View>
        <View style={styles.btnG}>
          <View style={styles.btnCont}>
            <CalcBtn value="C" />
            <CalcBtn value="()" />
            <CalcBtn value="%" />
            <CalcBtn value="/" />
          </View>
          <View style={styles.btnCont}>
            <CalcBtn value="7" />
            <CalcBtn value="8" />
            <CalcBtn value="9" />
            <CalcBtn value="x" />
          </View>
          <View style={styles.btnCont}>
            <CalcBtn value="4" />
            <CalcBtn value="5" />
            <CalcBtn value="6" />
            <CalcBtn value="-" />
          </View>
          <View style={styles.btnCont}>
            <CalcBtn value="1" />
            <CalcBtn value="2" />
            <CalcBtn value="3" />
            <CalcBtn value="+" />
          </View>
          <View style={styles.btnCont}>
            <CalcBtn value="+/-" />
            <CalcBtn value="0" />
            <CalcBtn value="." />
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
