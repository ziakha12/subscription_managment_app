import clsx from 'clsx'
import React from 'react'
import { Image, View } from 'react-native'

const TabItems = ({focused, icon}: {focused: boolean, icon: any}) => {
  return (
     <View className='tabs-icon'>
        <View className={clsx('tabs-pill', focused && "tabs-active")}>
            <Image source={icon} className="tabs-glyph" resizeMode="contain" />
        </View>
     </View>
  )
}

export default TabItems