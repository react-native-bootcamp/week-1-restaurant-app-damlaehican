import React, { Component } from 'react'
import { View } from 'react-native'
import { AntDesign } from '@expo/vector-icons';


const PopularStars = () => {
  return (
    <View style={{ flexDirection: 'row' }}>
      <AntDesign name="star" size={24} color='#455a64' />
      <AntDesign name="star" size={24} color='#455a64' />
      <AntDesign name="star" size={24} color='#455a64' />
      <AntDesign name="star" size={24} color='#455a64' />
      <AntDesign name="star" size={24} color='#455a64' />
    </View>
  )
}
export default PopularStars