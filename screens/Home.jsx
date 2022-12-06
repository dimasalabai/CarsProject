import axios from 'axios';
import React from 'react';
import {
  Alert,
  Text,
  FlatList,
  View,
  ActivityIndicator,
  RefreshControl,
  TouchableOpacity,
} from 'react-native';
import { Car } from '../components/Car';

export const HomeScreen = ({ navigation }) => {
  const [isLoading, setIsLoading] = React.useState(true);
  const [items, setItems] = React.useState();

  const fetchCar = () => {
    setIsLoading(true);

    axios
      .get('https://638f5de29cbdb0dbe32537ef.mockapi.io/Cars')

      .then(({ data }) => {
        setItems(data);
        console.log(data);
      })
      .catch((err) => {
        setItems([]);
        console.log(err);
        Alert.alert('Помилка', 'Не вдалось отримати дані');
      })
      .finally(() => {
        setIsLoading(false);
      });
  };

  React.useEffect(fetchCar, []);

  if (isLoading) {
    return (
      <View
        style={{
          backgroundColor: '#7a4242',
          flex: 1,
          justifyContent: 'center',
          alignItems: 'center',
        }}>
        <ActivityIndicator size="large" />
        <Text style={{ marginTop: 15 }}>Завантаження даних... Зачекайте</Text>
      </View>
    );
  }

  return (
    <View>
      <FlatList
        refreshControl={<RefreshControl refreshing={isLoading} onRefresh={fetchCar} />}
        data={items}
        renderItem={({ item }) => (
          <TouchableOpacity
            onPress={() => navigation.navigate('FullDescription', { id: item.id, title: item.Name, data: item })}>
            <Car title={item.Name} imageUrl={item.image} />
          </TouchableOpacity>
        )}
      />
    </View>
  );
};
