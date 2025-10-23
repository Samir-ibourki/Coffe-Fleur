import React from "react";
import { View, Text, TextInput, Image, ScrollView } from "react-native";

const NaveBare = () => {
  return (
    <View style={{padding:10 ,flix:1,flexDirection:"row", justifyContent:"space-between" }}>
      <Image
        source={require("../assets/images/bgg.jpeg")}
        style={{ width: 30, height: 30 ,borderRadius: 40 ,}}
      />
      <Image 
      source={require("../assets/images/11.png")}
      style={{width:100,height:50, }}></Image>
      <Image 
      source={require("../assets/images/cart.png")}
      style={{width: 30  ,height:  30, }}
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
