import React from 'react';
import { Container, Item, Form, Input, Button, Label,Text } from "native-base";
import { styles } from '../styles/styles';
import { auth } from './config';
import {createUserWithEmailAndPassword} from "firebase/auth"
export default class SingUp extends React.Component {
  
  state = {
    email: "",
    password: ""
  };

  cancelCourse =  () => { 
      this.setState({email: "" }); 
      this.setState({password: "" }); 
  }

  Signup =  (email, password) => {
    const regemail = /^\w+([\.-]?\w+)*@\w+([\.-]?\w+)*(\.\w{2,3})+$/;
    try {
      if(password.length<6){
        alert("veuillez saisir au moins 6 caractères de mots de passe");
      }
      else if(regemail.test(email) != true){
        alert("veuillez saisir un mail valide ");
      }
      createUserWithEmailAndPassword(auth,email, password)
      .then(
        user => { 
          console.log(user);
          alert("\nvotre inscription a bien été enregistrée veuillez vous connecter");
        },
        function(error){
          if(regemail.test(email) === true){
            console.log(error)
            alert('\nun compte et déjà existant avec cette email veuillez le vérifier')
          }
        }
      );
    }catch (error) {
      console.log(error.toString(error));
    }
    this.cancelCourse();
  };

  render(){
    return (
      <Container style={styles.container}>
        <Form>
          <Item floatingLabel>
            <Label style={styles.label}>Email</Label>
            <Input 
              autoCapitalize="none" 
              autoCorrect={false}
              value={this.state.email}
              onChangeText={email => this.setState({ email })} 
            />
          </Item>
          <Item floatingLabel>
            <Label style={styles.label}>Password</Label>
            <Input
              secureTextEntry={true}
              autoCapitalize="none"
              autoCorrect={false}
              value={this.state.password}
              onChangeText={password => this.setState({ password })} 
            />
          </Item>
          <Button style={styles.Button2} full rounded success onPress={() => this.Signup(this.state.email, this.state.password)} >
            <Text>Signup</Text>
          </Button> 
        </Form>
      </Container>
    );
  }
};
