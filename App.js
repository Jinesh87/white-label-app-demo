import { useEffect } from 'react';
import { StatusBar } from 'expo-status-bar';
import { StyleSheet, Text, View } from 'react-native';
import { UnitSDK,UNEnvironment,UNWhiteLabelAppComponent } from 'react-native-unit-components';
import { useFonts } from 'expo-font';
const THEME = "";
const LANGUAGE = "";
const CUSTOM_FONTS = {
  OpenSans: 'OpenSans-Regular',
};
const jwtToken = "jwtToken Here";

export default function App() {
  const [fontsLoaded] = useFonts({
    'OpenSans-Regular': require('./assets/fonts/OpenSans-Regular.ttf'), // Load OpenSans-Regular font
  });
  useEffect(() => {
    if (fontsLoaded) {
      // Initialize Unit SDK only after fonts are loaded
      UnitSDK.init(UNEnvironment.sandbox, THEME, LANGUAGE, CUSTOM_FONTS);
    }
  }, [fontsLoaded]);

  return (
    <View style={styles.container}>
      {/* <Text>Hello World!!!</Text> */}
      <UNWhiteLabelAppComponent jwtToken={jwtToken} />
      <StatusBar style="auto" />
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
