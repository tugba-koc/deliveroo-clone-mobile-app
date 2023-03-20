import {
  View,
  Text,
  ScrollView,
  Image,
  TouchableOpacity,
  FlatList,
} from 'react-native';
import { SafeAreaView } from 'react-native-safe-area-context';
import { urlFor } from '../sanity';
import {
  ArrowSmallLeftIcon,
  ChevronRightIcon,
  MapPinIcon,
  QuestionMarkCircleIcon,
  StarIcon,
} from 'react-native-heroicons/outline';
import DishRow from '../components/DishRow';
import BasketPopup from '../components/BasketPopup';
import { useDispatch, useSelector } from 'react-redux';
import {
  setRestaurant,
  selectRestaurant,
} from '../redux/reducer/restaurantSlice';
import { useEffect, useState } from 'react';
import EmptyBasketModal from '../components/EmptyBasketModal';

const Restaurant = ({ route, navigation }) => {
  const {
    id,
    imgUrl,
    title,
    rating,
    genre,
    address,
    short_description,
    dishes,
    long,
    lat,
  } = route.params;
  const dispatch = useDispatch();
  const [isShownModal, setIsShownModal] = useState(false);
  const restaurant = useSelector(selectRestaurant);

  useEffect(() => {
    dispatch(
      setRestaurant({
        id,
        imgUrl,
        title,
        rating,
        genre,
        address,
        short_description,
        dishes,
        long,
        lat,
      })
    );
  }, [dispatch]);

  return (
    <SafeAreaView className='h-screen'>
      {isShownModal ? (
        <EmptyBasketModal setIsShownModal={setIsShownModal} />
      ) : (
        <BasketPopup />
      )}
      <View>
        <View className='relative'>
          <Image
            source={{
              uri: urlFor(imgUrl).url(),
            }}
            className='w-full h-56 bg-gray-300'
          />
          <TouchableOpacity
            onPress={() => navigation.goBack()}
            className='absolute left-4 top-4 p-2 bg-gray-100 rounded-full'
          >
            <ArrowSmallLeftIcon size={20} color='#00CCBB' />
          </TouchableOpacity>
        </View>
        <View className='bg-white'>
          <View className='px-4 pt-4'>
            <Text className='text-3xl font-bold'>{title}</Text>
            <View className='flex-row space-x-2 my-1'>
              <View className='flex-row items-center space-x-1'>
                <StarIcon color='green' opacity={0.5} size={22} />
                <Text className='text-xs text-gray-500'>
                  <Text className='text-green-500'>{rating}</Text> ·{' '}
                  {genre ? genre : 'taste'}
                </Text>
              </View>

              <View className='flex-row items-center space-x-1'>
                <MapPinIcon color='gray' opacity={0.4} size={22} />
                <Text className='text-xs text-gray-500'>
                  Nearby · {address}
                </Text>
              </View>
            </View>
            <Text className='text-gray-500 mt-2 pb-4'>{short_description}</Text>
          </View>
          <TouchableOpacity className='flex-row items-center space-x-2 border-y border-gray-300 px-4'>
            <QuestionMarkCircleIcon color='gray' opacity={0.6} size={20} />
            <Text className='pl-2 flex-1 text-md font-bold'>
              Have a food allergy?
            </Text>
            <ChevronRightIcon color='#00CCBB' />
          </TouchableOpacity>
          <View className='pb-36'>
            <Text className='px-4 pt-6 mb-3 font-bold text-xl'>Menu</Text>
            {/* Dish Rows */}
            <FlatList
              showsHorizontalScrollIndicator={false}
              data={dishes}
              keyExtractor={(dish, index) => {
                return dish._id;
              }}
              renderItem={(dishes) => (
                <DishRow
                  setIsShownModal={setIsShownModal}
                  disabled={isShownModal}
                  id={dishes.item._id}
                  name={dishes.item.name}
                  image={dishes.item.image}
                  price={dishes.item.price}
                  description={dishes.item.short_description}
                  restaurant={restaurant}
                />
              )}
            />
          </View>
        </View>
      </View>
    </SafeAreaView>
  );
};

export default Restaurant;
