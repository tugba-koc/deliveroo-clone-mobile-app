import { View, Text, TouchableOpacity, Image, FlatList } from 'react-native';
import React, { useEffect, useState } from 'react';
import { useNavigation } from '@react-navigation/native';
import { useSelector } from 'react-redux';
import { selectBasketItems, selectBasketRestaurant, selectTotalBasket } from '../redux/reducer/basketSlice';
import { SafeAreaView } from 'react-native-safe-area-context';
import { XCircleIcon } from 'react-native-heroicons/outline';
import BasketRow from '../components/BasketRow';

const Basket = () => {
  const navigation = useNavigation();
  const basketRestaurant = useSelector(selectBasketRestaurant);
  const [groupedOrderDish, setGroupedOrderDish] = useState([]);
  const items = useSelector(selectBasketItems);
  const basketTotal = useSelector(selectTotalBasket);

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
              {basketRestaurant.title}
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
        {/* Basket rows */}
        <FlatList
          data={groupedOrderDish}
          keyExtractor={(orderDish, index) => {
            return JSON.parse(orderDish[0]).id;
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
        {/* Total Payment calculation */}
        <View className='p-5 mt-5 bg-white space-y-4'>
          <View className='flex-row justify-between'>
            <Text className='text-gray-400'>SubTotal</Text>
            <Text className='text-gray-400'>{basketTotal} ₺</Text>
          </View>

          <View className='flex-row justify-between'>
            <Text className='text-gray-400'>Delivery Fee</Text>
            <Text className='text-gray-400'>5,9 ₺</Text>
          </View>

          <View className='flex-row justify-between'>
            <Text>Order Total</Text>
            <Text className='font-extrabold'>{basketTotal + 5.9} ₺</Text>
          </View>

          <TouchableOpacity onPress={()=> navigation.navigate('PreparingOrder')} className='rounded-lg bg-[#00CCBB] p-4'>
            <Text className='font-bold text-white text-center text-lg'>Place Order</Text>
          </TouchableOpacity>
        </View>
      </View>
    </View>
  );
};

export default Basket;
