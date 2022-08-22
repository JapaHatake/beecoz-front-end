import {
  View,
  Text,
  TextInput,
  TouchableOpacity,
  FlatList,
} from "react-native";
import { useTheme } from "styled-components";
import Icon from "react-native-vector-icons/AntDesign";
import { Container, Flat, Input, InputContainer } from "./styles";
import { IInteresed } from "../../interfaces/IInterested";
import { ChatCard } from "../../components/ScreensComponents/Chat/ChatCard";
import { NativeStackScreenProps } from "@react-navigation/native-stack";
import { StackParamsList } from "../../navigation/StackTabNavigation";

export type ChatType = NativeStackScreenProps<StackParamsList, 'chating'>

export const ChatScreen = ({navigation}: ChatType) => {
  const interested: IInteresed[] = [
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
  ];

  const theme = useTheme();
  return (
    <Container>
      <InputContainer>
        <Input placeholder="Digite o nome da pessoa..." />
        <TouchableOpacity>
          <Icon
            style={{ color: theme.colors.white, fontSize: 20 }}
            name="search1"
          />
        </TouchableOpacity>
      </InputContainer>
      <Flat
        data={interested}
        keyExtractor={(item) => String(item.id)}
        renderItem={({ item }) => <ChatCard data={item} navigation={navigation}/>}
      />
    </Container>
  );
};
