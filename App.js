import { StatusBar } from 'expo-status-bar';
import React, { useState } from 'react';
import { StyleSheet, Text, View, Button } from 'react-native';

export default function App() {
  const randomnum=()=>{
    var num= Math.floor(Math.random() *100);
    ;
    return num;
  }
  const [getText, setText] = useState("")
  const [getguess,message]=useState("")
  const[actguess,mes]=useState(randomnum())
  const[roundno,setround]=useState(0)

  console.log(actguess);
  const buttonClick = (txt) => {
    // alert(txt)
    setText(getText +txt)
  }
  const resetBtn = (txt) => {
    // alert(txt)
    setText("")
    message("")  
  }
   const checkguess=()=>{
     setround(roundno+1);
    if(getText==actguess){
      message("Guess is correct");
    }
    else{
      message("Guess is incorrect");
    }
  }
  
  return (
    <View style={styles.container}>
      
      <Text style={{ fontSize: 20 }}>Guess game by Danish Ali</Text>

      <Text style={{ fontSize: 20 }}>{getText}</Text>
      
      
      <Text style={{ fontSize: 20 }}>{getguess}</Text>
      
      
      
      <Text style={{ fontSize: 20 }}>{roundno}</Text>
      
      
     <View style={inputbutton.btn}>  
    <View style={inputbutton.btnspace}>
      <Button title= "0" onPress={buttonClick.bind(this, 0)}> </Button>
      </View>
    <View style={inputbutton.btnspace}>
      <Button title="1"  onPress={buttonClick.bind(this, 1)}> </Button> 
       </View> 
    <View style={inputbutton.btnspace}>
      <Button title="2" onPress={buttonClick.bind(this, 2)}> </Button>
      </View>
     </View>

     <View style={inputbutton.btn}>  
    <View style={inputbutton.btnspace}>
      <Button title= "3" onPress={buttonClick.bind(this, 3)}> </Button>
      </View>
    <View style={inputbutton.btnspace}>
      <Button title="4"  onPress={buttonClick.bind(this, 4)}> </Button> 
       </View> 
    <View style={inputbutton.btnspace}>
      <Button title="5" onPress={buttonClick.bind(this, 5)}> </Button>
      </View>
     </View>
      
     <View style={inputbutton.btn}>  
    <View style={inputbutton.btnspace}>
      <Button title= "6" onPress={buttonClick.bind(this, 6)}> </Button>
      </View>
    <View style={inputbutton.btnspace}>
      <Button title="7"  onPress={buttonClick.bind(this, 7)}> </Button> 
       </View> 
    <View style={inputbutton.btnspace}>
      <Button title="8" onPress={buttonClick.bind(this, 8)}> </Button>
      </View>
     </View>
       
    <View style={inputbutton.btn}>  
      
      <View style={inputbutton.btnspace}>
      <Button title="9"  onPress={buttonClick.bind(this, 9)}> </Button> 
       </View> 
      
      <View style={inputbutton.btnspace}>
      <Button title="ENTER" onPress={checkguess.bind(this)}> </Button>
      </View>
      <View style={inputbutton.btnspace}>
      <Button title="RESET" onPress={resetBtn.bind(this,0)}> </Button>
      </View>

      </View> 

    </View>
  );
}

const inputbutton = StyleSheet.create({
  btn:{
    flexDirection: 'row',
    marginBottom: 15, 
  },
  btnspace:{
    marginRight: 15, 
    width: 90,
  }
});

const styles = StyleSheet.create({
    container: {
      flex:1,      
      backgroundColor: 'pink',
      alignItems: 'center',
      justifyContent: 'center',
    },
    
});