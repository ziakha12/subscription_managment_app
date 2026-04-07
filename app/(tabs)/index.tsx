import { Text, View } from 'react-native';

import { Link } from 'expo-router';
import { SafeAreaView } from 'react-native-safe-area-context';

export default function HomeScreen() {
  return (
   <SafeAreaView>
    <View className=' bg-background flex-1'>
      <Text className='text-primary text-3xl'>Welcome to Zeecurrly</Text>
      <Link className='p-4 mt-2 bg-primary text-white' href={'/(auth)/sign-in'}>Sign In</Link>
      <Link className='p-4 mt-2 bg-primary text-white' href={"/(auth)/sign-up"}>Sign Up</Link>
    </View>
   </SafeAreaView>
  );
}
