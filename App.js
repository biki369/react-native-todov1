import { StyleSheet, View} from 'react-native';
import Todos from './src/components/Todos';
export default function App() {

  return (
    <View style={styles.container}>
      <Todos />
    </View>
  );
}

const styles = StyleSheet.create({
  container: {
    position: 'relative',
    paddingTop: 50,
    paddingHorizontal: 16,
    flex: 1,
  },
});
