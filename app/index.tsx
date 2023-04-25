import React from "react";
import { Text } from "react-native";
import { Redirect } from "expo-router";
import { styles } from "../src/services/styles";

interface Props {}

const App: React.FC<Props> = () => {
  return (
    <Redirect href={"/Tabs"} />
    // <View style={styles.container}>
    //   <View style={styles.main}>
    //     <Text style={styles.title}>Welcome</Text>
    //     <Text style={styles.subtitle}>Comming Soon</Text>
    //   </View>
    // </View>
  );
};
export default App;
