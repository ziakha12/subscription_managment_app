import React from 'react'
import { Image, Text, View } from 'react-native'

export default function UpcomingListCard({name, price, icon, daysLeft, currency} : UpcomingSubscription) {
  return (
    <View className='upcoming-card'>
      <View className='upcoming-row'>
        <Image source={icon} className='upcoming-icon'/>
        <View className=''>
            <Text className='upcoming-price'>
                ${price}
            </Text>
            <Text className='upcoming-meta' numberOfLines={1}>
                {daysLeft > 1 ? `${daysLeft} to left` : 'Last Day'}
            </Text>

        </View>
      </View>
      <Text className='upcoming-name' numberOfLines={1}>{name}</Text>
    </View>
  )
}