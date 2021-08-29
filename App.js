import React, { useState } from 'react';
import { View } from 'react-native';
import ScreenView from './view/ScreenView'
import KeyboardView from './view/KeyboardView'
import MainStyle from './style/MainStyle'

export default function App() {
  const [currency1, setCurrency_1] = useState('0');
  const setCurrency1 = (value) => setCurrency_1( value );

  return (
    <View style={MainStyle.container}>
      <ScreenView currency1={ currency1 } />
      <KeyboardView 
      currency1={ currency1 } 
      setCurrency1={ setCurrency1 } 
      />
    </View>
  );
}
