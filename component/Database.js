import React from "react";
import {Modal} from "react-native";
import { Container, Text,Button ,Item ,Input,Label} from 'native-base';
import { auth } from "./config";
import { Appbar } from "react-native-paper";
import { styles } from "../styles/styles";
import { DataTable } from "react-native-paper";
import firestore from '@react-native-firebase/firestore'
import FirebaseApp from "./config";
export default class Database extends React.Component {
  state = {
    arry:[
      {ID:0,Nom:'',Prenom:''}
    ],
    NewArryNom:'',
    NewArryPrenom:'',
    ShowModal : false,   
  }
  addItem = () => {
    // pour database de firestore
    firestore().collection("Database").add({
      nom:this.state.arry.map((item)=>{ 
        return (
          item.Nom
        )
      }),
      prenom:this.state.arry.map((item)=>{ 
        return (
          item.Prenom
        )
      }),
    })
    .then((user)=> {
      console.log(user.collection(user.id).doc().get());
      alert("tous les donnees sont envoyés a databas de firebase")
    })
    .catch((error)=>{
      console.log(error);
    })
    // pour database de realtime
    FirebaseApp.database().ref().push({
      nom: this.state.arry.map((item)=>{ 
        if (item.Nom !== ''){
          return (
            item.Nom
          )
        } 
        
      }),
      prenom: this.state.arry.map((item)=>{ 
        if (item.Prenom !== ''){
          return (
            item.Prenom
          )
        }
      })
    })
  };
  handleSubit = async () =>{
    const id = this.state.arry.length;
    const newNom = this.state.NewArryNom;
    const newPrenom = this.state.NewArryPrenom;
    const NewArry = {ID:id,Nom:newNom, Prenom:newPrenom};
    this.state.arry.push(NewArry);
    this.setState({ShowModal:false})
  }
  singOut= async ()=>{
    try {
      auth.signOut().then(()=>{
        this.props.navigation.navigate('Home')
      });
    }catch (error) {  
      console.log(error.toString(error));
    };
  };
  render(){
    return (
      <Container >
        <Appbar.Header style={styles.Appbar}>
          <Appbar.Content title="Database" />
          <Appbar.Action icon="power" onPress={()=> this.singOut()}/>
        </Appbar.Header>
        <Modal transparent={true} visible={this.state.ShowModal} >  
          <Container style={styles.ContrainerModel}>
            <Item floatingLabel style={styles.input1}>
              <Label>Nom</Label>
              <Input 
                autoCapitalize="none" 
                autoCorrect={false}
                //value={this.state.NewArryNom}
                onChangeText={nom => this.setState({NewArryNom: nom })} 
              />
            </Item>
            <Item floatingLabel style={styles.input2}>
              <Label>Prenom</Label>
              <Input 
                autoCapitalize="none" 
                autoCorrect={false}
                //value={this.state.NewArryPrenom}
                onChangeText={prenom => this.setState({NewArryPrenom: prenom })} 
              />
            </Item>
            <Button  full rounded success  style={styles.Button1Model} onPress={()=> this.setState({ShowModal:false})}>
              <Text style={{justifyContent: 'center'}}>cancel</Text>
            </Button> 
            <Button full rounded success  style={styles.Button2Model} onPress={()=> this.handleSubit()}>
              <Text style={{justifyContent: 'center'}}>create</Text>
            </Button> 
          </Container>
        </Modal>
        <DataTable>
          <DataTable.Header>
            <DataTable.Title>Nom</DataTable.Title>
            <DataTable.Title>prenom</DataTable.Title>
          </DataTable.Header>
          {this.state.arry.map((item)=>{if(item.Nom !== '' | item.Prenom !== ''){
            return(
              <DataTable.Row key={item.ID}>
                <DataTable.Cell>{item.Nom}</DataTable.Cell>
                <DataTable.Cell>{item.Prenom}</DataTable.Cell>
              </DataTable.Row>
            )
            }})
          }
        </DataTable>
        <Button full rounded success style={styles.Button_1} onPress={()=> this.setState({ShowModal:true})}>
          <Text style={{justifyContent: 'center'}}>add to data</Text>
        </Button> 
        <Button full rounded success style={styles.Button_2}>
          <Text style={{justifyContent:'center'}} onPress={()=> this.addItem()}>add data to firebase</Text>
        </Button>   
      </Container>
    );
  }
};
