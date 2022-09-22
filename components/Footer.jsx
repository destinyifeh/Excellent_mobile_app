import {
  Keyboard,
  StyleSheet,
  Text,
  TouchableWithoutFeedback,
  View,
} from "react-native";
import { Button } from "react-native-paper";
import { footerYear } from "../utils/formatter";
const Footer = () => {
  // const date = new Date().getFullYear();
  return (
    <View style={styles.footer}>
      <TouchableWithoutFeedback onPress={Keyboard.dismiss}>
        <Text style={{ textAlign: "center", color: "black" }}>Made with </Text>
      </TouchableWithoutFeedback>
      <Button icon="heart" textColor="red"></Button>
      <TouchableWithoutFeedback onPress={Keyboard.dismiss}>
        <Text style={{ textAlign: "center", color: "black" }}>
          &copy; {footerYear} By Dez
        </Text>
      </TouchableWithoutFeedback>
    </View>
  );
};

const styles = StyleSheet.create({
  footer: {
    marginVertical: 20,
    textAlign: "center",
  },
});
export default Footer;
