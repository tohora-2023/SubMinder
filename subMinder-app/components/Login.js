import { Text, View, Image, Button } from 'react-native'
import { StatusBar } from 'expo-status-bar'
import { styles } from '../App'
import { useNavigation } from '@react-navigation/native'

const Login = () => {
  const navigation = useNavigation()

  return (
    <View style={styles.container}>
      <Image
        source={require('../img/subminder-logo.png')}
        style={{ height: 400, width: 400 }}
      />
      <Text style={{ color: '#3023AE' }}>Welcome to subminder</Text>
      <Text>
        Don&apos;t have an account?{' '}
        <Text style={{ color: '#C269D6' }}>Sign up</Text>
      </Text>
      <Button
        title="Login"
        style={{ color: '#FFC400' }}
        onPress={() => navigation.navigate('navigation')}
      />

      <StatusBar style="auto" />
    </View>
  )
}

export default Login
