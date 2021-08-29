import React, { useEffect, useState } from 'react';
import { View, Text, StyleSheet } from 'react-native';
import { Picker } from '@react-native-picker/picker';
import MainStyle from '../style/MainStyle'

const API_HOST = 'api.frankfurter.app';

// Get currency list
const getCurrencies = () => {
     return fetch(`https://${API_HOST}/currencies`)
          .then(resp => resp.json())
          .then((data) => {
               // Swap keys and values
               const result = {};
               Object.keys(data).forEach(key => {
                    result[data[key]] = key;
               });
               return result;
          })
}

// Altenatively to convert by using SQLite and update data periodically by cronjob (API: GET /latest)
const convert = (from, to, amount) => {
     return fetch(`https://${API_HOST}/latest?amount=${amount}&from=${from}&to=${to}`)
          .then(resp => resp.json())
          .then((data) => {
               return data.rates[to];
          });
}

const ScreenView = (props) => {
     const { currency1 } = props;
     const [currency2, setCurrency2] = useState("0");
     const [selectedCurrency1, setSelectedCurrency1] = useState("AUD"); //TODO
     const [selectedCurrency2, setSelectedCurrency2] = useState("AUD");
     const [currencyList, setCurrencyList] = useState([]);

     // Call API to get currency list after the App is rendered
     useEffect(() => {
          getCurrencies()
               .then((data) => {
                    let list = [];
                    for (let item in data) {
                         list.push(<Picker.Item key={item} style={styles.pickItem} label={item} value={data[item]} />)
                    }
                    return list;
               })
               .then((list) => setCurrencyList(list))
               .catch((err) => console.error(err));
     }, []);

     // Call conversion API 
     useEffect(() => {
          if (selectedCurrency1 == selectedCurrency2 || currency1 == '0') {
               setCurrency2(currency1);
          } else {
               convert(selectedCurrency1, selectedCurrency2, currency1)
                    .then((result) => setCurrency2(result));
          }
     }, [selectedCurrency1, selectedCurrency2, currency1]);

     return (
          <View style={ MainStyle.screenView }>
               <View style={ styles.displyArea }>
                    <View style={{flex:4}}>
                         <Text style={ styles.text }>From</Text>
                         <Picker style={{ marginLeft: 15 }}
                              selectedValue={ selectedCurrency1 }
                              onValueChange={(itemValue, itemIndex) =>
                                   setSelectedCurrency1(itemValue)
                              }>
                              { currencyList }
                         </Picker>
                    </View>
                    <Text style={ currency1.length < 6? styles.numberLarge : styles.numberSmall }>{currency1}</Text>
               </View>
               {/* <View style={{ flexDirection: 'row' }}>
                    <View style={{
                         marginLeft: 70,
                         height: 1,
                         backgroundColor: 'white',
                         marginTop: 10,
                         flex: 1
                    }}></View>
               </View> */}
               <View style={ styles.displyArea }>
                    <View style={{flex:4}}>
                         <Text style={ styles.text }>To</Text>
                         <Picker style={{ marginLeft: 15 }}
                              selectedValue={ selectedCurrency2 }
                              onValueChange={(itemValue, itemIndex) =>
                                   setSelectedCurrency2(itemValue)
                              }>
                              {currencyList}
                         </Picker>
                    </View>
                    <Text style={ currency1.length < 6? styles.numberLarge : styles.numberSmall }>{ currency2 }</Text>
               </View>
          </View>
     );
}

const styles = StyleSheet.create({
     displyArea: {
          flex: 1,
          flexDirection: 'row',
          marginTop: 20
     },
     text: {
          color: 'white',
          textAlign: 'left',
          marginLeft: 20,
          marginTop: 20,
          fontSize: 40
     },
     numberLarge: {
          flex:5,
          color: 'white',
          fontSize: 60,
          textAlign: 'right',
          marginRight: 20,
          marginTop: 12
     },
     numberSmall: {
          flex:5,
          color: 'white',
          fontSize: 30,
          textAlign: 'right',
          marginRight: 20,
          marginTop: 12
     },
     pickItem: {
          fontSize: 20
     }
});

export default ScreenView;