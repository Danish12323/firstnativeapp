import React, { useState } from 'react';
import {Text, View, StyleSheet, Button, TouchableWithoutFeedback,Pressable} from 'react-native';

const array = [['', '', ''],['', '', ''],['', '', '']];

export default function App() {
  const [getBtnTxt1, setBtnTxt1] = useState('-');
  const [getBtnTxt2, setBtnTxt2] = useState('-');
  const [getBtnTxt3, setBtnTxt3] = useState('-');
  const [getBtnTxt4, setBtnTxt4] = useState('-');
  const [getBtnTxt5, setBtnTxt5] = useState('-');
  const [getBtnTxt6, setBtnTxt6] = useState('-');
  const [getBtnTxt7, setBtnTxt7] = useState('-');
  const [getBtnTxt8, setBtnTxt8] = useState('-');
  const [getBtnTxt9, setBtnTxt9] = useState('-');
  const [getResult, setResult] = useState('');
  const [getTurn, setTurn] = useState('p1');

  const onClick = (id) => {
    if (getTurn == 'p1') {
      if (id == 1 && getBtnTxt1 == '-') {
        setBtnTxt1('X');
        array[0][0] = 'X';
      }
      if (id == 2 && getBtnTxt2 == '-') {
        setBtnTxt2('X');
        array[0][1] = 'X';
      }
      if (id == 3 && getBtnTxt3 == '-') {
        setBtnTxt3('X');
        array[0][2] = 'X';
      }
      if (id == 4 && getBtnTxt4 == '-') {
        setBtnTxt4('X');
        array[1][0] = 'X';
      }
      if (id == 5 && getBtnTxt5 == '-') {
        setBtnTxt5('X');
        array[1][1] = 'X';
      }
      if (id == 6 && getBtnTxt6 == '-') {
        setBtnTxt6('X');
        array[1][2] = 'X';
      }
      if (id == 7 && getBtnTxt7 == '-') {
        setBtnTxt7('X');
        array[2][0] = 'X';
      }
      if (id == 8 && getBtnTxt8 == '-') {
        setBtnTxt8('X');
        array[2][1] = 'X';
      }
      if (id == 9 && getBtnTxt9 == '-') {
        setBtnTxt9('X');
        array[2][2] = 'X';
      }
      setTurn('p2');
    } else if (getTurn == 'p2') {
      if (id == 1 && getBtnTxt1 == '-') {
        setBtnTxt1('O');
        array[0][0] = 'O';
      }
      if (id == 2 && getBtnTxt2 == '-') {
        setBtnTxt2('O');
        array[0][1] = 'O';
      }
      if (id == 3 && getBtnTxt3 == '-') {
        setBtnTxt3('O');
        array[0][2] = 'O';
      }
      if (id == 4 && getBtnTxt4 == '-') {
        setBtnTxt4('O');
        array[1][0] = 'O';
      }
      if (id == 5 && getBtnTxt5 == '-') {
        setBtnTxt5('O');
        array[1][1] = 'O';
      }
      if (id == 6 && getBtnTxt6 == '-') {
        setBtnTxt6('O');
        array[1][2] = 'O';
      }
      if (id == 7 && getBtnTxt7 == '-') {
        setBtnTxt7('O');
        array[2][0] = 'O';
      }
      if (id == 8 && getBtnTxt8 == '-') {
        setBtnTxt8('O');
        array[2][1] = 'O';
      }
      if (id == 9 && getBtnTxt9 == '-') {
        setBtnTxt9('O');
        array[2][2] = 'O';
      }
      setTurn('p1');
    }
    console.log(array);
    result();
  };
  const result = () => {
    if (
      (array[0][0] === 'X' && array[0][1] === 'X' && array[0][2] === 'X') ||
      (array[0][0] === 'X' && array[1][1] === 'X' && array[2][2] === 'X') ||
      (array[0][0] === 'X' && array[1][0] === 'X' && array[2][0] === 'X') ||
      (array[0][1] === 'X' && array[1][1] === 'X' && array[2][1] === 'X') ||
      (array[0][2] === 'X' && array[1][2] === 'X' && array[2][2] === 'X') ||
      (array[0][2] === 'X' && array[1][1] === 'X' && array[2][0] === 'X') ||
      (array[0][2] === 'X' && array[1][1] === 'X' && array[2][0] === 'X') ||
      (array[1][0] === 'X' && array[1][1] === 'X' && array[1][2] === 'X') ||
      (array[2][0] === 'X' && array[2][1] === 'X' && array[2][2] === 'X')
    ) {
      setTurn('')
      setResult('PLAYER 1(X) HAS WON!');
    } else if (
      (array[0][0] === 'O' && array[0][1] === 'O' && array[0][2] === 'O') ||
      (array[0][0] === 'O' && array[1][1] === 'O' && array[2][2] === 'O') ||
      (array[0][0] === 'O' && array[1][0] === 'O' && array[2][0] === 'O') ||
      (array[0][1] === 'O' && array[1][1] === 'O' && array[2][1] === 'O') ||
      (array[0][2] === 'O' && array[1][2] === 'O' && array[2][2] === 'O') ||
      (array[0][2] === 'O' && array[1][1] === 'O' && array[2][0] === 'O') ||
      (array[0][2] === 'O' && array[1][1] === 'O' && array[2][0] === 'O') ||
      (array[1][0] === 'O' && array[1][1] === 'O' && array[1][2] === 'O') ||
      (array[2][0] === 'O' && array[2][1] === 'O' && array[2][2] === 'O')
    ) {
      setTurn('')
      setResult('PLAYER 2(O) HAS WON!');
    } else if (
      array[0][0] !== '' &&
      array[0][1] !== '' &&
      array[0][2] !== '' &&
      array[1][0] !== '' &&
      array[1][1] !== '' &&
      array[1][2] !== '' &&
      array[2][0] !== '' &&
      array[2][1] !== '' &&
      array[2][2] !== ''
    ) {
      setTurn('')
      setResult('DRAW!');
    }
  };

  const play = () => {
    setBtnTxt1('-'),setBtnTxt2('-'),setBtnTxt3('-'),setBtnTxt4('-'),setBtnTxt5('-'),setBtnTxt6('-'),setBtnTxt7('-'),setBtnTxt8('-'),setBtnTxt9('-');
    array[0][0]= '', array[0][1]= '', array[0][2]= '', array[1][0]= '', array[1][1]= '', array[1][2]= '', array[2][0]= '', array[2][1]= '', array[2][2] = '';
    setResult('');
    setTurn('p1');
  };


  return (
    <View style={styles.container}>
    <View style={[{ padding: '10%', alignItems: 'center' }]}>
        <Text style={[{  fontSize: '25', justifyContent: 'center' }]}/>
        TURN : {getResult == '' ? (getTurn==('p1') ? 'PLAYER 1 (X)' : 'PLAYER 2 (O)') : ''}
        <Text />
      </View>
      <View style={styles.viewRowContainer}>
        <Pressable onPress={() => onClick(1)} style={[{backgroundColor:'#eee'}]}>
          <View style={styles.buttonContainer}>
            <Text style={styles.buttonText}>
              {getBtnTxt1}
            </Text>
          </View>
        </Pressable>
        <Pressable onPress={() => onClick(2)}>
          <View style={styles.buttonContainer}>
            <Text style={styles.buttonText}>
              {getBtnTxt2}
            </Text>
          </View>
        </Pressable>
        <Pressable onPress={() => onClick(3)}>
          <View style={styles.buttonContainer}>
            <Text style={styles.buttonText}>
              {getBtnTxt3}
            </Text>
          </View>
        </Pressable>
      </View>
      <View style={styles.viewRowContainer}>
        <Pressable onPress={() => onClick(4)}>
          <View style={styles.buttonContainer}>
            <Text style={styles.buttonText}>
              {getBtnTxt4}
            </Text>
          </View>
        </Pressable>
        <Pressable onPress={() => onClick(5)}>
          <View style={styles.buttonContainer}>
            <Text style={styles.buttonText}>
              {getBtnTxt5}
            </Text>
          </View>
        </Pressable>
        <Pressable onPress={() => onClick(6)}>
          <View style={styles.buttonContainer}>
            <Text style={styles.buttonText}>
              {getBtnTxt6}
            </Text>
          </View>
        </Pressable>
      </View>
      <View style={styles.viewRowContainer}>
        <Pressable onPress={() => onClick(7)}>
          <View style={styles.buttonContainer}>
            <Text style={styles.buttonText}>
              {getBtnTxt7}
            </Text>
          </View>
        </Pressable>
        <Pressable onPress={() => onClick(8)}>
          <View style={styles.buttonContainer}>
            <Text style={styles.buttonText}>
              {getBtnTxt8}
            </Text>
          </View >
        </Pressable>
        <Pressable onPress={() => onClick(9)}>
          <View style={styles.buttonContainer}>
            <Text style={styles.buttonText}>
              {getBtnTxt9}
            </Text>
          </View>
        </Pressable>
      </View>
      <View style={[{ alignItems: 'center' }]}>
        <Text style={[{ padding: '10%', fontSize: '25', justifyContent: 'center' }]}/>
        {getResult}
        <Text />
      </View>
      <View style={[{ padding: '10%', fontSize: '25' }]}>
        <Button onPress={play} title={'Play Again'} />
      </View>
      <Pressable onPress={()=>{
alert('hello');
      }}>
      <Text>Helo click</Text>
      
      </Pressable>
    </View>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    justifyContent: 'center',
    backgroundColor: '#ecf0f1 ',
    padding: 8,
  },
  viewRowContainer: { flexDirection: 'row', justifyContent: "space-between" },
  buttonText: { fontSize: 50 },
  buttonContainer: { width: '100%', height: 100, borderColor: 'black', borderWidth: 1, justifyContent: 'center', alignItems: 'center' },
});