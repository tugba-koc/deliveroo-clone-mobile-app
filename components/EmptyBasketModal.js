import { View, Text, TouchableOpacity } from 'react-native';
import React from 'react';
import { emptyBasket, setBasket } from '../redux/reducer/basketSlice';
import { useDispatch } from 'react-redux';
import { SafeAreaView } from 'react-native-safe-area-context';

const EmptyBasketModal = ({ setIsShownModal }) => {
  const dispatch = useDispatch();

  return (
    <View className='absolute w-full h-full z-50 bg-[#00000050]'>
      <View className='mx-auto opacity-100 my-auto p-4 rounded-lg space-x-1 bg-[#e7820f] w-11/12 h-auto'>
        <Text className='text-white font-normal text-lg'>
          There shouldn't be any product from different restaurants. In order
          for adding a product grom this restaurant, do you want to empty your
          cart?
        </Text>
        <View className='pt-5 flex-row space-x-16 justify-end'>
          <TouchableOpacity>
            <Text
              onPress={() => {
                setIsShownModal(false);
              }}
              className='bg-[#e7820] font-extrabold text-white text-lg'
            >
              No
            </Text>
          </TouchableOpacity>
          <TouchableOpacity>
            <Text
              onPress={() => {
                dispatch(emptyBasket()), setIsShownModal(false);
              }}
              className='bg-[#e7820] font-extrabold text-white text-lg'
            >
              Yes
            </Text>
          </TouchableOpacity>
        </View>
      </View>
    </View>
  );
};

export default EmptyBasketModal;
