import React,{useEffect, useState } from 'react';
import { Container, Item, Form, Input, Button, Label,Text } from "native-base";
import { styles } from '../styles/styles';
import { auth } from './config';
import {signInWithEmailAndPassword} from "firebase/auth"
import {useNavigation} from '@react-navigation/native';

export default  LogIn =  () => {

  const navigation = useNavigation();
  const[email,setEmail]=useState('')
  const[password,setPassword]=useState('')

  const cancelCourse =  () => { 
    setEmail(""); 
    setPassword(""); 
  } 
  const Login =  () => {
    try {
      signInWithEmailAndPassword(auth,email, password)
      .then(user => {
        console.log(user.user.email);
          if(user){
            navigation.navigate("Database")
          }
        },
        function(error){
          console.log(error.toString(error))
          alert('\nvotre mot de passe ou mail incorrect. veuillez le vérifier')
        });
      }catch (error) {  
      console.log(error.toString(error));
      }
      cancelCourse();
    }; 
  return (
    <Container style={styles.container}>
      <Form>
        <Item floatingLabel>
          <Label style={styles.label}>Email</Label>
          <Input 
            autoCapitalize="none" 
            autoCorrect={false}
            value={email}
            onChangeText={email => setEmail(email)} 
          />
        </Item>
        <Item floatingLabel>
          <Label style={styles.label}>Password</Label>
          <Input
            secureTextEntry={true}
            autoCapitalize="none"
            autoCorrect={false}
            value={password}
            onChangeText={password => setPassword(password)}   
          />
        </Item>
        <Button style={styles.Button} full rounded success onPress={() => Login()}>
          <Text>Login</Text>
        </Button>
      </Form>
    </Container>
  
  );
};
