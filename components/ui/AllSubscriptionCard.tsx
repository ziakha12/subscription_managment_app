import { formateStatusLabel, formatSubscriptionDateTime } from '@/lib/utils'
import clsx from 'clsx'
import React from 'react'
import { Image, Pressable, Text, View } from 'react-native'

export default function AllSubscriptionCard({ icon, name, price, billing, color, onPress, expanded, renewalDate, category, plan, paymentMethod, startDate, status}: SubscriptionCardProps) {
  return (
    <Pressable onPress={onPress} className={clsx('sub-card', expanded ? 'sub-card-expanded' : "bg-card")} style={ !expanded && color ? { backgroundColor: color } : undefined}>
      <View className='sub-head'>
        <View className='sub-main'>
          <Image source={icon} className='sub-icon' />
          <View className='sub-copy'>
            <Text className='sub-title' numberOfLines={1}>{name}</Text>
            <Text className='sub-meta' numberOfLines={1}>{category?.trim() || plan?.trim() || renewalDate ? formatSubscriptionDateTime(renewalDate) : ''}</Text>
          </View>
        </View>
        <View className='sub-price-box'>
          <Text className='sub-price'>${price}</Text>
          <Text className='sub-billing'>{billing}</Text>
        </View>
      </View>

      {
        expanded && (
          <View className='sub-bdy'>
            <View className='sub-details'>
              <View className='sub-row'>
                <View className='sub-row-copy'>
                  <Text className='sub-label'>category </Text>
                  <Text className='sub-value' ellipsizeMode='tail' numberOfLines={1}>{category?.trim() || plan?.trim()}</Text>
                </View>
              </View>
              <View className='sub-row'>
                <View className='sub-row-copy'>
                  <Text className='sub-label'>Started At</Text>
                  <Text className='sub-value' ellipsizeMode='tail' numberOfLines={1}>{startDate ? formatSubscriptionDateTime(startDate) : " s"}</Text>
                </View>
              </View>
              <View className='sub-row'>
                <View className='sub-row-copy'>
                  <Text className='sub-label'>Status</Text>
                  <Text className='sub-value' ellipsizeMode='tail' numberOfLines={1}>{status? formateStatusLabel(status) : " "}</Text>
                </View>
              </View>
              <View className='sub-row'>
                <View className='sub-row-copy'>
                  <Text className='sub-label'>Payment</Text>
                  <Text className='sub-value' ellipsizeMode='tail' numberOfLines={1}>{paymentMethod?.trim()}</Text>
                </View>
              </View>
              <View className='sub-row'>
                <View className='sub-row-copy'>
                  <Text className='sub-label'>Payment</Text>
                  <Text className='sub-value' ellipsizeMode='tail' numberOfLines={1}>{paymentMethod?.trim()}</Text>
                </View>
              </View>
            </View>
          </View>
        )
      }
    </Pressable>
  )
}