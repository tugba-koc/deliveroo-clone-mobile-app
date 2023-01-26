import { View, Text } from 'react-native'
import React from 'react'
import { useNavigation } from '@react-navigation/native'

const Basket = () => {
    const navigation = useNavigation();
  return (
    <View>
      <Text>Basket</Text>
    </View>
  )
}

export default Basket