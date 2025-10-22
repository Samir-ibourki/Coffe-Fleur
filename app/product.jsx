import React from "react";
import { View, Text, TextInput, Image, ScrollView } from "react-native";

const NaveBare = () => {
  return (
    <View style={{padding:10}}>
      <Image
        source={require("../assets/images/bgg.jpeg")}
        style={{ width: 50, height: 50 ,borderRadius: 40 }}
      />
      <Image 
      source={require("../assets/images/11.png")}
      style={{width:100,height:50}}></Image>
      <Image 
      source={require("../assets/images/car.png")}
      style={{width:10,height:10}}
      ></Image>
    </View>
  );
};

const Name = () => {
  return (
    <ScrollView contentContainerStyle={{ alignItems: "center", padding: 20 }}>
      <Text style={{ fontSize: 20, marginBottom: 10 }}>Hello World</Text>

      <Image
        source={require("../assets/images/bgg.jpeg")}
        style={{ width: 200, height: 200, borderRadius: 10, marginBottom: 10 }}
      />

      <TextInput
        style={{
          height: 40,
          width: "80%",
          borderColor: "gray",
          borderWidth: 2,
          borderRadius: 8,
          paddingHorizontal: 10,
        }}
        placeholder="Write something..."
      />
    </ScrollView>
  );
};

export default function App() {
  return (
    <ScrollView>
      <NaveBare />
      <Name />
    </ScrollView>
  );
}
