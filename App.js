import React,{Component} from 'react';
import { Alert ,TouchableOpacity,StyleSheet, View, TextInput, Text, StatusBar, Image } from 'react-native';

class CircleArea extends Component{
  constructor(props) {
    super(props);
    this.state = { text: '' };
  }
  
  _simpleAlertHandler=()=>{
    let a=this.state.text;
    let b=a*a*3.14;
    if(String(b)!='NaN'){
    Alert.alert(
      'Ответ:',
      String(b)+' чего-то²',
      [{text:'Океюшки',onPress:()=>console.log=('pressed')}],
      {cancelable:false});
    }
    else Alert.alert('Атата',"По-моему вы ввели не число :/");    
  }

  render() {
    return (     
      <View style={styles.container}>
        <StatusBar backgroundColor='#472D55' barStyle='light-content'/>
        <Image style={{width:130,height:130}} source={{uri:'https://www.clipartmax.com/png/full/202-2020762_big-image-circle.png'}}/>
        <Text style={styles.textblock}>Площадь круга вычисляется по формуле: S = π · R². Введите радиус окружности:</Text>
      <TextInput style={styles.inputblock}
      placeholderTextColor='#3B0103'
      placeholder='Введите радиус окружности'
      onChangeText={(text) => this.setState({text})}
      value={this.state.text}/>
      <TouchableOpacity style={styles.button} onPress={this._simpleAlertHandler}><Text style={styles.buttontext}>Рассчитать</Text></TouchableOpacity>
  </View>
    );
  }
};

const styles=StyleSheet.create({
  container:{
    backgroundColor:'#933F41',
    flex:1,
    alignItems:'center',
    justifyContent:'center'
  },
  textblock:{
    marginTop:15,
    color:'#DEA8A9',
    fontSize:15,
    marginHorizontal:25
  },
  inputblock:{
    width:300,
    height:45,
    backgroundColor:'rgba(255,255,255,0.4)',
    marginTop:20,
    marginBottom:20,
    borderRadius:20,
    paddingHorizontal:15,
    color:'#fff'
  },
  button:{
    width:200,
    borderRadius:20,
    backgroundColor:'#fff',
    marginVertical:10,paddingVertical:12
  },
  buttontext:{
    fontSize:15,
    fontWeight:'500',
    color:'#3B0103',
    textAlign:'center'
  }
});
export default CircleArea;