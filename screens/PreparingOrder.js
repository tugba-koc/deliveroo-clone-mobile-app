import { View, Text, Image } from 'react-native';
import React, { useEffect } from 'react';
import { SafeAreaView } from 'react-native-safe-area-context';
import { useNavigation } from '@react-navigation/native';

const PreparingOrder = () => {
  const navigation = useNavigation();

  useEffect(() => {
    setTimeout(() => {
        navigation.navigate('Delivery')
    }, 2000);
  }, []);

  return (
    <SafeAreaView className='flex-1 bg-[#00CCBB] items-center justify-center'>
      <Image
        source={require('../assets/preparingOrder.gif')}
        style={{ width: 200, height: 200 }}
      />
      <Text className='w-9/12 text-center text-white font-bold text-xl mt-10'>
        Waiting for Restaurant to accept your order!
      </Text>
    </SafeAreaView>
  );
};

export default PreparingOrder;
