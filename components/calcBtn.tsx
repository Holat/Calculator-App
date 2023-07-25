import {
  Pressable,
  StyleSheet,
  Text,
  TouchableOpacity,
  View,
} from "react-native";
import React from "react";

import FONTS from "@/constants/FONTS";

const CalcBtn = ({ value }: { value: string }) => {
  const getTextClr = () => {
    if (!Number(value) && value != "C" && value != "0" && value != "=") {
      return "#2E8510";
    } else if (value == "C") {
      return "#FF6F66";
    } else return "white";
  };
  return (
    <TouchableOpacity
      style={[styles.cont, { backgroundColor: value == "=" ? "#2E8510" : "" }]}
      activeOpacity={0.7}
    >
      <Text style={[styles.btn, { color: getTextClr() }]}>{value}</Text>
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
    backgroundColor: "#141414",
  },
  btn: {
    fontFamily: FONTS.RemBold,
    fontSize: 30,
  },
});
