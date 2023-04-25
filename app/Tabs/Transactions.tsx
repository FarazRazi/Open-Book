import { View, Text } from "react-native";
import React from "react";
import { styles } from "../../src/services/styles";

export default function Transactions() {
  return (
    <View style={styles.container}>
      <View style={styles.main}>
        <Text style={styles.title}>Transactions</Text>
        <Text style={styles.subtitle}>Comming Soon</Text>
      </View>
    </View>
  );
}
