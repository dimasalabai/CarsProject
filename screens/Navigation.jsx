import { createNativeStackNavigator } from '@react-navigation/native-stack';
import { NavigationContainer } from '@react-navigation/native';
import { FullCarscreen } from './FullDescription';
import { HomeScreen } from './Home';

const Stack = createNativeStackNavigator();

export const Navigation = () => {
  return (
    <NavigationContainer>
      <Stack.Navigator>
        <Stack.Screen name="Home" component={HomeScreen} options={{ title: 'Car' }} />
        <Stack.Screen name="FullDescription" component={FullCarscreen} options={{ title: 'DescriptionCar' }} />
      </Stack.Navigator>
    </NavigationContainer>
  );
};
