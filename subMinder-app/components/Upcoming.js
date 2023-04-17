import { Text, View } from 'react-native'
import { StatusBar } from 'expo-status-bar'
import { styles } from '../App'

const Upcoming = () => {
  return (
    <View style={styles.container}>
      <Text style={{ color: '#3023AE' }}>Upcoming</Text>
      <StatusBar style="auto" />
    </View>
  )
}

export default Upcoming
