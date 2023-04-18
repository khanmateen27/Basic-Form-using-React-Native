//    Video 12 ------------> Input Field in React Native

// import { useState } from "react";

// const { View, Text, TextInput, StyleSheet, Button } = require("react-native");

// function App (){
//   const [name , setName] = useState('');
//   return <View style={{flex : 1}}>
//     <Text style = {{marginTop : 20}}>
//       Text Input Field
//     </Text>
//     <Text>My Name is : {name}</Text>
//     <TextInput style={style.textInput} placeholder="Enter your Name" onChangeText={(text)=>setName(text)} value={name}/>
//     <Button title="Clear Input Field" onPress={()=>setName('')}/>
//   </View>
// }
// export default App

// const style = StyleSheet.create({
//   textInput : {
//     fontSize : 12 ,
//     borderColor : 'blue' ,
//     borderWidth : 2 ,
//     margin : 10 ,
//     padding : 5 
//   }
// })

//  Video 13 --------> Handling Multiple Forms in React - Native
const { View, Text, TextInput, StyleSheet, Button } = require("react-native");
import { useState } from "react";

function App () {

  //Different States which are being used!
  let[name , setName] = useState('');
  let[password , setPassword] = useState('');
  let[email , setEmail] = useState('');
  let[display , setDisplay] = useState(false)

  //onClick Reset Button Function
  function resetForm(){
    setDisplay(false)
    setName('')
    setPassword('')
    setEmail('')
  }

  return <View style={{marginTop : 50 , flex: 1}}>
    <Text style = {{fontSize : 20 , textAlign : 'center'}}>
      Handling Multiple Input Tags
    </Text>
    <TextInput style={style.inputText} placeholder="Enter your UserName" value={name} onChangeText={(text)=>setName(text)}/>
    <TextInput style={style.inputText} placeholder="Enter your Password" value={password} onChangeText={(text) => setPassword(text)} secureTextEntry={true}/>
    <TextInput style={style.inputText} placeholder="Enter your Email" value={email} onChangeText={(text) => setEmail(text)}/>

    {/* Buttons */}
      <View style = {{marginBottom : 20 , marginTop : 20}}>
        <Button title="Add Details" color="black" onPress={()=>setDisplay(true)}/>
      </View>
      <Button title="Clear Details" color="blue" onPress={resetForm}/>
      <View>
          {display ?
          <View>
            <Text style={{fontSize: 15}}>UserName is : {name}</Text>
            <Text style={{fontSize: 15}}>Password is : {password}</Text>
            <Text style={{fontSize: 15}}>Email is : {email}</Text>
          </View>
          : null}
      </View>
  </View>
}

export default App

const style = StyleSheet.create({
  inputText : {
    fontSize : 16 ,
    borderWidth : 2 ,
    borderColor : 'blue' ,
    margin : 10 , 
    padding : 10
  }
})