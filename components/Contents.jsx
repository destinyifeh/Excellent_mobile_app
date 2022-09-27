import { useNavigation } from "@react-navigation/native";
import axios from "axios";
import React, { useEffect, useState, useContext } from "react";
import {
  FlatList,
  RefreshControl,
  StyleSheet,
  Text,
  TouchableOpacity,
  View,
} from "react-native";

import { Button, Card, Paragraph, Title, useTheme } from "react-native-paper";
import { todayDate } from "../utils/formatter";
import CustomButton from "./CustomButton";
import themeContext from "../config/themeContext";
const Contents = () => {
  const { colors } = useTheme();
  const theme = useContext(themeContext);
  const [posts, setPosts] = useState("");
  const [pageSize, setPageSize] = useState(5);
  const [page, setPage] = useState(1);
  const [refreshing, setRefreshing] = useState(false);
  const navigation = useNavigation();
  const url = ` https://newsapi.org/v2/top-headlines?country=ng&apiKey=18d1a6073be547cdb406f383c6e53b60`;
  const url2 =
    "https://newsdata.io/api/1/news?country=ng&apikey=pub_102542667272d2fef280f4fc0b378d2e548a8&category=top";

  const getContents = async () => {
    try {
      let res = await axios.get(url, {
        params: { page: page, pageSize: 5 },
      });

      const data = res.data.articles;

      console.log(data, "data");
      setPosts(data);
    } catch (error) {
      console.log(error.message);
    }
  };

  useEffect(() => {
    getContents();
    console.log(posts, "posss");

    console.log(page, "the page");
    console.log(pageSize, "the pageSize");
  }, []);

  const onRefresh = () => {
    setRefreshing(true);
    getContents().then(() => {
      setRefreshing(false);
    });
  };

  return (
    <View
      style={{
        flex: 1,
        justifyContent: "center",
      }}
    >
      <Text style={[styles.title, { color: colors.text }]}>
        {posts.length === 0 ? "No News Yet" : todayDate + " " + "Trending News"}
      </Text>
      <FlatList
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
        keyExtractor={(item) => item.title}
        data={posts}
        renderItem={({ item }) => {
          const description = item.description?.slice(0, 80);
          return (
            <Card
              style={{
                marginVertical: 10,
              }}
            >
              <Card.Cover
                source={
                  item.urlToImage
                    ? { uri: item.urlToImage }
                    : require("../assets/Images/pat2.png")
                }
              />
              <Card.Content>
                <Title>{item.title}</Title>
                <Paragraph>
                  {description} {description ? "..." : ""}
                </Paragraph>
              </Card.Content>
              <TouchableOpacity>
                <Card.Actions>
                  <Button
                    icon="arrow-right"
                    mode="contained-tonal"
                    onPress={() => {
                      navigation.navigate("ShowDetail", item);
                    }}
                  >
                    Readmore
                  </Button>
                </Card.Actions>
              </TouchableOpacity>
            </Card>
          );
        }}
        ListFooterComponent={
          <>
            {posts.length === 0 ? (
              ""
            ) : (
              <View style={styles.btn}>
                <CustomButton
                  mode="contained-tonal"
                  icon="arrow-right"
                  onPress={() => {
                    console.log("des");
                    navigation.navigate("Posts");
                  }}
                  textColor={theme.color}
                >
                  All News
                </CustomButton>
              </View>
            )}
          </>
        }
      />
    </View>
  );
};

const styles = StyleSheet.create({
  btn: {
    justifyContent: "center",
    alignItems: "center",
  },
  title: {
    fontWeight: "bold",
    marginVertical: 10,
    textAlign: "center",
    fontSize: 17,
  },
});
export default Contents;
