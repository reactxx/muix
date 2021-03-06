import React from 'react'

import { Text, View } from 'reactxx-primitives'
import { LoremIpsum } from 'reactxx-basic'

const App: React.SFC = props => <View className={{flex:1 }}>
  <Text className={{ fontWeight: 'bold', fontSize: 32, marginBottom: 15 }}>
    HALLO WORLD!
  </Text>
  <Text>
    {LoremIpsum(10)}{' '}
    <Text onPress={() => alert(LoremIpsum(5))} className={{ color: 'blue', $web: { ':hover': { textDecoration: 'underline' } } }} >
      {LoremIpsum(5)}
    </Text>
    {' '}{LoremIpsum(10)}
  </Text>
</View>

export default App

