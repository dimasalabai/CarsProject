import styled from 'styled-components/native';

const CarView = styled.View`
  background-color: #406940;
  display: flex;
  align-items: center;
  justify-content: center;
  padding: 15px;
  border-bottom-width: 1px;
  border-bottom-color: rgba(0, 0, 0, 0.9);
  border-bottom-style: solid;
`;

const CarImage = styled.Image`
  width: 90%;
  height: 200px;
  border: 5px solid #1d3d1d;
`;

const CarTitle = styled.Text`
  padding: 10px 0px 5px 0px;
  font-size: 24px;
  font-weight: 700;
  text-transform: capitalize;
`;


const truncateTitle = (str) => {
  if (str.length >= 50) {
    return str.substring(0, 50) + '...';
  }

  return str;
};

export const Car = ({ title, imageUrl }) => {
  return (
    <CarView>
      <CarImage source={{ uri: imageUrl }} />
      <CarTitle>{truncateTitle(title)}</CarTitle>
    </CarView>
  );
};
