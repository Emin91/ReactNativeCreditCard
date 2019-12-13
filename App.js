import React, {Component} from 'react'
import { StyleSheet, View, Image, Text, TouchableWithoutFeedback, Animated, TextInput, ScrollView} from 'react-native'
import TextInputMask from 'react-native-text-input-mask'

export default class App extends Component{

  constructor(props){
    super(props)
    this.state = {
      animatePress: new Animated.Value(1),
      value: ""
    }
    this.handleChangeText = this.handleChangeText.bind(this)
  }

  handleChangeText(newText) {
    this.setState({
      value: newText
    })
    console.log('Value is' + this.state.value)
  }

  animateIn(){
    Animated.timing(this.state.animatePress,{
      toValue:0.98,
      duration:100,
    }).start()
  }
  animateOut(){
    Animated.timing(this.state.animatePress,{
      toValue:1,
      duration:200,
    }).start()
  }
  render(){
    return(
      <View style={styles.container}>
        <View style={{flex: 2, backgroundColor: '#141414', justifyContent: 'center', alignItems: 'center',}}>
        <TouchableWithoutFeedback 
          onPressIn={()=>this.animateIn()}
          onPressOut={()=>this.animateOut()}
          style={styles.TouchableView}>
          <Animated.View style={{backgroundColor: '#456987', width: '95%', height: 250, borderRadius: 18,
            transform: [
              {
                scale:this.state.animatePress
              }
            ]}}>
          <Image source={require('./assets/image/bg2.jpg')} resizeMode="stretch" style={{width: '100%', height: '100%', borderRadius: 8,}}></Image>
          <Image source={require('./assets/image/chip.png')} style={styles.img}></Image>
          <View style={styles.textView}>
          <TextInputMask 
              style={styles.bankName}
              placeholder={'My Bank Name'}
              placeholderTextColor={'#fff'}
              autoCapitalize={'words'}
              autoCorrect={false}
              maxLength={16}
          ></TextInputMask>
          <TextInputMask 
              style={styles.num}
              placeholder={'1234  5678  9876  5432'}
              placeholderTextColor={'#fff'}
              refInput={ref => { this.input = ref }}
              keyboardType="numeric"
              onChangeText={this.handleChangeText}
              mask={"[0000]  [0000]  [0000]  [0000]"}
            ></TextInputMask>
            <TextInputMask
              style={styles.numSub}
              placeholder={'1234'}
              placeholderTextColor={'#fff'}
              keyboardType="numeric"
              maxLength={4}
              >{this.state.value}
              </TextInputMask>
            <TextInputMask 
              style={styles.cardName}
              placeholder={'EMIN ZEYNALOV'}
              placeholderTextColor={'#fff'}
              autoCapitalize={'characters'}
              maxLength={22}
              ></TextInputMask>
          </View>
          <View style={styles.dateView}>
            <Text style={styles.dateViewMonth}>MONTH/YEAR</Text>
            <TextInputMask
              style={styles.dateViewDate}
              placeholder={'12/99'}
              placeholderTextColor={'#fff'}
              maxLength={5}
              keyboardType="numeric"
              mask={"[00]/[00]"}
              ></TextInputMask>
            <Text style={styles.dateViewValid}>VALID</Text>
            <Text style={styles.dateViewThru}>THRU</Text>
          </View>
          </Animated.View>
        </TouchableWithoutFeedback>
        </View>
      </View>
    )
  }
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
  },
  TouchableView: {
    backgroundColor: '#fff',
    width: '95%',
    height: 250,
    borderRadius: 18,
    shadowColor: '#000',
    shadowOffset: {
      width: 0,
      height: 1,
    },
    shadowRadius: 2.22,
    shadowOpacity: 0.8,
    elevation: 5,
  },
  img: {
    position: 'absolute',
    resizeMode: 'stretch',
    width: 66,
    height: 55,
    marginLeft: 35,
    marginTop: 65,
  },
  bankName: {
    textAlign: 'right',
    marginLeft: 20,
    marginRight: 1,
    fontWeight: 'bold',
    fontSize: 38,
    color: '#fff',
  },
  num: {
    fontFamily: "cred",
    marginTop: 50,
    marginLeft: 35,
    fontSize: 18,
    color: '#fff',
  },
  numSub: {
    fontFamily: "cred",
    marginTop: -30,
    marginLeft: 35,
    fontSize: 10,
    color: '#fff',
  },
  cardName: {
    textTransform: 'uppercase',
    fontFamily: "cred",
    fontSize: 25,
    color: '#fff',
    marginTop: 5,
    marginLeft: 35,
  },
  textView: {
    position: 'absolute',
    width: '90%',
    height: 250,
    borderRadius: 10,
  },

  
  dateView: {
    position: 'absolute',
    width: 115,
    height: 40,
    marginTop: 165,
    marginLeft: 122,
  },
  dateViewMonth: {
    marginLeft: 50,
    marginTop: 3,
    fontSize: 7,
    color: '#fff',
  },
  dateViewDate: {
    width: 90,
    position: 'absolute',
    marginLeft: 45,
    fontSize: 15,
    color: '#fff',
    fontFamily: "cred",
  },
  dateViewValid: {
    position: 'absolute',
    marginTop: 12,   
    marginLeft: 16,
    fontSize: 8,
    color: '#fff'
  },
  dateViewThru: {
    position: 'absolute',
    marginTop: 20,
    marginLeft: 16,
    fontSize: 8,
    color: '#fff'
  },
})