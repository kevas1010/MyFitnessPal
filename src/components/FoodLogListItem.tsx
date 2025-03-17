import { View, Text, StyleSheet } from 'react-native';
import { AntDesign } from '@expo/vector-icons';
import { FoodItem } from '../types';

type Props = {
  item: FoodItem;
};

const FoodLogListItem = ({ item }: Props) => {
  return (
    <View style={styles.container}>
      <View style={{ flex: 1, gap: 5 }}>
        <Text style={{ fontWeight: 'bold', fontSize: 16 }}>
          {item.food.label}
        </Text>
        <Text style={{ color: 'dimgray' }}>{item.food.nutrients.ENERC_KCAL} cal</Text>
      </View>
    </View>
  );
};



const styles = StyleSheet.create({
  container: {
    backgroundColor: '#f6f6f8',
    padding: 10,
    borderRadius: 5,
    flexDirection: 'row',
    justifyContent: 'space-between',
    alignItems: 'center',
  },
});

export default FoodLogListItem;
