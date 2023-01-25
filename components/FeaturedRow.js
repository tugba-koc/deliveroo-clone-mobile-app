import { useEffect, useState } from 'react';
import { View, Text, ScrollView, FlatList } from 'react-native';
import { ArrowRightIcon } from 'react-native-heroicons/outline';
import RestaurantCard from './RestaurantCard';
import sanityClient from '../sanity';

const FeaturedRow = ({ title, description, id }) => {
  const [restaurants, setRestaurants] = useState([]);

  useEffect(() => {
    sanityClient
      .fetch(
        `
          *[_type == 'featured' && _id == $id] {
            ...,
            restaurants[]->{
              ...,
              dishes[]->,
              type {
                name
              }
            }
          }[0]
        `,
        { id }
      )
      .then((data) => setRestaurants(data?.restaurants));
  }, []);

  return (
    <View>
      <View className='mt-4 flex-row items-center justify-between px-4'>
        <Text className='font-bold text-lg'>{title}</Text>
        <ArrowRightIcon color='#00CCBB' />
      </View>
      <Text className='text-sm text-gray-500 px-4'>{description}</Text>
      <View className='pt-4'>
        {/* Restaurant Cards... */}
        <FlatList
          horizontal
          showsHorizontalScrollIndicator={false}
          data={restaurants}
          keyExtractor={(restaurant, index) => {
            return restaurant._id;
          }}
          renderItem={(itemData) => (
            <RestaurantCard
              id={itemData.item._id}
              imgUrl={itemData.item.image}
              title={itemData.item.name}
              rating={itemData.item.rating}
              genre={itemData.item.type?.name ? itemData.item.type?.name: 'taste' }
              address={itemData.item.address}
              short_description={itemData.item.short_description}
              dishes={itemData.item.dishes}
              long={itemData.item.long}
              lat={itemData.item.lat}
            />
          )}
        />
      </View>
    </View>
  );
};

export default FeaturedRow;
