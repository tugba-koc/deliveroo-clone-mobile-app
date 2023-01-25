import { useEffect, useState } from 'react';
import { View, Text, ScrollView, FlatList } from 'react-native';
import CategoryCard from './CategoryCard';
import sanityClient from '../sanity';

const Categories = () => {
  const [categories, setCategories] = useState([]);

  useEffect(() => {
    sanityClient
      .fetch(
        `
          *[_type == 'category']
        `
      )
      .then((data) => setCategories(data));
  }, []);

  return (
    <View
      contentContainerStyle={{
        paddingHorizontal: 15,
        paddingTop: 10,
      }}
      horizontal
      showsHorizontalScrollIndicator={false}
    >
      {/* CategoryCard */}
      <FlatList
        horizontal
        showsHorizontalScrollIndicator={false}
        data={categories}
        keyExtractor={(category, index) => {
          return category._id;
        }}
        renderItem={(itemData) => (
          <CategoryCard
            imgUrl={itemData.item.image}
            title={itemData.item.name}
          />
        )}
      />
    </View>
  );
};

export default Categories;
