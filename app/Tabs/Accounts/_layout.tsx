import { Stack } from "expo-router";

export default () => (
  <Stack
    screenOptions={{
      animation: "slide_from_right",
    }}
  >
    <Stack.Screen
      name="index"
      options={{
        headerShown: false,
      }}
    />
  </Stack>
);
