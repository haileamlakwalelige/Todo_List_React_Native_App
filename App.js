// import { StatusBar } from "expo-status-bar";
import {
  Keyboard,
  KeyboardAvoidingView,
  Platform,
  Text,
  TextInput,
  TouchableOpacity,
  View,
} from "react-native";
import Task from "./components/Task";
import { useState } from "react";

export default function App() {
  const [task, setTask] = useState();
  const [taskItems, setTaskItems] = useState([]);

  const handleAddedTask = () => {
    Keyboard.dismiss();
    setTaskItems([...taskItems, task]);
    setTask(null);
    // console.log(taskItems);
  };

  // this function do as filter/ remove the selected item
  const completeTask = (index) => {
    let itemsCopy = [...taskItems];
    itemsCopy.splice(index, 1);
    setTaskItems(itemsCopy);
  };
  return (
    // <ScrollView className="bg-[#e8eaed]">
    <View className="flex-1 items-center justify-between mt-6 bg-[#e8eaed]">
      {/* Today's Task */}
      <View className="pt-[20px] px-10">
        <Text className="text-3xl text-center py-4  font-bold  text-gray-800">
          Today's Task
        </Text>

        <View>
          {/* This is Where all task place */}
          {taskItems.map((item, index) => (
            <TouchableOpacity key={index} onPress={() => completeTask(index)}>
              <Task text={item} />
            </TouchableOpacity>
          ))}

          {/* <Task text={"Task Two"} />
          <Task text={"Task there"} /> */}
        </View>
      </View>

      <KeyboardAvoidingView
        behavior={Platform.OS === "ios" ? "padding" : "height"}
        className="flex-row items-center min-w-screen  justify-center gap-4  mb-3"
      >
        <TextInput
          placeholder={"Write a Task"}
          className="bg-white rounded-2xl placeholder:pl-3 min-w-[70vw] min-h-[50px]"
          value={task}
          onChangeText={(text) => setTask(text)}
        />
        <TouchableOpacity onPress={() => handleAddedTask()}>
          <View className="flex-col h-[50px] w-[50px] bg-white  justify-center items-center rounded-full">
            <Text className="text-4xl font-thin text-slate-500 ">+</Text>
          </View>
        </TouchableOpacity>
      </KeyboardAvoidingView>
    </View>
    // </ScrollView>
  );
}
