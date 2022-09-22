import React, { useEffect } from "react";
import {
  ActivityIndicator,
  Alert,
  ImageBackground,
  Keyboard,
  StyleSheet,
  TouchableOpacity,
  TouchableWithoutFeedback,
  View,
} from "react-native";
import { Button, Text, TextInput } from "react-native-paper";
import { ValidateEmail } from "../utils/formatter";
export default function Contact({ navigation }) {
  const [email, setEmail] = React.useState("");
  const [message, setMessage] = React.useState("");
  const [time, setTime] = React.useState(false);

  useEffect(() => {
    setTime(true);
    setTimeout(() => {
      setTime(false);
    }, 3000);
  }, []);

  const onSubmit = () => {
    console.log(email, message, "debug");
    // setEmail("");
    // setMessage("");
    if (email.length === 0) {
      Alert.alert("Error", "Add email!");
      return false;
    } else if (message.length === 0) {
      Alert.alert("Error", "Add message!");
      return false;
    } else if (ValidateEmail(email) == false) {
      console.log("fail");
      return false;
    } else {
      console.log("success");
      setEmail("");
      setMessage("");
      Alert.alert("success", "Your message has been received!");
      navigation.navigate("Home");

      return true;
    }
  };
  return (
    <View style={styles.container}>
      <TouchableWithoutFeedback onPress={Keyboard.dismiss}>
        <ImageBackground
          style={{ padding: 20, flex: 1 }}
          source={require("../assets/Images/pat3.jpg")}
        >
          {time ? (
            <ActivityIndicator
              size="large"
              color="white"
              style={{
                flex: 1,
                justifyContent: "center",
                alignItems: "center",
              }}
            />
          ) : (
            <>
              <Text
                variant="headlineSmall"
                style={{
                  color: "white",
                  textAlign: "center",
                  marginBottom: 10,
                }}
              >
                Contact Us
              </Text>

              <TextInput
                mode="outlined"
                label="Email"
                right={<TextInput.Icon icon="email-newsletter" />}
                onChangeText={setEmail}
                value={email}
              />
              <TextInput
                style={{ marginTop: 5 }}
                mode="outlined"
                label="Message"
                multiline={true}
                right={<TextInput.Icon icon="message" />}
                onChangeText={setMessage}
                value={message}
              />
              <TouchableOpacity>
                <Button
                  mode="elevated"
                  style={
                    (email.length && message.length) === 0
                      ? { marginTop: 10, backgroundColor: "#dddd" }
                      : { marginTop: 10 }
                  }
                  onPress={onSubmit}
                  // disabled={(email.length && message.length) === 0}
                >
                  Send
                </Button>
              </TouchableOpacity>
            </>
          )}
        </ImageBackground>
      </TouchableWithoutFeedback>
    </View>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
  },
});
