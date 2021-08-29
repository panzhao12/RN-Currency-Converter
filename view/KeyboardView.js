import React from 'react';
import { View, Text, StyleSheet, TouchableHighlight } from 'react-native';
import MainStyle from '../style/MainStyle';

const KeyboardView = (props) => {
     const { currency1, setCurrency1 } = props;

     const onPressNum = (digit) => setCurrency1(currency1 == '0' ? digit : currency1 + digit);
     const onPressClear = () => setCurrency1('0');
     const onPressBack = () => {
          if (currency1.length > 1) {
               setCurrency1(currency1.substring(0, currency1.length - 1));
          } else if (currency1 > '0') {
               setCurrency1('0');
          }
     }
     const onPressDot = () => setCurrency1(currency1.includes('.')? currency1: currency1 + '.'
     )

     return (
          <View style={MainStyle.keyboardView}>
               <View style={styles.keyboardRow}>
                    <TouchableHighlight style={styles.keyNum} onPress={onPressNum.bind(this, '7')}>
                         <Text style={styles.text}>7</Text></TouchableHighlight>
                    <TouchableHighlight style={styles.keyNum} onPress={onPressNum.bind(this, '8')}>
                         <Text style={styles.text}>8</Text></TouchableHighlight>
                    <TouchableHighlight style={styles.keyNum} onPress={onPressNum.bind(this, '9')}>
                         <Text style={styles.text}>9</Text></TouchableHighlight>
                    <TouchableHighlight style={styles.keyNum} onPress={onPressBack}>
                         <Text style={styles.text}>O</Text></TouchableHighlight>
               </View>
               <View style={styles.keyboardRow}>
                    <TouchableHighlight style={styles.keyNum} onPress={onPressNum.bind(this, '4')}>
                         <Text style={styles.text}>4</Text></TouchableHighlight>
                    <TouchableHighlight style={styles.keyNum} onPress={onPressNum.bind(this, '5')}>
                         <Text style={styles.text}>5</Text></TouchableHighlight>
                    <TouchableHighlight style={styles.keyNum} onPress={onPressNum.bind(this, '6')}>
                         <Text style={styles.text}>6</Text></TouchableHighlight>
                    <TouchableHighlight style={styles.keyNum} onPress={onPressBack}>
                         <Text style={styles.text}>L</Text></TouchableHighlight>
               </View>
               <View style={styles.keyboardRow}>
                    <TouchableHighlight style={styles.keyNum} onPress={onPressNum.bind(this, '1')}>
                         <Text style={styles.text}>1</Text></TouchableHighlight>
                    <TouchableHighlight style={styles.keyNum} onPress={onPressNum.bind(this, '2')}>
                         <Text style={styles.text}>2</Text></TouchableHighlight>
                    <TouchableHighlight style={styles.keyNum} onPress={onPressNum.bind(this, '3')}>
                         <Text style={styles.text}>3</Text></TouchableHighlight>
                    <TouchableHighlight style={styles.keyNum} onPress={onPressBack}>
                         <Text style={styles.text}>G</Text></TouchableHighlight>
               </View>
               <View style={styles.keyboardRow}>
                    <TouchableHighlight style={styles.keyNum} onPress={onPressClear}>
                         <Text style={styles.text}>C</Text></TouchableHighlight>
                    <TouchableHighlight style={styles.keyNum} onPress={onPressNum.bind(this, '0')}>
                         <Text style={styles.text}>0</Text></TouchableHighlight>
                    <TouchableHighlight style={styles.keyNum} onPress={onPressDot}>
                         <Text style={styles.text}>.</Text></TouchableHighlight>
                    <TouchableHighlight style={styles.keyNum} onPress={onPressBack}>
                         <Text style={styles.text}>A</Text></TouchableHighlight>
               </View>
          </View>
     );
}

const styles = StyleSheet.create({
     keyboardRow: {
          flex: 1,
          backgroundColor: 'black',
          flexDirection: 'row'
     },
     keyNum: {
          flex: 1,
          backgroundColor: '#424242',
          justifyContent: 'center',
     },
     keyFunc: {
          flex: 1,
          backgroundColor: '#f06d30',
          justifyContent: 'center',
     },
     text: {
          color: 'white',
          textAlign: 'center',
          fontSize: 30
     }
});

export default KeyboardView;