import React, { useState, useEffect } from "react";
import {
  View,
  Text,
  StyleSheet,
  ImageBackground,
  ActivityIndicator,
} from "react-native";
import Loader from "../components/Loader";
export default function Disclaimer() {
  const [isLoading, setIsLoading] = useState(false);

  useEffect(() => {
    setIsLoading(true);
    setTimeout(() => {
      setIsLoading(false);
    }, 3000);
  }, []);
  const Image = require("../assets/Images/pat3.jpg");
  return (
    <View styles={styles.container}>
      <ImageBackground style={{ padding: 10, height: 700 }} source={Image}>
        {isLoading ? (
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
            <Text style={{ color: "white", fontSize: 19 }}>
              All the information on this app is published in good faith and for
              general information purpose only. This app does not make any
              warranties about the completeness, reliability and accuracy of
              this information.
            </Text>
            <Text style={{ color: "white", fontSize: 19 }}>
              Any action you take upon the information you find on this app
              (Excellent), is strictly at your own risk. Excellent will not be
              liable for any losses and/or damages in connection with the use of
              our app.
            </Text>
          </>
        )}
      </ImageBackground>
    </View>
  );
}

const styles = StyleSheet.create({
  container: { flex: 1 },
});
