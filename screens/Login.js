import { StyleSheet, Text, View } from 'react-native'
import React from 'react'
import { Input, Button } from 'react-native-elements'
import { useState } from 'react'
import { signInWithEmailAndPassword } from 'firebase/auth';
import { authentication } from '../firebase/firebaseconfig';

export default function Login( {navigation}) {

  const [email, setEmail ]= useState('');
  const [password, setPassword ]= useState('');

  const loginUser = async () => {
    await signInWithEmailAndPassword(authentication,email,password).then(()=> console.log('user logged in'))
  }

  return (
    <View style = {styles.container}>
      <Input placeholder='Enter your Email'  value ={email} onChangeText={text => setEmail(text)} label='Email' leftIcon={{type:'material', name:'email'}}/>
      <Input placeholder='Enter your Password' value ={password} onChangeText={text => setPassword(text)}label='Password' leftIcon={{type:'material', name:'lock'}} secureTextEntry />
      <Button  title='Login' onPress={loginUser} style={styles.btn}/>
      <Button onPress={() => navigation.navigate('Register')} title='Register' style={styles.btn}/>

    </View>
  )
}

const styles = StyleSheet.create({
  container:{
    flex:1,
    
  },
  btn:{
    marginTop:10,
  }
})