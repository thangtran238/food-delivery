import { StatusBar } from 'expo-status-bar';
import { StyleSheet, Text, View } from 'react-native';
import Button from './app/src/components/Button';
export default function App() {
  return (
    <View>
      <Button styleType="long_blue" text={{ text: 'Primary Button' }} />
      <Button styleType="long_white" text={{ text: 'Primary Button' }} />
      <Button styleType="short" text={{ text: 'Buy now' }} />
      <Button
        styleType="custom"
        text={{ text: '<' }}
        style={{
          // backgroundColor: 'green',
          // borderRadius: 20,
          // padding: 15,
          width: 60,
          height: 60,
        }}
      />
    </View> 
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: '#fff',
    alignItems: 'center',
    justifyContent: 'center',
  },
});
