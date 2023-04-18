import { Text, View } from 'react-native'
import { StatusBar } from 'expo-status-bar'
import { styles } from '../App'
import { StyleSheet } from 'react-native'
import { DataTable } from 'react-native-paper'
import {
  MaterialCommunityIcons,
  MaterialIcons,
  Ionicons,
  FontAwesome5,
  Entypo,
} from '@expo/vector-icons'

const History = () => {
  return (
    <View style={historyStyles.container}>
      <Text
        style={{
          color: '#3023AE',
          marginBottom: 40,
          marginTop: 30,
          textAlign: 'center',
          fontSize: 30,
          fontWeight: 'bold',
        }}
      >
        Your Payment History
      </Text>
      <DataTable style={historyStyles.container}>
        <DataTable.Header style={historyStyles.tableHeader}>
          <DataTable.Title>Date</DataTable.Title>
          <DataTable.Title>Name</DataTable.Title>
          <DataTable.Title>Category</DataTable.Title>
          <DataTable.Title>Price</DataTable.Title>
          <DataTable.Title>Last Date?</DataTable.Title>
        </DataTable.Header>
        <DataTable.Row>
          <DataTable.Cell>16 April</DataTable.Cell>
          <DataTable.Cell>ATHop</DataTable.Cell>
          <DataTable.Cell>
            <FontAwesome5 name="bus-alt" size={18} color="black" />
          </DataTable.Cell>
          <DataTable.Cell>$50.0</DataTable.Cell>
          <DataTable.Cell>
            <Entypo name="cross" size={18} color="black" />
          </DataTable.Cell>
        </DataTable.Row>

        <DataTable.Row>
          <DataTable.Cell></DataTable.Cell>
          <DataTable.Cell>Countdown</DataTable.Cell>
          <DataTable.Cell>
            <Ionicons name="restaurant" size={24} color="black" />
          </DataTable.Cell>
          <DataTable.Cell>$30.95</DataTable.Cell>
          <DataTable.Cell>
            <Entypo name="cross" size={18} color="black" />
          </DataTable.Cell>
        </DataTable.Row>
        <DataTable.Row>
          <DataTable.Cell>12 April</DataTable.Cell>
          <DataTable.Cell>Genesis</DataTable.Cell>
          <DataTable.Cell>
            <MaterialIcons name="lightbulb" size={24} color="black" />
          </DataTable.Cell>
          <DataTable.Cell>$30.0</DataTable.Cell>
          <DataTable.Cell>
            <Entypo name="cross" size={18} color="black" />
          </DataTable.Cell>
        </DataTable.Row>
        <DataTable.Row>
          <DataTable.Cell></DataTable.Cell>
          <DataTable.Cell>Netflix</DataTable.Cell>
          <DataTable.Cell>
            <MaterialCommunityIcons name="movie" size={24} color="black" />
          </DataTable.Cell>
          <DataTable.Cell>$16.0</DataTable.Cell>
          <DataTable.Cell>
            <Entypo name="cross" size={18} color="black" />
          </DataTable.Cell>
        </DataTable.Row>
      </DataTable>
      <StatusBar style="auto" />
    </View>
  )
}

export default History

const historyStyles = StyleSheet.create({
  container: {
    fontSize: 12,
  },
  tableHeader: {
    backgroundColor: '#DCDCDC',
  },
})
