import { StyleSheet, Text, View } from 'react-native'
import React from 'react'
import { Input, Button } from 'react-native-elements'
import { useState } from 'react'
import { createUserWithEmailAndPassword } from 'firebase/auth';
import { authentication } from '../firebase/firebaseconfig';


export default function Register() {

   const [email, setEmail ]= useState('');
   const [password, setPassword ]= useState('');
   const [username, setUsername ]= useState('');
   const [avatar, setAvatar ]= useState('');

  const registerUser = async () => {
      await createUserWithEmailAndPassword(authentication, email,password).then((userCredentials)=>{
        console.log(userCredentials)
        console.log('just registered a user  ')
      }) 
      
  }

  return (
    <View style = {styles.container}>
      <Input 
      placeholder='Enter your Email'  
      value ={email} 
      onChangeText={text => setEmail(text)} 
      label='Email' 
      leftIcon={{type:'material', name:'email'}}
      />

      <Input 
      placeholder='Enter your Password' 
      value ={password} 
      onChangeText={text => setPassword(text)}
      label='Password' 
      leftIcon={{type:'material', name:'lock'}} secureTextEntry 
      />

      <Input placeholder='Enter your Username'  
      value ={username} 
      onChangeText={text => setUsername(text)} 
      label='Username' 
      leftIcon={{type:'material', name:'account-circle'}}
      />

      <Input placeholder='Enter Avatar Url'  
      value ={avatar} 
      onChangeText={text => setAvatar(text)} 
      label='Avatar Url' 
      leftIcon={{type:'material', name:'link'}}
      />

      
      <Button title='Register' onPress={registerUser}style={styles.btn}/>

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