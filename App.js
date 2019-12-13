import React, {Component} from 'react'
import { StyleSheet, View, TouchableOpacity, Image, Text, ScrollView} from 'react-native'

export default class App extends Component{
  render(){
    return(
      <View style={styles.container}>
        <TouchableOpacity style={styles.TouchableView}>
          <Image source={require('./assets/image/bg2.jpg')} resizeMode="stretch" style={{width: '100%', height: '100%', borderRadius: 10,}}></Image>
          <Image source={require('./assets/image/chip.png')} style={styles.img}></Image>
          <View style={styles.textView}>
            <Text style={styles.bankName}>My Bank</Text>
            <Text style={styles.num}>1234  5678  9876  5432</Text>
            <Text style={styles.numSub}>1234</Text>
            <Text style={styles.cardName}>MR.EMIN ZEYNALOV</Text>
          </View>
          <View style={styles.dateView}>
            <Text style={styles.dateViewMonth}>MONTH/YEAR</Text>
            <Text style={styles.dateViewDate}>12/99</Text>
            <Text style={styles.dateViewValid}>VALID</Text>
            <Text style={styles.dateViewThru}>THRU</Text>
          </View>
        </TouchableOpacity>
      </View>
    )
  }
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    justifyContent: 'center',
    alignItems: 'center',
  },
  TouchableView: {
    backgroundColor: '#fff',
    width: '95%',
    height: 250,
    borderRadius: 10,
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
    paddingLeft: 200,
    paddingTop: 12,
    fontWeight: 'bold',
    fontSize: 38,
    color: '#fff',
  },
  num: {
    fontFamily: "cred",
    paddingTop: 73,
    paddingLeft: 35,
    fontSize: 18,
    color: '#fff',
  },
  numSub: {
    fontFamily: "cred",
    paddingTop: 6,
    paddingLeft: 35,
    fontSize: 10,
    color: '#fff',
  },
  cardName: {
    fontFamily: "cred",
    fontSize: 25,
    color: '#fff',
    paddingTop: 22,
    paddingLeft: 35,
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
    position: 'absolute',
    marginTop: 15,
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