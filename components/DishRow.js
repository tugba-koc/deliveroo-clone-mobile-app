import { View, Text, Image, TouchableOpacity } from 'react-native';
import React, { useState } from 'react';
import { urlFor } from '../sanity';
import { MinusCircleIcon, PlusCircleIcon } from 'react-native-heroicons/outline';

const DishRow = ({ id, name, description, price, image }) => {
  const [isPressed, setIsPressed] = useState(false);
  return (
    <>
      <TouchableOpacity onPress={()=>setIsPressed(!isPressed)} 
      className={`bg-white border p-4 border-gray-200 ${isPressed && 'border-b-0' }`}>
        <View className='flex-row'>
          <View className='flex-1 pr-2'>
            <Text className='text-lg mb-1'>{name}</Text>
            <Text className='text-gray-400'>{description}</Text>
            <Text className='text-gray-400 mt-2'>{price} ₺</Text>
          </View>
          <View>
            <Image
              source={{
                uri: urlFor(image).url(),
              }}
              className='h-20 w-20 bg-gray-300 p-4 border'
            />
          </View>
        </View>
      </TouchableOpacity>
      {isPressed ? (
        <View className='bg-white px-4'>
          <View className='flex-row items-center space-x-2 pb-3'>
            <TouchableOpacity>
              <MinusCircleIcon
                color='#00CCBB'
                size={40}
              />
            </TouchableOpacity>
            <Text>0</Text>
            <TouchableOpacity>
              <PlusCircleIcon
                color='#00CCBB'
                size={40}
              />
            </TouchableOpacity>
          </View>
        </View>
      ) : null}
    </>
  );
};

export default DishRow;
