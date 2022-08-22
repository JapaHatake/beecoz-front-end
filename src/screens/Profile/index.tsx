import React from "react";
import { View, Text, Image } from "react-native";
import { useTheme } from "styled-components";
import { IUser } from "../../interfaces/IUser";
import { Container, Profile, ProfileContent } from "./styles";
import IconMaterial from "react-native-vector-icons/MaterialCommunityIcons";
import IconMaterialIcon from 'react-native-vector-icons/MaterialIcons'
import IconFont from "react-native-vector-icons/FontAwesome5";
import { OptionsCard } from "../../components/ScreensComponents/Profile/OptionsCard";
import { NativeStackScreenProps } from "@react-navigation/native-stack";
import { StackParamsList } from "../../navigation/StackTabNavigation";

export type ProfileType = NativeStackScreenProps<StackParamsList, 'profile'>

export const ProfileScreen = ({navigation}: ProfileType) => {
  const user: IUser = {
    id: 1,
    name: "Thiago",
    lastName: "Silva",
    sex: "masc",
    type: "queen",
    ranking: 3,
    birthDate: "17/04/2005",
    CPF: "000.000.000/00",
    profileImage:
      "https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcRNb1jnC52Zm-Z92rKJuIXRc7ahmsH1mpTUow&usqp=CAU",
  };
  const theme = useTheme();

  return (
    <Container>
      <Profile>
        <Image
          style={{ width: 60, height: 60, borderRadius: 50 }}
          resizeMode="contain"
          source={{ uri: user.profileImage }}
        />
        <ProfileContent>
          <Text
            style={{
              color: theme.colors.white,
              fontWeight: "bold",
              fontSize: 20,
            }}
          >
            {user.name} {user.lastName}
          </Text>
          <View style={{ flexDirection: "row", alignItems: "center" }}>
            <View>
              {user.type === "queen" ? (
                <IconMaterial
                  style={{ fontSize: 30, color: "#FF81D0" }}
                  name="crown-circle"
                />
              ) : (
                <Text>NOrmal</Text>
              )}
            </View>
            <Text style={{ marginLeft: 40 }}>{user.ranking}</Text>
          </View>
        </ProfileContent>
      </Profile>
      <View style={{ marginTop: 40, borderRadius: 10, overflow: "hidden" }}>
        <OptionsCard
          title="Minha conta"
          description="Editar"
          routeName="editProfile"
          navigation={navigation}
          IconCard={
            <IconFont
              style={{ fontSize: 16, color: theme.colors.yellow_main }}
              name="user"
            />
          }
        />
        <OptionsCard
          title="Acessibilidade"
          description="Gerencie suas outras contas"
          routeName="accessibilityProfile"
          navigation={navigation}
          IconCard={
            <IconFont
              style={{ fontSize: 16, color: theme.colors.yellow_main }}
              name="user"
            />
          }
        />
        <OptionsCard
          title="Segurança"
          description="Configurar segurança"
          routeName="securityProfile"
          navigation={navigation}
          IconCard={
            <IconFont
              style={{ fontSize: 16, color: theme.colors.yellow_main }}
              name="shield-alt"
            />
          }
        />
        <OptionsCard
          title="Sair"
          description="Sair da conta autal"
          routeName="logoutProfile"
          navigation={navigation}
          IconCard={
            <IconMaterialIcon
              style={{ fontSize: 16, color: theme.colors.yellow_main }}
              name="logout"
            />
          }
        />
        <OptionsCard
          title="Suporte"
          description="Peça ajuda á equipe Beecoz"
          routeName="supportProfile"
          navigation={navigation}
          IconCard={
            <IconMaterial
              style={{ fontSize: 16, color: theme.colors.yellow_main }}
              name="help"
            />
          }
        />
        <OptionsCard
          title="Sobre a Beecoz"
          description="Entenda a filosofia de nossa equipe"
          routeName="aboutProfile"
          navigation={navigation}
          IconCard={
            <IconMaterial
              style={{ fontSize: 16, color: theme.colors.yellow_main }}
              name="heart"
            />
          }
        />
      </View>
    </Container>
  );
};
