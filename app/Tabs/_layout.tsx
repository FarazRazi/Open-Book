import { Tabs } from "expo-router";

export default function TabsLayout() {
  return (
    <Tabs initialRouteName="Accounts">
      <Tabs.Screen name="Transactions" />
      <Tabs.Screen name="Accounts" />
      <Tabs.Screen name="More" />
    </Tabs>
  );
}
