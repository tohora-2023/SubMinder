import { Text, View } from 'react-native'
import { StatusBar } from 'expo-status-bar'
import { styles } from '../App'

const Home = () => {
  return (
    <View style={styles.container}>
      <Text style={{ color: '#3023AE' }}>Home</Text>
      <StatusBar style="auto" />
    </View>
  )
}

export default Home
