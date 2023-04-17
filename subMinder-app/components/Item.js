import { Text, View } from 'react-native'
import {
  MaterialCommunityIcons,
  MaterialIcons,
  Ionicons,
  FontAwesome5,
} from '@expo/vector-icons'

const Item = ({
  title,
  price,
  isLastDate,
  scheduleDate,
  category,
  isFreeTrial,
}) => {
  const date = new Date(scheduleDate)
  const filteredDate = date.toLocaleDateString('en-GB', {
    day: 'numeric',
    month: 'long',
    year: 'numeric',
  })
  return (
    <View
      style={{
        padding: 20,
        flex: 1,
        alignItems: 'center',
        flexDirection: 'row',
        width: 350,
        marginTop: 20,
        borderRadius: 10,
        height: 80,
        borderBottomColor: '#A5aeb9',
        borderBottomWidth: 1,
      }}
    >
      <View>
        <Text>
          {category === 'Food & Drinks' ? (
            <Ionicons name="restaurant" size={24} color="black" />
          ) : category === 'Bills' ? (
            <MaterialIcons name="lightbulb" size={24} color="black" />
          ) : category === 'Entertainment' ? (
            <MaterialCommunityIcons name="movie" size={24} color="black" />
          ) : category === 'Necessities' ? (
            <FontAwesome5 name="pump-soap" size={24} color="black" />
          ) : category === 'Productivity' ? (
            <MaterialCommunityIcons name="timer" size={24} color="black" />
          ) : category === 'Travel' ? (
            <FontAwesome5 name="bus-alt" size={24} color="black" />
          ) : (
            ''
          )}
        </Text>
      </View>
      <View
        style={{
          flex: 1,
          flexDirection: 'row',
          justifyContent: 'space-between',
          marginLeft: 10,
        }}
      >
        <View>
          <Text>{filteredDate}</Text>
          <Text style={{ fontSize: 20 }}>{title}</Text>
        </View>
        <View>
          {isFreeTrial ? (
            <View
              style={{
                backgroundColor: '#FFC400',
                padding: 2,
                borderRadius: 5,
              }}
            >
              <Text style={{ color: 'white' }}>Free trial ends</Text>
            </View>
          ) : (
            <Text style={{ textAlign: 'right' }}>${price}</Text>
          )}

          {isLastDate ? (
            <View
              style={{ backgroundColor: 'red', padding: 2, borderRadius: 5 }}
            >
              <Text style={{ color: 'white' }}>last payment</Text>
            </View>
          ) : (
            <View></View>
          )}
        </View>
      </View>
    </View>
  )
}

export default Item
