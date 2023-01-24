import { View, Text, ScrollView } from 'react-native';
import { ArrowRightIcon } from 'react-native-heroicons/outline';
import RestaurantCard from './RestaurantCard';

const FeaturedRow = ({ title, description, id }) => {
  return (
    <View>
      <View className='mt-4 flex-row items-center justify-between px-4'>
        <Text className='font-bold text-lg'>{title}</Text>
        <ArrowRightIcon color='#00CCBB' />
      </View>
      <Text className='text-sm text-gray-500 px-4'>{description}</Text>
      <ScrollView
        contentContainerStyle={{
          paddingHorizontal: 15,
          paddingTop: 4,
        }}
        horizontal
        showsHorizontalScrollIndicator={false}
        className='pt-4'
      >
        {/* Restaurant Cards... */}
        <RestaurantCard
          id={12}
          imgUrl='https://links.papareact.com/wru'
          title='Test'
          rating='4.5'
          genre='Japanese'
          address='test-address'
          short_description='short_description'
          dishes='meal'
          long='test'
          lat='test'
        />
        <RestaurantCard
          id={12}
          imgUrl='https://links.papareact.com/wru'
          title='Test'
          rating='4.5'
          genre='Japanese'
          address='test-address'
          short_description='short_description'
          dishes='meal'
          long='test'
          lat='test'
        />
        <RestaurantCard
          id={12}
          imgUrl='https://links.papareact.com/wru'
          title='Test'
          rating='4.5'
          genre='Japanese'
          address='test-address'
          short_description='short_description'
          dishes='meal'
          long='test'
          lat='test'
        />
        <RestaurantCard
          id={12}
          imgUrl='https://links.papareact.com/wru'
          title='Test'
          rating='4.5'
          genre='Japanese'
          address='test-address'
          short_description='short_description'
          dishes='meal'
          long='test'
          lat='test'
        />
      </ScrollView>
    </View>
  );
};

export default FeaturedRow;
