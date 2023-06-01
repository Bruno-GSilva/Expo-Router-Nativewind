import { Link, Tabs } from "expo-router";
import ModalScreen from "../../src/components/modal";
import { styled } from "nativewind";
import { Button } from "react-native";

export default function TabLayout() {
  return (
    <Tabs>
      <Tabs.Screen
        name="index"
        options={{
          headerShown:false,
          href: "/",
        }}></Tabs.Screen>
      <Tabs.Screen
        name="two"
        options={{
          href: "/two",
        }}></Tabs.Screen>
    </Tabs>
  );
}
