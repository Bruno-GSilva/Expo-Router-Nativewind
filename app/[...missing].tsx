import { Link, Stack } from 'expo-router';
import { View, Text } from 'react-native'

export default function NotFoundScreen() {
  return (
    <>
      <Stack.Screen options={{ title: 'Oops!' }} />
      <View className='flex-1 justify-center items-center bg-black'>
        <Text className='text-2xl font-extrabold text-white'>This screen doesn't exist.</Text>

        <Link href="/">
          <Text className='text-2xl font-extrabold text-white'>Go to home screen!</Text>
        </Link>
      </View>
    </>
  );
}