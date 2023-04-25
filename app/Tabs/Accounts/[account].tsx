import { View, Text } from "react-native";
import React from "react";
import { useSearchParams } from "expo-router";
import { styles } from "../../../src/services/styles";
import { Stack } from "expo-router";

export default function account() {
  // get account name string, else set as null
  const { account } = useSearchParams();

  return (
    <View style={styles.container}>
      <Stack.Screen
        options={{
          headerTitle: account?.toString(),
        }}
      />
      <View style={styles.main}>
        <Text style={styles.title}>Account</Text>
        <Text style={styles.subtitle}>{account}</Text>
      </View>
    </View>
  );
}
