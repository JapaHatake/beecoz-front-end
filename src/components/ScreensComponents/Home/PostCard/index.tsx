import { useState } from "react";
import { Text, View, Image, ListRenderItem, FlatList } from "react-native";
import { IInteresed } from "../../../../interfaces/IInterested";
import { IPost } from "../../../../interfaces/IPost";
import { AppFlatList } from "../../../AppComponents/FlatLIst";
import {InterestedCard} from '../InterestedCard'
import { Container, InteresedView, ResumeView, ListInterested } from "./styles";

export const PostCard = ({ data }: { data: IPost }) => {
  const [seeInterested, setSeeInterested] = useState(false);

  const renderItem: ListRenderItem<IInteresed> = ({ item }) => (
    <InterestedCard data={item} />
  );

  return (
    <Container seeInterested={seeInterested}>
      {!seeInterested ? (
        <>
          <ResumeView>
            <Image
              source={{ uri: data.imageSource }}
              resizeMode={"contain"}
              style={{
                width: 50,
                height: 50,
                borderRadius: 50,
                marginRight: 30,
              }}
            />
            <View
              style={{ width: 200, height: 60, justifyContent: "space-around" }}
            >
              <Text style={{ color: "#fff", fontSize: 24, fontWeight: "bold" }}>
                {data.title}
              </Text>
              <View style={{ flexDirection: "row" }}>
                {data.tags.map((tag, index) => (
                  <Text style={{ fontSize: 14, color: "#9FE4F4" }} key={index}>
                    {tag},{" "}
                  </Text>
                ))}
              </View>
            </View>
          </ResumeView>
          <InteresedView onPress={() => setSeeInterested(true)}>
            <Text style={{ fontSize: 12, color: "#fff" }}>
              <Text style={{ fontWeight: "bold", color: "#9FE4F4" }}>
                {data.interested.length}
              </Text>{" "}
              interessados
            </Text>
          </InteresedView>
        </>
      ) : (
        <>
          <ResumeView>
            <Image
              source={{ uri: data.imageSource }}
              resizeMode={"contain"}
              style={{
                width: 50,
                height: 50,
                borderRadius: 50,
                marginRight: 30,
              }}
            />
            <View
              style={{ width: 200, height: 60, justifyContent: "space-around" }}
            >
              <Text style={{ color: "#fff", fontSize: 24, fontWeight: "bold" }}>
                {data.title}
              </Text>
              <View style={{ flexDirection: "row" }}>
                {data.tags.map((tag, index) => (
                  <Text style={{ fontSize: 14, color: "#9FE4F4" }} key={index}>
                    {tag},{" "}
                  </Text>
                ))}
              </View>
            </View>
          </ResumeView>
          <InteresedView onPress={() => setSeeInterested(false)}>
            <Text style={{ fontSize: 12, color: "#fff" }}>
              <Text style={{ fontWeight: "bold", color: "#9FE4F4" }}>
                {data.interested.length}
              </Text>{" "}
              interessados
            </Text>
          </InteresedView>
          
          <ListInterested>
          <FlatList<IInteresed>
            data={data.interested}
            renderItem={({item}) => <InterestedCard key={item.id} data={item}/>}
          />
                {/* <AppFlatList<IInteresed> data={data.interested} render={renderItem}/> */}
          </ListInterested>
        </>
      )}
    </Container>
  );
};
