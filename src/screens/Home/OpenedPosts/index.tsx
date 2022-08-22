import { FlatList, ListRenderItem, Text, View } from "react-native";
import { FlatListProps } from "react-native";
import { AppFlatList } from "../../../components/AppComponents/FlatLIst";
import { Container, Content, Flat } from "./styles";
import { IPost } from "../../../interfaces/IPost";
import React from "react";
import { PostCard } from "../../../components/ScreensComponents/Home/PostCard";

export const OpenedPosts = () => {
  const DATA: IPost[] = [
    {
      id: 1,
      title: "Guarda-roupas",
      tags: ["mercenaria", "madeira", "sla"],
      imageSource:
        "https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcSKU8K2-hyXVVESUZNzE8WNfUgEmnoV_ZeqzbIAbQR5kczFaVUbG3437jKt0uc3Q_Z74Yo&usqp=CAU",
      interested: [
        {
          id: 1,
          name: "Jorge",
          area: ["Marcenaria", "Pedreiro"],
          profileImage:
            "https://images.pexels.com/photos/614810/pexels-photo-614810.jpeg?auto=compress&cs=tinysrgb&dpr=1&w=500",
          ranking: 4,
        },
        {
          id: 2,
          name: "Jorge",
          area: ["Marcenaria", "Pedreiro"],
          profileImage:
            "https://images.pexels.com/photos/614810/pexels-photo-614810.jpeg?auto=compress&cs=tinysrgb&dpr=1&w=500",
          ranking: 4,
        },
        {
          id: 3,
          name: "Jorge",
          area: ["Marcenaria", "Pedreiro"],
          profileImage:
            "https://images.pexels.com/photos/614810/pexels-photo-614810.jpeg?auto=compress&cs=tinysrgb&dpr=1&w=500",
          ranking: 4,
        },
        {
          id: 4,
          name: "Jorge",
          area: ["Marcenaria", "Pedreiro"],
          profileImage:
            "https://images.pexels.com/photos/614810/pexels-photo-614810.jpeg?auto=compress&cs=tinysrgb&dpr=1&w=500",
          ranking: 4,
        },
        {
          id: 5,
          name: "Jorge",
          area: ["Marcenaria", "Pedreiro"],
          profileImage:
            "https://images.pexels.com/photos/614810/pexels-photo-614810.jpeg?auto=compress&cs=tinysrgb&dpr=1&w=500",
          ranking: 4,
        },
        {
          id: 6,
          name: "Jorge",
          area: ["Marcenaria", "Pedreiro"],
          profileImage:
            "https://images.pexels.com/photos/614810/pexels-photo-614810.jpeg?auto=compress&cs=tinysrgb&dpr=1&w=500",
          ranking: 4,
        },
        {
          id: 7,
          name: "Jorge",
          area: ["Marcenaria", "Pedreiro"],
          profileImage:
            "https://images.pexels.com/photos/614810/pexels-photo-614810.jpeg?auto=compress&cs=tinysrgb&dpr=1&w=500",
          ranking: 4,
        },
        {
          id: 8,
          name: "Jorge",
          area: ["Marcenaria", "Pedreiro"],
          profileImage:
            "https://images.pexels.com/photos/614810/pexels-photo-614810.jpeg?auto=compress&cs=tinysrgb&dpr=1&w=500",
          ranking: 4,
        },
      ],
    },
    {
      id: 2,
      title: "Guarda-roupas",
      tags: ["mercenaria", "madeira", "sla"],
      imageSource:
        "https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcSKU8K2-hyXVVESUZNzE8WNfUgEmnoV_ZeqzbIAbQR5kczFaVUbG3437jKt0uc3Q_Z74Yo&usqp=CAU",
      interested: [
        {
          id: 11,
          name: "Jorge",
          area: ["Marcenaria", "Pedreiro"],
          profileImage:
            "https://images.pexels.com/photos/614810/pexels-photo-614810.jpeg?auto=compress&cs=tinysrgb&dpr=1&w=500",
          ranking: 4,
        },
        {
          id: 21,
          name: "Jorge",
          area: ["Marcenaria", "Pedreiro"],
          profileImage:
            "https://images.pexels.com/photos/614810/pexels-photo-614810.jpeg?auto=compress&cs=tinysrgb&dpr=1&w=500",
          ranking: 4,
        },
        {
          id: 31,
          name: "Jorge",
          area: ["Marcenaria", "Pedreiro"],
          profileImage:
            "https://images.pexels.com/photos/614810/pexels-photo-614810.jpeg?auto=compress&cs=tinysrgb&dpr=1&w=500",
          ranking: 4,
        },
        {
          id: 41,
          name: "Jorge",
          area: ["Marcenaria", "Pedreiro"],
          profileImage:
            "https://images.pexels.com/photos/614810/pexels-photo-614810.jpeg?auto=compress&cs=tinysrgb&dpr=1&w=500",
          ranking: 4,
        },
        {
          id: 51,
          name: "Jorge",
          area: ["Marcenaria", "Pedreiro"],
          profileImage:
            "https://images.pexels.com/photos/614810/pexels-photo-614810.jpeg?auto=compress&cs=tinysrgb&dpr=1&w=500",
          ranking: 4,
        },
        {
          id: 61,
          name: "Jorge",
          area: ["Marcenaria", "Pedreiro"],
          profileImage:
            "https://images.pexels.com/photos/614810/pexels-photo-614810.jpeg?auto=compress&cs=tinysrgb&dpr=1&w=500",
          ranking: 4,
        },
        {
          id: 71,
          name: "Jorge",
          area: ["Marcenaria", "Pedreiro"],
          profileImage:
            "https://images.pexels.com/photos/614810/pexels-photo-614810.jpeg?auto=compress&cs=tinysrgb&dpr=1&w=500",
          ranking: 4,
        },
        {
          id: 81,
          name: "Jorge",
          area: ["Marcenaria", "Pedreiro"],
          profileImage:
            "https://images.pexels.com/photos/614810/pexels-photo-614810.jpeg?auto=compress&cs=tinysrgb&dpr=1&w=500",
          ranking: 4,
        },
      ],
    },
  ];

  const renderItem: ListRenderItem<IPost> = ({ item }) => (
    <PostCard data={item} key={item.id} />
  );
  return (
    <Container>
      <Content>
        {/* <FlatList<IPost>
          style={{marginBottom: 80, marginTop: 20}}
          data={DATA}
          renderItem={({item, index}) => <PostCard key={index} data={item}/>}
        /> */}
        <Flat
        data={DATA}
        keyExtractor={( item) => String(item.id)}
        renderItem={({item}) => <PostCard data={item}/>}
        />
        {/* <AppFlatList data={DATA} render={renderItem} /> */}
      </Content>
    </Container>
  );
};
