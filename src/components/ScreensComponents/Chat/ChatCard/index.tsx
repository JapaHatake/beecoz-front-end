import { Image, Text, View } from "react-native";
import { useTheme } from "styled-components";
import { IInteresed } from "../../../../interfaces/IInterested";
import { ChatType } from "../../../../screens/Chat";
import { Container } from "./styles";

interface ChatCardProps {
    data: IInteresed,
    navigation: ChatType['navigation']
}

export const ChatCard = ({data, navigation}: ChatCardProps) => {
  const theme = useTheme();

  return (
    <Container onPress={() => navigation.navigate('chating', {interested: data})}>
      <Image
        style={{ width: 50, height: 50, borderRadius: 50 }}
        resizeMode="contain"
        source={{ uri: data.profileImage }}
      />
      <View
        style={{
          height: "100%",
          marginLeft: 20,
          justifyContent: "space-evenly",
        }}
      >
        <Text
          style={{
            fontSize: 18,
            color: theme.colors.white,
            fontWeight: "bold",
          }}
        >
          {data.name}
        </Text>
        <Text style={{color: theme.colors.blue, fontSize: 12, fontWeight: '100'}}>Opa, fechado! (estatico)</Text>
      </View>
    </Container>
  );
};
