import { StatusBar } from "expo-status-bar";
import { StyleSheet, View } from "react-native";
import { Provider } from "react-native-paper";
import Navigate from "./components/Navigate";
export default function App() {
  return (
    <View style={styles.container}>
      {/* <Header /> */}
      <Provider>
        <Navigate />
      </Provider>
      {/* <Nav /> */}
      <StatusBar style="auto" />
      {/* <Footer /> */}
    </View>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: "#fff",
  },
});
