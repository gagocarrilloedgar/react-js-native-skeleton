import { StatusBar } from "expo-status-bar";
import { observer } from "mobx-react-lite";
import React, { useContext } from "react";
import { Button, StyleSheet, Text, View } from "react-native";
import { CounterStoreContext } from "./stores/CounterStore";

export const App = observer(() => {
  const counterStore = useContext(CounterStoreContext);
  console.log(counterStore.count);
  return (
    <View style={styles.container}>
      <Text>Open up App.tsx to start working on your app test!</Text>
      <Button title="increment" onPress={() => counterStore.count++} />
      <Text>{counterStore.count}</Text>
      <StatusBar style="auto" />
    </View>
  );
});

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: "#fff",
    alignItems: "center",
    justifyContent: "center"
  }
});
