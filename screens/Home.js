import { View, Text, Image, TextInput, ScrollView } from 'react-native';
import { SafeAreaView } from 'react-native-safe-area-context';
import {
  AdjustmentsVerticalIcon,
  UserIcon,
  ChevronDownIcon,
  MagnifyingGlassIcon,
} from 'react-native-heroicons/outline';
import Categories from '../components/Categories';
import FeaturedRow from '../components/FeaturedRow';

const Home = () => {
  return (
    <SafeAreaView className='bg-white pt-5'>
      {/* Header */}
      <View className='flex-row pb-3 items-center mx-4 space-x-2'>
        <Image
          source={{
            uri: 'https://links.papareact.com/wru',
          }}
          className='h-7 w-7 bg-gray-300 p-4 rounded-full'
        />
        <View className='flex-1'>
          <Text className='font-bold text-gray-400 text-xs'>Deliver now!</Text>
          <Text className='font-bold text-xl'>
            Current Location
            <ChevronDownIcon size={20} color='#00CCBB' />
          </Text>
        </View>
        <UserIcon size={35} color='#00CCBB' />
      </View>

      {/* Search */}
      <View className='flex-row items-center space-x-2 pb-2 mx-4'>
        <View className='flex-row space-x-2 flex-1 bg-gray-200 p-3'>
          <MagnifyingGlassIcon color='gray' size={20} />
          <TextInput
            keyboardType='default'
            placeholder='Restaurants and cuisines'
          />
        </View>
        <AdjustmentsVerticalIcon color='#00CCBB' />
      </View>

      {/* Body */}
      <ScrollView contentContainerStyle={{
        paddingBottom: 100
      }} className='bg-gray-100'>

        {/* Categories */}
        <Categories />

        {/* Featured Rows */}
        <FeaturedRow 
          title='Featured'
          description='Paid placements for our partners'
          id='123'
        />
        <FeaturedRow
          title='Tast Discounts'
          id='1234'
          description='Paid placements for our partners'
        />
        <FeaturedRow 
          title='Offers near you!'
          id='12345'
          description='Paid placements for our partners'
        />
      </ScrollView>
    </SafeAreaView>
  );
};

export default Home;
