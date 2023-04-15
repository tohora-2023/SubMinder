import {
  Document,
  Page,
  Text,
  StyleSheet,
  View,
  Image,
} from '@react-pdf/renderer'

interface totalObject {
  'Food & Drink': number
  Entertainment: number
  Necessities: number
  Bills: number
  Productivity: number
  Travel: number
}

interface PDFProp {
  start: Date
  end: Date
  initialEvents: object
  user: string | undefined
}

export default function PDF({ start, end, initialEvents, user }: PDFProp) {
  const values = Object.values(initialEvents)
  return (
    <Document>
      <Page>
        <Image
          src="./img/subminder-logo.png"
          style={{ height: '100px', width: '100px' }}
        ></Image>
        <View>
          {end.toLocaleDateString('en-GB', {
            day: 'numeric',
            month: 'long',
            year: 'numeric',
          }) !==
          start.toLocaleDateString('en-GB', {
            day: 'numeric',
            month: 'long',
            year: 'numeric',
          }) ? (
            <Text>
              {' '}
              Payments from the period{' '}
              {start.toLocaleDateString('en-GB', {
                day: 'numeric',
                month: 'long',
                year: 'numeric',
              })}{' '}
              -{' '}
              {end.toLocaleDateString('en-GB', {
                day: 'numeric',
                month: 'long',
                year: 'numeric',
              })}
            </Text>
          ) : (
            <Text>All payments</Text>
          )}

          <Text
            style={{ fontSize: 12, marginBottom: '20px', marginLeft: '10px' }}
          >
            User: {user}
          </Text>
          <Text style={{ fontSize: 12, marginLeft: '10px' }}>
            Date:{' '}
            {new Date().toLocaleDateString('en-GB', {
              day: 'numeric',
              month: 'long',
              year: 'numeric',
            })}
          </Text>
          <View
            style={{ fontSize: 12, marginBottom: '50px', marginLeft: '10px' }}
          >
            <Text>Address:</Text>
            <Text>Level 5/12</Text>
            <Text>Morgan Street</Text>
            <Text>Newmarket</Text>
            <Text>Auckland 1023</Text>
          </View>
          <View
            style={{
              flexDirection: 'row',
              borderBottom: 1,
              alignItems: 'center',
              textAlign: 'center',
            }}
          >
            <View style={{ flex: 1 }}>
              <Text style={{ fontSize: 12 }}>Date</Text>
            </View>
            <View style={{ flex: 1 }}>
              <Text style={{ fontSize: 12 }}>Name</Text>
            </View>
            <View style={{ flex: 1 }}>
              <Text style={{ fontSize: 12 }}>Category</Text>
            </View>
            <View style={{ flex: 1 }}>
              <Text style={{ fontSize: 12 }}>Price</Text>
            </View>
            <View style={{ flex: 1 }}>
              <Text style={{ fontSize: 12 }}>Last payment?</Text>
            </View>
          </View>
          {values.map((item) => (
            <View
              style={{
                flexDirection: 'row',
                alignItems: 'center',
                textAlign: 'center',
              }}
              key={item.id}
            >
              <View style={{ flex: 1 }}>
                <Text style={{ fontSize: 12 }}>
                  {new Date(item.scheduleDate).toLocaleDateString('en-GB', {
                    day: 'numeric',
                    month: 'long',
                    year: 'numeric',
                  })}
                </Text>
              </View>
              <View style={{ flex: 1 }}>
                <Text style={{ fontSize: 12 }}>{item.name}</Text>
              </View>
              <View style={{ flex: 1 }}>
                <Text style={{ fontSize: 12 }}>{item.category}</Text>
              </View>
              <View style={{ flex: 1 }}>
                <Text style={{ fontSize: 12 }}>{item.price}</Text>
              </View>
              <View style={{ flex: 1 }}>
                <Text style={{ fontSize: 12 }}>
                  {item.isLastDate ? 'Yes' : 'No'}
                </Text>
              </View>
            </View>
          ))}
        </View>
      </Page>
    </Document>
  )
}
