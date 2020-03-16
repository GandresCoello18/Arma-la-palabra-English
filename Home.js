import React from 'react';
import {
    StyleSheet, View, Text,
    ImageBackground, TextInput, Alert, AsyncStorage
  } from 'react-native';

class Home extends React.Component {
    state = {
      user: ''
    }
  
    click = () => {
      if(this.state.user == ''){
        Alert.alert('Escribe tu nombre de usuario para continuar');
      }else{
        AsyncStorage.setItem('user', this.state.user);
        this.props.navigation.navigate('Juego');
      }
    }
  
    user = (text) => {
      this.setState({
        user: text
      });
    }
  
    render(){
      return (
        <>
          <ImageBackground source={require('./static/principal.jpg')} style={styles.fondo}>
            <View style={styles.head}>
              <Text style={styles.titulo}>Arm The Word</Text>
            </View>
            <View style={styles.principal}>
              <TextInput style={styles.campo} onChangeText={this.user} placeholder='Ingrese Usuario...'/>
              <Text style={styles.btn} onPress={this.click}>Empezar</Text>
            </View>
          </ImageBackground>
        </>
      );
    }
  };
  
  const styles = StyleSheet.create({
    fondo:{
      width: '100%',
      height: '100%'
    },
    titulo:{
      color: 'white',
      fontSize: 40,
      textAlign: 'center',
      top: 60
    },
    head:{
      backgroundColor: 'rgba(0,0,0,0.7)',
      height: 110
    },  
    principal:{
      flex: 1,
      justifyContent: 'center',
      backgroundColor: 'rgba(0,0,0,0.7)'
    },
    campo:{
      height: 50,
      width: '80%',
      borderColor: 'white',
      borderRadius: 50,
      borderWidth: 4,
      left: 40,
      color: 'white',
      textAlign: 'center',
      fontSize: 25
    },
    btn:{
      fontSize: 30,
      color: 'white',
      width: '60%',
      fontWeight: 'bold',
      textAlign: 'center',
      borderStyle: "solid",
      borderRadius: 50,
      backgroundColor: 'rgb(170, 170, 170)',
      left: 80,
      top: 30,
      borderColor: 'white',
      borderWidth: 4,
      paddingVertical: 10,
      paddingHorizontal: 0
    }
  });
  
export default Home;