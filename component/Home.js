import React from 'react';
import { StyleSheet,ImageBackground } from 'react-native';
import { Container, Text, Button} from 'native-base';
import {useNavigation} from '@react-navigation/native';
function HomeScreen() {
  const navigation = useNavigation();
  return (
     
    <Container style={styles.container}>
       <ImageBackground 
        source={require('../media/Logo.png')} 
        style={styles.imgBackground}
      >
       <Button style={styles.Button} full rounded success onPress={() => navigation.navigate('LogIn')} >
            <Text>LogIn</Text>
      </Button>
      <Button style={styles.Button2} full rounded success onPress={() => navigation.navigate('SingUp')} >
          <Text>Signup</Text>
      </Button> 
      </ImageBackground>
    </Container>
  );
}
const styles = StyleSheet.create({
  container: {
    flex: 1,
    width:'100%',
    backgroundColor:'black'
  },

  Button:{
      width:'50%',
      borderColor:'#eee',
      backgroundColor:'#00aeef',
      borderBottomWidth:0,
      alignItems: 'center',
      position:'absolute',
      right:0,
      left:'25%',
      Button:0,
      top:380,
  },
  Button2:{
    width:'50%',
    borderColor:'#eee',
    borderBottomWidth:0,
    alignItems: 'center',
    position:'absolute',
    right:0,
    left:'25%',
    Button:0,
    top:430,
  },
  imgBackground: {
    width:'100%',
    height: '80%',
  },

});
export default HomeScreen;