import { View, Text, TouchableOpacity, Image, FlatList } from 'react-native';
import React, { useEffect, useState } from 'react';
import { useNavigation } from '@react-navigation/native';
import { useSelector } from 'react-redux';
import { selectRestaurant } from '../redux/reducer/restaurantSlice';
import { selectBasketItems } from '../redux/reducer/basketSlice';
import { SafeAreaView } from 'react-native-safe-area-context';
import { XCircleIcon } from 'react-native-heroicons/outline';
import BasketRow from '../components/BasketRow';

const Basket = () => {
  const navigation = useNavigation();
  const restaurant = useSelector(selectRestaurant);
  const [groupedOrderDish, setGroupedOrderDish] = useState([]);
  const items = useSelector(selectBasketItems);

  useEffect(() => {
    let counter = {};
    items.forEach((obj) => {
      var key = JSON.stringify(obj);
      counter[key] = (counter[key] || 0) + 1;
    });
    let arr = Object.entries(counter);
    setGroupedOrderDish(arr);
  }, [items]);

  return (
    <View className='flex-1 bg-white'>
      <View className='flex-1 bg-gray-100'>
        <View className='p-5 border-b border-[#00CCBB] bg-white shadow-xs'>
          <View>
            <Text className='text-lg font-bold text-center'>Basket</Text>
            <Text className='text-center text-gray-400'>
              {restaurant.title}
            </Text>
          </View>
          <TouchableOpacity
            className='rounded-full bg-gray-100 absolute top-3 right-5'
            onPress={() => navigation.goBack()}
          >
            <XCircleIcon color='#00CCBB' height={50} width={50} />
          </TouchableOpacity>
        </View>
        <View className='flex-row items-center space-x-4 px-4 py-3 bg-white my-5'>
          <Image
            source={{
              uri: 'https://links.papareact.com/wru',
            }}
            className='h-7 w-9 bg-gray-300 rounded-full p-4'
          />
          <Text className='flex-1'>Deliver in 50-75 min</Text>
          <TouchableOpacity>
            <Text className='text-[#00CCBB]'>Change</Text>
          </TouchableOpacity>
        </View>

        <FlatList
          data={groupedOrderDish}
          keyExtractor={(orderDish, index) => {
            return orderDish.id;
          }}
          renderItem={(itemData) => (
            <BasketRow
              id={JSON.parse(itemData.item[0]).id}
              imgUrl={JSON.parse(itemData.item[0]).image}
              title={JSON.parse(itemData.item[0]).name}
              price={JSON.parse(itemData.item[0]).price}
              count={itemData.item[1]}
            />
          )}
        />
      </View>
    </View>
  );
};

export default Basket;
