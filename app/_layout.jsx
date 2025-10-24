import { Stack } from "expo-router";
//import { SafeAreaView } from "react-native-safe-area-context";

export default function Layout() {
  return (
    <Stack>
      <Stack.Screen name="index" options={{ headerShown: false }} />
      <Stack.Screen
        name="products/index"
        options={{ title: "Products", headerShown: false }}
      />
      <Stack.Screen
        name="products/[id]"
        options={{ title: "Product details", headerShown: false }}
      />
    </Stack>
  );
}
