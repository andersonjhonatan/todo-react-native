import React from 'react';
import {StatusBar, View} from 'react-native';

import {} from 'react-native/Libraries/NewAppScreen';
import {HomePage} from './src/pages/Home';

function App(): React.JSX.Element {
  return (
    <View
      style={{
        flex: 1,
        justifyContent: 'center',
        alignItems: 'center',
      }}>
      <StatusBar barStyle="light-content" backgroundColor="black" translucent />

      <HomePage />
    </View>
  );
}

export default App;
