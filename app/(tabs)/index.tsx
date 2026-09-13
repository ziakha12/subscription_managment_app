import { Link } from 'expo-router';
import { styled } from 'nativewind';
import { Text, View } from 'react-native';
import { SafeAreaView as RnSafeAreaView } from 'react-native-safe-area-context';
const SafeAreaView = styled(RnSafeAreaView);

export default function HomeScreen() {
  return (
   <SafeAreaView className='bg-background h-screen p-4'>
    <View className=' '>
      <Text className='text-primary text-3xl '>Welcome to Zeecurrly</Text>
      <Link className='p-4 mt-2 bg-primary text-white' href={'/(auth)/sign-in'}>Sign In</Link>
      <Link className='p-4 mt-2 bg-primary text-white' href={"/(auth)/sign-up"}>Sign Up</Link>
    </View>
   </SafeAreaView>
  );
}
