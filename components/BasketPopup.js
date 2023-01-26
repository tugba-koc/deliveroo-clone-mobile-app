import { View, Text } from 'react-native';
import React from 'react';
import { useSelector } from 'react-redux';
import { selectItems, selectTotalBasket } from '../redux/reducer/basketSlice';

const BasketPopup = () => {
  const items = useSelector(selectItems);
  const totalBasket = useSelector(selectTotalBasket);
  return (
    <View className='absolute bottom-10 w-full z-50'>
      <Text>{totalBasket}</Text>
    </View>
  );
};

export default BasketPopup;
