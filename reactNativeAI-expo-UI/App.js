import { Text, StyleSheet } from "react-native";
import AppNavigation from "./src/navigation";
import { SafeAreaView } from "react-native";
export default function App() {
  return (
    <SafeAreaView style={styles.droidSafeArea}>
      <AppNavigation />
    </SafeAreaView>
  );
}
const styles = StyleSheet.create({
  droidSafeArea: {
    flex: 1,
    paddingTop: Platform.OS === "android" ? 25 : 0,
  },
});
