import React from "react";
import { createNativeStackNavigator } from "@react-navigation/native-stack";
import { StyleSheet, Text, View } from "react-native";
import Login from "./comonents/Login";
import Home from "./comonents/Home";
import Notes from "./comonents/Notes";
import TextField from "./comonents/textArea";
import Recorder from "./comonents/Recorder";
import hypeLink from "./comonents/HypeLink";
import SaveScreen from "./comonents/SaveScreen";
import ImagePicker from "./comonents/ImagePicker";
import editor from "./comonents/HypeLink";

const Stack = createNativeStackNavigator();

const StackNavigator = () => {
  return (
    <Stack.Navigator screenOptions={{ headerShown: true }}>
      <Stack.Group>
        <Stack.Screen name="Login" component={Login} />
        <Stack.Screen name="Home" component={Home} />
        <Stack.Screen name="TextField" component={TextField} />
         <Stack.Screen name="Notes" component={Notes} />
         <Stack.Screen name="Recorder" component={Recorder} />
         <Stack.Screen name="hypeLink" component={editor} />
         <Stack.Screen name="SaveScreen" component={SaveScreen} />
         <Stack.Screen name="ImagePicker" component={ImagePicker} />
      </Stack.Group>
    </Stack.Navigator>
  );
};

export default StackNavigator;

const styles = StyleSheet.create({});