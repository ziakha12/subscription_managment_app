import { Stack } from 'expo-router';
import 'react-native-reanimated';

import '@/global.css';

import { useColorScheme } from '@/hooks/use-color-scheme';

export const unstable_settings = {
  anchor: '(tabs)',
};

export default function RootLayout() {
  const colorScheme = useColorScheme();

  return   <Stack screenOptions={{headerShown : true}}/>
}
