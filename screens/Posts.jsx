import axios from "axios";
import React, { useEffect, useState } from "react";
import {
  FlatList,
  RefreshControl,
  Text,
  TouchableOpacity,
  View,
} from "react-native";
import { Card, Paragraph, Title } from "react-native-paper";
import Footer from "../components/Footer";
import Loader from "../components/Loader";
const Posts = ({ navigation }) => {
  const [posts, setPosts] = useState("");
  const [pageSize, setPageSize] = useState(5);
  const [page, setPage] = useState(1);
  const [refreshing, setRefreshing] = useState(false);

  const url = ` https://newsapi.org/v2/top-headlines?country=ng&apiKey=18d1a6073be547cdb406f383c6e53b60`;
  // const url2 =
  //   "https://newsdata.io/api/1/news?country=ng&apikey=pub_102542667272d2fef280f4fc0b378d2e548a8&category=top";

  const getContents = async () => {
    try {
      let res = await axios.get(url, {
        params: { page: page, pageSize: 100 },
      });

      const data = res.data.articles;
      setPosts(data);

      console.log(data, "data");
    } catch (error) {
      console.log(error.message);
    }
  };

  useEffect(() => {
    getContents();
    console.log(posts, "posss");
  }, []);

  const onRefresh = () => {
    setRefreshing(true);
    getContents().then(() => {
      setRefreshing(false);
    });
  };

  return (
    <View style={{ flex: 1, justifyContent: "center" }}>
      {posts && posts.length > 0 ? (
        <>
          <Text
            style={{
              fontWeight: "bold",
              marginVertical: 10,
              textAlign: "center",
              fontSize: 16,
            }}
          >
            All Trending News
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
                <Card style={{ marginVertical: 15, marginHorizontal: 10 }}>
                  <Card.Cover
                    source={
                      item.urlToImage
                        ? { uri: item.urlToImage }
                        : require("../assets/Images/pat2.png")
                    }
                  />
                  <Card.Content>
                    <TouchableOpacity>
                      <Title
                        onPress={() => {
                          navigation.navigate("ShowDetail", item);
                        }}
                        style={{ color: "blue" }}
                      >
                        {item.title}
                      </Title>
                    </TouchableOpacity>
                    <Paragraph>
                      {description}
                      {description ? "..." : ""}
                    </Paragraph>
                  </Card.Content>
                  {/* <TouchableOpacity>
                  <Card.Actions>
                    <Button
                      icon="arrow-right"
                      mode="contained-tonal"
                      // onPress={navigation.navigate("ShowDetail", item)}
                    >
                      Readmore
                    </Button>
                  </Card.Actions>
                </TouchableOpacity> */}
                </Card>
              );
            }}
            ListFooterComponent={Footer}
          />
        </>
      ) : (
        <>
          <Loader size="large" color="red" />
        </>
      )}
    </View>
  );
};

export default Posts;
