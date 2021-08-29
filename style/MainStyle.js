import { StyleSheet } from 'react-native';

const MainStyle = StyleSheet.create({
     container: {
          flex: 1,
          flexDirection: 'column',
          backgroundColor: 'black'
     },
     screenView: {
          flex: 4,
          backgroundColor: '#f06d30'
     },
     keyboardView: {
          flex: 6,
          backgroundColor: '#323637'
     }
});

export default MainStyle