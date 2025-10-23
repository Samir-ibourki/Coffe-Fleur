import { View, Text, ImageBackground, StyleSheet, Animated, Easing } from "react-native";
import { Link } from "expo-router";
import { useEffect, useRef } from "react";
import bg from "../assets/images/bgg.jpeg";

export default function HomeScreen() {
  const slideAnim = useRef(new Animated.Value(50)).current; 
  const opacityAnim = useRef(new Animated.Value(0)).current; 

  useEffect(() => {
    Animated.parallel([
      Animated.timing(slideAnim, {
        toValue: 0,
        duration: 800,
        useNativeDriver: true,
        easing: Easing.out(Easing.exp),
      }),
      Animated.timing(opacityAnim, {
        toValue: 1,
        duration: 800,
        useNativeDriver: true,
        easing: Easing.out(Easing.exp),
      }),
    ]).start();
  }, [opacityAnim, slideAnim]);

  return (
    <View style={styles.container}>
      <ImageBackground source={bg} style={styles.bgImage} resizeMode="cover">
       
        <View style={styles.overlay} />

       
        <Animated.View
          style={[
            styles.bottomContainer,
            { 
              transform: [{ translateY: slideAnim }],
              opacity: opacityAnim,
            },
          ]}
        >
          <Text style={styles.text}>
            My first thought in the morning is always yo
          </Text>

          <Link href="/products" style={styles.button}>
            <Text style={styles.buttonText}>Go to Details</Text>
          </Link>
        </Animated.View>
      </ImageBackground>
    </View>
  );
}

const styles = StyleSheet.create({
  container: { flex: 1 },
  bgImage: { flex: 1, justifyContent: "flex-end" },
  overlay: {
    ...StyleSheet.absoluteFillObject,
    backgroundColor: "rgba(0,0,0,0.4)",
  },
  bottomContainer: { 
    alignItems: "center",       
    justifyContent: "center",  
    marginBottom: 30,
    position: "absolute",
    bottom: 50,
    width: "100%",
  },
  text: {
    color: "#fff",
    fontSize: 24,
    fontWeight: "bold",
    textAlign: "center",
    marginBottom: 20,
    textShadowColor: "#000",
    textShadowOffset: { width: 1, height: 1 },
    textShadowRadius: 5,
    maxWidth: "95%",
    alignSelf: "center",
  },
  button: {
    backgroundColor: "#D2691E",
    paddingVertical: 15,
    paddingHorizontal: 30,
    borderRadius: 30,
    alignItems: "center",
    justifyContent: "center",
    shadowColor: "#000",
    shadowOffset: { width: 0, height: 3 },
    shadowOpacity: 0.3,
    shadowRadius: 4,
    elevation: 5,
  },
  buttonText: { 
    color: "#fff", 
    fontSize: 18, 
    fontWeight: "bold", 
  },
});

