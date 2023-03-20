import { View, Text, TouchableOpacity, Image } from 'react-native';
import { SafeAreaView } from 'react-native-safe-area-context';
import { useNavigation } from '@react-navigation/native';
import { useSelector } from 'react-redux';
import { XCircleIcon } from 'react-native-heroicons/outline';
import MapView from 'react-native-maps';
import { Marker } from 'react-native-maps';
import { selectBasketRestaurant } from '../redux/reducer/basketSlice';

const Delivery = () => {
  const navigation = useNavigation();
  const basketRestaurant = useSelector(selectBasketRestaurant);

  return (
    <View className='bg-[#00CCBB] flex-1'>
      <SafeAreaView className='z-50'>
        <View className='flex-row items-center p-5 justify-between'>
          <TouchableOpacity onPress={() => navigation.navigate('Home')}>
            <XCircleIcon color='white' size={30} />
          </TouchableOpacity>
          <Text className='font-light text-white text-lg'>Order Help</Text>
        </View>
        <View className='bg-white rounded-md mx-5 my-2 p-6 shadow-md z-50'>
          <View className='flex-row justify-between'>
            <View>
              <Text className='text-lg text-gray-400'>Estimated Arrival</Text>
              <Text className='text-4xl font-bold'>45-55 minutes</Text>
            </View>
            <Image
              source={{
                uri: 'https://links.papareact.com/fls',
              }}
              className='h-20 w-20'
            />
          </View>
          <Text className='mt-3 text-gray-500'>
            Your order at {basketRestaurant.title} is being prepared.
          </Text>
        </View>
      </SafeAreaView>
      <MapView
        mapType='mutedStandard'
        className='flex-1 -mt-10 z-0'
        initialRegion={{
          latitude: basketRestaurant.lat,
          longitude: basketRestaurant.long,
          latitudeDelta: 0.0922,
          longitudeDelta: 0.0421,
        }}
      >
        <Marker
          coordinate={{ latitude : basketRestaurant.lat , longitude : basketRestaurant.long }}
          title={basketRestaurant.title}
          description={basketRestaurant.short_description}
          pinColor='#00CCBB'
        />
      </MapView>
    </View>
  );
};

export default Delivery;
