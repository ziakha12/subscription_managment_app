import TabItems from '@/components/ui/TabItems';
import { tabs } from '@/constants/data';
import { colors, components } from '@/constants/theme';
import '@/global.css';
import { Tabs } from 'expo-router';
import React from 'react';
import { useSafeAreaInsets } from 'react-native-safe-area-context';


export default function TabLayout() {

  const insets = useSafeAreaInsets();
  const tabBar = components.tabBar 

  return (
    <Tabs screenOptions={{
      headerShown : false,
      tabBarShowLabel : false,
      tabBarStyle : {
        position : 'absolute',
        bottom : Math.max(insets.bottom, tabBar.horizontalInset),
        height : tabBar.height,
        marginHorizontal : tabBar.horizontalInset,
        borderRadius : tabBar.radius,
        backgroundColor : colors.primary,
        elevation : 0,
        borderTopWidth : 0
      },
      tabBarItemStyle : {
        paddingVertical : tabBar.height/2 - tabBar.iconFrame / 1.6
      },
      tabBarIconStyle : {
        width : tabBar.iconFrame,
        height : tabBar.iconFrame,
        alignItems : 'center'
      },
      }}>
      {
        tabs.map((tab) => (
          <Tabs.Screen
            key={tab.name}
            name={tab.name}
            options={{
              title: tab.title,
              tabBarIcon: ({ focused }) => <TabItems focused={focused} icon={tab.icon} />,
            }}
          />
        ))
      }
    </Tabs>
  );
}
