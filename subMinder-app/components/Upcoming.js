import {
  Text,
  View,
  FlatList,
  Button,
  ScrollView,
  StyleSheet,
} from 'react-native'
import { StatusBar } from 'expo-status-bar'
import { styles } from '../App'
import Item from './Item'
import { Ionicons } from '@expo/vector-icons'
import { IconButton } from 'react-native-paper'
import { useState } from 'react'

const Upcoming = () => {
  const [view, setView] = useState('month')

  const data = [
    {
      id: 1,
      subscriptionId: 4,
      name: 'My Food Bag',
      price: 14,
      scheduleDate: '2023-04-19T08:41:30.872Z',
      category: 'Food & Drinks',
      isLastDate: true,
    },
    {
      id: 2,
      subscriptionId: 2,
      name: 'Netflix',
      price: 16,
      scheduleDate: '2023-04-19T08:41:30.872Z',
      category: 'Entertainment',
      isLastDate: false,
      isFreeTrial: false,
    },
    {
      id: 3,
      subscriptionId: 3,
      name: 'Genesis',
      price: 30,
      scheduleDate: '2023-04-19T08:41:30.872Z',
      category: 'Bills',
      isLastDate: false,
      isFreeTrial: false,
    },
    {
      id: 4,
      subscriptionId: 4,
      name: 'Waste disposal',
      price: 74.99,
      scheduleDate: '2023-04-20T08:41:30.872Z',
      category: 'Necessities',
      isLastDate: false,
      isFreeTrial: false,
    },
    {
      id: 5,
      subscriptionId: 2,
      name: 'CodeCademy',
      price: 70.75,
      scheduleDate: '2023-04-23T08:41:30.872Z',
      category: 'Productivity',
      isLastDate: false,
      isFreeTrial: true,
    },
    {
      id: 6,
      subscriptionId: 3,
      name: 'ATHop',
      price: 50,
      scheduleDate: '2023-04-23T08:41:30.872Z',
      category: 'Travel',
      isLastDate: false,
      isFreeTrial: false,
    },
    {
      id: 7,
      subscriptionId: 2,
      name: 'Netflix',
      price: 16,
      scheduleDate: '2023-04-24T08:41:30.872Z',
      category: 'Entertainment',
      isLastDate: false,
      isFreeTrial: false,
    },
    {
      id: 8,
      subscriptionId: 3,
      name: 'Genesis',
      price: 30,
      scheduleDate: '2023-04-25T08:41:30.872Z',
      category: 'Bills',
      isLastDate: false,
      isFreeTrial: false,
    },
    {
      id: 9,
      subscriptionId: 4,
      name: 'Waste disposal',
      price: 74.99,
      scheduleDate: '2023-04-29T08:41:30.872Z',
      category: 'Necessities',
      isLastDate: false,
      isFreeTrial: false,
    },
  ]

  const renderItem = ({ item }) => (
    <Item
      title={item.name}
      price={item.price}
      isLastDate={item.isLastDate}
      scheduleDate={item.scheduleDate}
      category={item.category}
      isFreeTrial={item.isFreeTrial}
    />
  )

  return (
    <View style={styles.container}>
      <View style={{ flexDirection: 'row', alignItems: 'center' }}>
        <IconButton
          icon={() => (
            <Ionicons
              name="arrow-back-circle-sharp"
              size={24}
              color="#3023AE"
            />
          )}
        />
        <Button
          title="month"
          color={view === 'month' ? '#3023AE' : 'grey'}
          onPress={() => setView('month')}
        />
        <Button
          title="week"
          color={view === 'week' ? '#3023AE' : 'grey'}
          onPress={() => setView('week')}
        />
        <Button
          title="day"
          color={view === 'day' ? '#3023AE' : 'grey'}
          onPress={() => setView('day')}
        />
        <IconButton
          icon={() => (
            <Ionicons
              name="arrow-forward-circle-sharp"
              size={24}
              color="#3023AE"
            />
          )}
        />
      </View>

      <FlatList
        data={data}
        renderItem={renderItem}
        keyExtractor={(item) => item.id}
        ListFooterComponent={<Footer />}
        ListHeaderComponent={<Header />}
      />
      <StatusBar style="auto" />
    </View>
  )
}

export default Upcoming

const Header = () => (
  <View style={{ marginTop: 20, marginBottom: 20 }}>
    <Text
      style={{
        textAlign: 'center',
        fontWeight: 'bold',
        fontSize: 20,
        width: 300,
        marginRight: 'auto',
        marginLeft: 'auto',
      }}
    >
      Your upcoming payments for April
    </Text>
  </View>
)

const Footer = () => (
  <View style={{ marginTop: 40, marginBottom: 20 }}>
    <Text
      style={{
        textAlign: 'center',
        fontWeight: 'bold',
        fontSize: 20,
        width: 300,
        marginRight: 'auto',
        marginLeft: 'auto',
      }}
    >
      You&lsquo;re all up to date for the month
    </Text>
  </View>
)
