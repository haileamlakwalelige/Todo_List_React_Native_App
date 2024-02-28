import { View, Text, StyleSheet } from "react-native";
import React from "react";

export default function Task(props) {
  return (
    <View className="bg-white rounded flex-row justify-between text-slate-800 my-2 min-w-[90vw] py-1 px-4">
      <View className="flex-row gap-3 flex-wrap my-4 justify-between items-center mb-3 ">
        <View className="w-[24px] h-[24px] bg-[#55bcf6] opacity-[0.4] rounded"></View>
        <Text className="max-w-[80%] text-slate-700">{props.text}</Text>
      </View>
      <View className="mt-6"
        style={styles.circle}
      ></View>
    </View>
  );
}

const styles = StyleSheet.create({
  circle: {
    width:16,
    height:16,
    borderColor:'#55bcf6',
    borderWidth:2,
    borderRadius:10,
  },
});
