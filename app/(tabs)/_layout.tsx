import { Platform } from "react-native";
import { Tabs } from "expo-router";

export default function TabsLayout() {
  return (
    <Tabs
      screenOptions={{
        headerShown: false,
        tabBarActiveTintColor: "red",
        tabBarStyle: Platform.OS === "ios" && {
          backgroundColor: "transparent",
        },
      }}
    >
      <Tabs.Screen name="index" options={{ tabBarLabel: "Discover" }} />
      <Tabs.Screen name="profile" options={{ tabBarLabel: "Profile" }} />
    </Tabs>
  );
}
