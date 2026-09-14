import AllSubscriptionCard from '@/components/ui/AllSubscriptionCard';
import ListHeading from '@/components/ui/ListHeading';
import UpcomingListCard from '@/components/ui/UpcomingListCard';
import { HOME_BALANCE, HOME_SUBSCRIPTIONS, HOME_USER, UPCOMING_SUBSCRIPTIONS } from '@/constants/data';
import { icons } from '@/constants/icons';
import { avatar } from '@/constants/image';
import dayjs from 'dayjs';
import { styled } from 'nativewind';
import { useState } from 'react';
import { FlatList, Image, Text, View } from 'react-native';
import { SafeAreaView as RnSafeAreaView } from 'react-native-safe-area-context';
const SafeAreaView = styled(RnSafeAreaView);

export default function HomeScreen() {

  const [expandedSubscriptionId, setexpandedSubscriptionId] = useState<string | null>(null)


  return (
    <SafeAreaView className='bg-background flex-1 p-5'>


      <View>

        <FlatList
          ListHeaderComponent={() => (
            <>
              <View className='home-header'>
                <View className='home-user'>
                  <Image source={avatar} className='home-avatar' />
                  <Text className='home-user-name'>{HOME_USER.name}</Text>
                </View>
                <Image source={icons.add} className='home-add-icon' />
              </View>
              <View className='home-balance-card'>
                <Text className='home-balance-label'>Balance</Text>
                <View className='home-balance-row'>
                  <Text className='home-balance-amount'>${HOME_BALANCE.amount}</Text>
                  <Text className='home-balance-date'>{dayjs(HOME_BALANCE.nextRenewalDate).format('MM/DD')}</Text>
                </View>
              </View>
              <View className='mb-5'>
                <ListHeading title='Upcoming' />

                <FlatList
                  data={UPCOMING_SUBSCRIPTIONS}
                  renderItem={({ item }) => (<UpcomingListCard {...item} />)}
                  keyExtractor={item => item.id}
                  showsHorizontalScrollIndicator={false}
                  horizontal
                  ListEmptyComponent={<Text className='home-empty-state'>No Upcoming subscription yet</Text>}
                />
              </View>

              <ListHeading title='All Subscriptions' />
            </>
          )}
          data={HOME_SUBSCRIPTIONS}
          renderItem={({ item }) => (
            <AllSubscriptionCard
              onPress={() => setexpandedSubscriptionId((currentId) => {
                const subscriptionId = item.id ?? null
                return currentId === subscriptionId ? null : subscriptionId
              })}
              expanded={expandedSubscriptionId === item.id} {...item} />
          )}
          keyExtractor={(item) => item.id}
          ItemSeparatorComponent={() => (<View className='h-4'></View>)}
          extraData={expandedSubscriptionId}
          ListEmptyComponent={<View className='home-empty-state'>No Subscription yet</View>}
          showsVerticalScrollIndicator={false}
          contentContainerClassName='pb-30'
        />

      </View>

    </SafeAreaView>
  );
}
