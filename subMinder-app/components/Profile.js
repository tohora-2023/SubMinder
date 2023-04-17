import { Text, View, Image, Button } from 'react-native'
import { StatusBar } from 'expo-status-bar'
import { styles } from '../App'
import { useState } from 'react'

const Profile = () => {
  const [edit, setEdit] = useState(false)

  const profileData = {
    userName: 'roisinyatesdev',
    firstName: 'Roisin',
    lastName: 'Yates',
    dOB: '1999-11-24',
    image: '../img/profile.png',
  }
  const image = '../img/profile.png'

  return (
    <View style={styles.container}>
      <Image
        source={require(image)}
        style={{ height: 200, width: 200, borderRadius: 200 }}
      />
      <View
        style={{
          borderBottomWidth: 1,
          borderBottomColor: 'grey',
          width: '80%',
        }}
      >
        <Text
          style={{
            fontSize: 20,
            fontWeight: 'bold',
            textAlign: 'center',
            margin: 10,
          }}
        >
          {profileData.userName}
        </Text>
      </View>
      <View
        style={{
          borderBottomWidth: 1,
          borderBottomColor: 'grey',
          width: '80%',
          flexDirection: 'row',
          justifyContent: 'space-between',
          padding: 20,
        }}
      >
        <Text style={{ color: '#3023AE' }}>First Name:</Text>
        <Text>{profileData.firstName}</Text>
      </View>
      <View
        style={{
          borderBottomWidth: 1,
          borderBottomColor: 'grey',
          width: '80%',
          flexDirection: 'row',
          justifyContent: 'space-between',
          padding: 20,
        }}
      >
        <Text style={{ color: '#3023AE' }}>Surname:</Text>
        <Text>{profileData.lastName}</Text>
      </View>
      <View
        style={{
          borderBottomWidth: 1,
          borderBottomColor: 'grey',
          width: '80%',
          flexDirection: 'row',
          justifyContent: 'space-between',
          padding: 20,
        }}
      >
        <Text style={{ color: '#3023AE' }}>Date of Birth:</Text>
        <Text>{profileData.dOB}</Text>
      </View>
      <View
        style={{
          borderWidth: 1,
          marginTop: 80,
          borderColor: '#3023AE',
          borderRadius: 10,
        }}
      >
        <Button title="Edit Profile" onPress={() => setEdit(true)} />
      </View>
      <StatusBar style="auto" />
    </View>
  )
}

export default Profile
