import { View, Text, Image } from 'react-native'
import React from 'react'
import { urlFor } from '../sanity';
import { removeFromBasket } from '../redux/reducer/basketSlice';
import { TouchableOpacity } from 'react-native';
import { useDispatch } from 'react-redux';

const BasketRow = ({id, imgUrl, title, price, count}) => {
  const dispatch = useDispatch();

  return (
    <View className='flex-row px-5 py-2 items-center space-x-3 bg-white border-y border-neutral-200'>
      <Text className='text-[#00CCBB] font-bold'>{count} x</Text>
      <Image
      className='w-12 h-12 rounded-full'
      source={{
        uri: urlFor(imgUrl).url()
      }}
      />
      <Text className='flex-1'>{title}</Text>
      <Text className='text-gray-600'>{price} ₺</Text>
      <TouchableOpacity>
        <Text className='text-[#00CCBB] text-xs' onPress={()=>dispatch(removeFromBasket(id))}>
          Remove
        </Text>
      </TouchableOpacity>
    </View>
  )
}

export default BasketRow