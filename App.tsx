import { StatusBar } from "expo-status-bar";
import { StyleSheet, Text, View, Button } from "react-native";
import { NavigationContainer } from "@react-navigation/native";
import { ThemeProvider } from "./src/styles/styledComponents";
import { theme } from "./src/styles/theme";
import {BottomTabNavigator} from './src/navigation/BottomTabNavigator'


export default function App() {
  return (
    <NavigationContainer>
      <ThemeProvider theme={theme}>
        <BottomTabNavigator/>
        <StatusBar translucent style="inverted"/>
      </ThemeProvider>
    </NavigationContainer>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: "#36393F",
    alignItems: "center",
    justifyContent: "center",
  },
});
