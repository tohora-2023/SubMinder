import { Text, View, FlatList } from 'react-native'
import { StatusBar } from 'expo-status-bar'
import { styles } from '../App'
import Item from './Item'

const Upcoming = () => {
  const data = [
    {
      id: 1,
      subscriptionId: 4,
      name: 'My Food Bag',
      price: 14,
      scheduleDate: '2023-04-12T08:41:30.872Z',
      category: 'Food & Drinks',
      isLastDate: true,
    },
    {
      id: 2,
      subscriptionId: 2,
      name: 'Netflix',
      price: 16,
      scheduleDate: '2023-04-12T08:41:30.872Z',
      category: 'Entertainment',
      isLastDate: false,
      isFreeTrial: false,
    },
    {
      id: 3,
      subscriptionId: 3,
      name: 'Genesis',
      price: 30,
      scheduleDate: '2023-04-12T08:41:30.872Z',
      category: 'Bills',
      isLastDate: false,
      isFreeTrial: false,
    },
    {
      id: 4,
      subscriptionId: 4,
      name: 'Waste disposal',
      price: 74.99,
      scheduleDate: '2023-04-15T08:41:30.872Z',
      category: 'Necessities',
      isLastDate: false,
      isFreeTrial: false,
    },
    {
      id: 5,
      subscriptionId: 2,
      name: 'CodeCademy',
      price: 70.75,
      scheduleDate: '2023-04-14T08:41:30.872Z',
      category: 'Productivity',
      isLastDate: false,
      isFreeTrial: true,
    },
    {
      id: 6,
      subscriptionId: 3,
      name: 'ATHop',
      price: 50,
      scheduleDate: '2023-04-16T08:41:30.872Z',
      category: 'Travel',
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
      <Text style={{ marginTop: 20 }}>Your upcoming payments: </Text>
      <FlatList
        data={data}
        renderItem={renderItem}
        keyExtractor={(item) => item.id}
      />
      <StatusBar style="auto" />
    </View>
  )
}

export default Upcoming
