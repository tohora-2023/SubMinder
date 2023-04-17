import { Text, View, Button } from 'react-native'
import { StatusBar } from 'expo-status-bar'
import { useNavigation } from '@react-navigation/native'
import { styles } from '../App'

const Logout = () => {
  const navigation = useNavigation()

  return (
    <View style={styles.container}>
      <Text>Are you sure you want to logout?</Text>
      <Button title="Logout" onPress={() => navigation.navigate('Login')} />
      <StatusBar style="auto" />
    </View>
  )
}

export default Logout
