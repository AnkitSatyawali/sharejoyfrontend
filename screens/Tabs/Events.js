import React from 'react';
import {StyleSheet, TouchableOpacity, TouchableHighlight, Text, View, Image } from 'react-native';
import MapView from 'react-native-maps';
import axios from 'axios';
import Icon from 'react-native-vector-icons/MaterialCommunityIcons';
import { createTabNavigator } from 'react-navigation';
import ActionButton from 'react-native-action-button';
import { Font } from 'expo';
import { Col, Grid, Row } from "react-native-easy-grid";








export default class Event extends React.Component {
  constructor(){
    super();
  
    this.state = {
        ready: false,
        error: null,
        longitude:0,
        latitude:0,
        
    }
    

}



state = {
  fontLoaded: false,
  events:[],
};

async componentDidMount(){

   await Font.loadAsync({
      'PlayfairDisplay-Regular': require('../../assets/fonts/EnGarde11.ttf'),
    });
    
    this.setState({fontLoaded:true});
 

    axios.get('http://192.168.43.136:3000/events/all/'+global.ID,{
            headers: {
                'Content-Type': 'application/json'
            }
        }).then(response => {
             this.setState({events:response.data})
              console.log(this.state.events);
              
           // console.log(response);
        }).catch(error => {
            console.log(error);
        }) 


}



  static navigationOptions = {
    tabBarIcon: ({ tintColor }) => (
      <Icon size={25} name="cake-variant" style={{ color: tintColor }} />
    ),
  }

  render() {
    return (
      <View style={{flex:1, backgroundColor: '#f3f3f3'}}>
     

        <View>
    <Grid style={{ top: 80 }} >
      <Row style={styles.card}>
        <Col size={1}>
          <TouchableHighlight
            style={[styles.profileImgContainer, { borderColor: 'green', borderWidth: 1 }]}
          >
            <Image source={require("../../images/intro2.png")} style={styles.profileImg} />
          </TouchableHighlight></Col>
        <Col style={{ left: 20 }} size={2}>

          <Image source={require('../../images/intro2.png')} style={{ height: 75, width: "100%", bottom: 50 }} />
        {  this.state.fontLoaded ? (<Text style={{bottom:40,fontFamily:'PlayfairDisplay-Regular'}}>Anjali Birthday Party</Text>) : null }
        {  this.state.fontLoaded ? (  <Text style={{bottom:40,fontFamily:'PlayfairDisplay-Regular'}}>Start at 9 pm</Text>) : null }
        {  this.state.fontLoaded ? (<Text style={{bottom:40,fontFamily:'PlayfairDisplay-Regular'}}>At Event Place Jaipur</Text> ) : null }
        </Col>


        <Col size={1}>
        <Text style={{ fontWeight: 'bold',marginTop:40, color: 'red', textAlign:'center',alignItems:'center',fontSize: 12, textAlign: 'center', flexWrap: 'wrap' }}>
             31 December

              </Text>
          <Text style={{ fontSize: 10, textAlign: "center" }}>Sunday</Text>
        </Col>
      </Row>
      </Grid>
      <Grid style={{ top: 300 }}>
      <Row style={styles.card} >
        <Col size={1}>
          <TouchableHighlight
            style={[styles.profileImgContainer, { borderColor: 'green', borderWidth: 1 }]}
          >
            <Image source={require("../../assets/gift.png")} style={styles.profileImg} />
          </TouchableHighlight></Col>
        <Col style={{ left: 20 }} size={2}>

          <Image source={require('../../images/wedding.png')} style={{ height: 75, width: "100%", bottom: 50 }} />
          {  this.state.fontLoaded ? ( <Text style={{bottom:40,fontFamily:'PlayfairDisplay-Regular'}}>Anjali Birthday Party</Text>) : null }
          {  this.state.fontLoaded ? (<Text style={{bottom:40,fontFamily:'PlayfairDisplay-Regular'}}>Start at 9 pm</Text>) : null }
            {  this.state.fontLoaded ? ( <Text style={{bottom:40,fontFamily:'PlayfairDisplay-Regular'}}>At Event Place Jaipur</Text>) : null }
        </Col>
        <Col  size={1}>
          <Text style={{ fontWeight: 'bold',marginTop:40, color: 'red', textAlign:'center',alignItems:'center',fontSize: 12, textAlign: 'center', flexWrap: 'wrap' }}>
            31 December
              </Text>
          <Text style={{ fontSize: 10, textAlign: "center",justifyContent:'center' }}>Sunday</Text>
        </Col>
      </Row>

     
    </Grid>
    </View>
  




{/* Rest of the app comes ABOVE the action button component !*/}
<ActionButton buttonColor="rgba(231,76,60,1)">
  <ActionButton.Item buttonColor='#9b59b6' title="Host Event" onPress={() => this.props.navigation.navigate('CreateEventScreen')}>
    <Icon size={29} name="food-fork-drink" style={styles.actionButtonIcon} />
  </ActionButton.Item>
  <ActionButton.Item buttonColor='#3498db' title="Your Contacts" onPress={() => {}}>
    <Icon name="account-box-multiple"  style={styles.actionButtonIcon} />
  </ActionButton.Item>
  <ActionButton.Item buttonColor='#1abc9c' title="Scan to receive invit" onPress={() => {}}>
    <Icon name="qrcode-scan" style={styles.actionButtonIcon} />
  </ActionButton.Item>
</ActionButton>
</View>


    );
  }
}

const styles= StyleSheet.create({
 container:{
   position:'absolute',
   top:0,
   left:0,
   bottom:0,
   right:0,
   justifyContent:'flex-end',
   alignItems:'center'
 },

 map:{
  position:'absolute',
  top:0,
  left:0,
  bottom:0,
  right:0,
 },

 actionButtonIcon: {
  fontSize: 20,
  height: 22,
  color: 'white',
},

card:
{
  top: 10,
  marginHorizontal: 2,
  backgroundColor: 'white',
  shadowColor: "#000000",
 marginLeft:"2%",
  width:'96%',
  height:150,
  shadowColor: "#000",
  shadowOffset: {
    width: 0,
    height: 5,
  },
  shadowOpacity: 0.36,
  shadowRadius: 6.68,
  
  elevation: 11,
  borderRadius:10
},
profileImgContainer: {
  marginLeft: 8,
  height: 50,
  width: 50,
  borderRadius: 25,
  top:10
},
profileImg: {
  height: 48,
  width: 48,
  borderRadius: 25,
},




})