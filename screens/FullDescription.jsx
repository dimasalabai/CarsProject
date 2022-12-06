import React from 'react';
import { View, Text } from 'react-native';
import styled from 'styled-components/native';
import { Loading } from '../components/Loading';

const CarImage = styled.Image`
  border-radius: 15px;
  border: 3px solid #240101;
  width: 100%;
  height: 250px;
  margin-bottom: 20px;
`;

const CarView = styled.View`
  background-color: #520c0c;
  height: 100%;
`;

const CarText = styled.Text`
  color: #1eb419;
  font-size: 18px;
  font-weight: 400;
  text-shadow: 1px 1px 4px #fff;
  line-height: 24px;
`;

export const FullCarscreen = ({ route, navigation }) => {
  const { id, title, data } = route.params;

  React.useEffect(() => {
    navigation.setOptions({
      title,
    });
  }, []);


  return (
    <CarView style={{ padding: 30 }}>
      <CarImage source={{ uri: data.image }} />
      <CarText style={{ padding: 20 }}>Назва: {data.Name}</CarText>
      <CarText>Потужність: {data.Horsepower} к.с</CarText>
      <CarText>Вага: {data.Weight_in_lbs} lbs</CarText>
      <CarText>Прискорення: {data.Acceleration}</CarText>
      <CarText>Країна виробник: {data.Origin}</CarText>
    </CarView>
  );
};
