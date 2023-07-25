import {
  StyleSheet,
  Text,
  View,
  StatusBar,
  Platform,
  SafeAreaView,
} from "react-native";
import React from "react";
import { Feather, MaterialCommunityIcons } from "@expo/vector-icons";

import CalcBtn from "@/components/calcBtn";

const Home = () => {
  return (
    <SafeAreaView style={{ flex: 1 }}>
      <View style={styles.cont}>
        <View style={styles.input}>
          <Text></Text>
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
  navBar: {
    paddingVertical: 10,
    paddingHorizontal: 15,
    marginBottom: 15,
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
