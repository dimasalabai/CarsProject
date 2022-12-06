import { Text, View, ActivityIndicator } from 'react-native';

export const Loading = () => {
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
};
