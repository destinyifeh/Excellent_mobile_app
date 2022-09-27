import React, { useEffect, useState, useContext } from "react";
import {
  ImageBackground,
  RefreshControl,
  ScrollView,
  View,
} from "react-native";
import { Card, Paragraph, Title } from "react-native-paper";
import Footer from "../components/Footer";
import Loader from "../components/Loader";
import { formatDate } from "../utils/formatter";
import themeContext from "../config/themeContext";
export default function ShowDetail({ route }) {
  const theme = useContext(themeContext);
  const [isLoading, setIsLoading] = useState(false);
  const [refreshing, setRefreshing] = useState(false);
  const { title, description, source, publishedAt, urlToImage, url, author } =
    route.params;
  const [state, setState] = useState({
    title: title,
    description: description,
    source: source,
    publishedAt: publishedAt,
    urlToImage: urlToImage,
    author: author,
  });

  console.log(title, "route");
  useEffect(() => {
    setTimeout(() => {
      setIsLoading(true);
    }, 3000);
  }, []);

  const getShowDetails = async () => {
    const { title, description, source, publishedAt, urlToImage, url, author } =
      route.params;
    setState({
      title: title,
      description: description,
      source: source,
      publishedAt: publishedAt,
      urlToImage: urlToImage,
      author: author,
    });
  };
  const onRefresh = () => {
    setRefreshing(true);
    getShowDetails().then(() => {
      setRefreshing(false);
    });
  };
  return (
    <View style={{ flex: 1 }}>
      <ImageBackground
        style={
          !isLoading
            ? { flex: 1, justifyContent: "center" }
            : { padding: 20, flex: 1 }
        }
        source={require("../assets/Images/pat3.jpg")}
      >
        {isLoading ? (
          <>
            <ScrollView
              refreshControl={
                <RefreshControl
                  onRefresh={onRefresh}
                  refreshing={refreshing}
                  //tintColor="#fff"
                  //titleColor="#fff"
                  //progressBackgroundColor="red"
                  colors={["red", "green", "blue"]}
                />
              }
            >
              <Card>
                {/* <Card.Title title="des" subtitle="sub" /> */}
                <Card.Content>
                  <Title>{state.title}</Title>
                  <Paragraph style={{ color: "red", padding: 5 }}>
                    Created: {formatDate(state.publishedAt)} by{" "}
                    {state.author ? state.author : "editor"}
                  </Paragraph>
                </Card.Content>
                <Card.Cover
                  source={
                    state.urlToImage
                      ? { uri: state.urlToImage }
                      : require("../assets/Images/pat2.png")
                  }
                />
                <Card.Content>
                  <Paragraph>{state.description}</Paragraph>
                  <Paragraph style={{ color: "blue" }}>
                    {" "}
                    Credit: {state.source.name}{" "}
                  </Paragraph>
                </Card.Content>
              </Card>
            </ScrollView>
            {/* <Footer /> */}
          </>
        ) : (
          <>
            <Loader size="large" color="white" />
          </>
        )}
      </ImageBackground>
      <Footer />
    </View>
  );
}
