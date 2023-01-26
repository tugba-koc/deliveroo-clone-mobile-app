import { View, Text, TouchableOpacity } from 'react-native';
import React from 'react';
import { useSelector } from 'react-redux';
import { selectItems, selectTotalBasket } from '../redux/reducer/basketSlice';
import { useNavigation } from '@react-navigation/native';

const BasketPopup = () => {
  const items = useSelector(selectItems);
  const navigation = useNavigation();
  const totalBasket = useSelector(selectTotalBasket);
  return (
    <View className='absolute bottom-10 w-full z-50'>
      <TouchableOpacity className='mx-5 p-4 rounded-lg flex-row items-center space-x-1 bg-[#00CCBB]'>
        <Text className='text-white font-extrabold text-lg bg-[#01A296] py-1 px-2'>
          {items.length}
        </Text>
        <Text
          onPress={() =>
            navigation.navigate('Basket')
          }
          className='flex-1 font-extrabold text-white text-lg text-center'
        >
          View Basket
        </Text>
        <Text className='text-lg text-white font-extrabold'>
          {totalBasket} ₺
        </Text>
      </TouchableOpacity>
    </View>
  );
};

export default BasketPopup;
