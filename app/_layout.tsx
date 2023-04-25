import { Stack } from "expo-router";

export default () => (
  <Stack
    screenOptions={{
      headerStyle: {
        backgroundColor: "#000",
      },
      headerTintColor: "#fff",
      headerTitleStyle: {
        fontWeight: "bold",
      },
    }}
  >
    <Stack.Screen
      name="Tabs"
      options={{
        headerShown: false,
      }}
    />
  </Stack>
);
