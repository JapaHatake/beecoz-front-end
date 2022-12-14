import { useState } from "react";
import { Text, View, Image, TouchableOpacity } from "react-native";
import { useTheme } from "styled-components";
import { IInteresed } from "../../../../interfaces/IInterested";
import { Container, InfoInterested, TextInfo, GoToChatButton } from "./styles";
import Icon from 'react-native-vector-icons/AntDesign'

export const InterestedCard = ({ data }: { data: IInteresed }) => {
  const theme = useTheme()
  return (
    <Container >
      <InfoInterested>
        <Image style={{width: 40, height: 40, borderRadius: 50}} resizeMode='contain' source={{uri: data.profileImage}}/>
        <TextInfo>
            <Text style={{color: theme.colors.white, fontWeight: "bold"}}>{data.name}</Text>
            <Text>{data.ranking}</Text>
        </TextInfo>
      </InfoInterested>
      <View>
        <GoToChatButton>
            <Icon name="arrowright" style={{fontSize: 16, color: theme.colors.white}}/>
        </GoToChatButton>
      </View>
    </Container>
  );
};
