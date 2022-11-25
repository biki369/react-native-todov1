import { StatusBar } from 'expo-status-bar';
import { StyleSheet, View } from 'react-native';
import Todos from './src/components/Todos';
export default function App() {

  return (
    <View style={styles.AppContainer}>
      <StatusBar style='light'/>
      <Todos />
    </View>
  );
}

const styles = StyleSheet.create({
  AppContainer: {
    position: 'relative',
    paddingTop: 50,
    paddingHorizontal: 1,
    flex: 1,
  },
});
