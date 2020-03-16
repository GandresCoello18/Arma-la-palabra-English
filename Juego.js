import React from 'react';
import { View, Text, StyleSheet, ImageBackground, Alert, AsyncStorage } from 'react-native';

class Juego extends React.Component{
    state = {
        fila1: [
            { key:1, text: '' }, { key:2, text: '' }, { key:3, text: '' },
            { key:4, text: '' }, { key:5, text: '' },
        ],
        fila2: [
            { key:1, text: '' }, { key:2, text: '' }, { key:3, text: '' },
            { key:4, text: '' },
        ],
        fila3: [
            { key:1, text: '' }, { key:2, text: '' }, { key:3, text: '' },
            { key:4, text: '' }, { key:5, text: '' },
        ],
        fila4: [
            { key:1, text: '' }, { key:2, text: '' }, { key:3, text: '' },
            { key:4, text: '' }, { key:5, text: '' },
        ],
        fila5: [
            { key:1, text: '' }, { key:2, text: '' }, { key:3, text: '' },
            { key:4, text: '' }, { key:5, text: '' },
        ],
        fila6: [
            { key:1, text: '' }, { key:2, text: '' }, { key:3, text: '' },
            { key:4, text: '' },
        ],
        fila7: [
            { key:1, text: '' }, { key:2, text: '' }, { key:3, text: '' },
            { key:4, text: '' },
        ],
        fila8: [
            { key:1, text: '' }, { key:2, text: '' }, { key:3, text: '' },
            { key:4, text: '' }, { key:5, text: '' }, { key:6, text: '' },
            { key:7, text: '' },
        ],
        caracteres: [
            { letra: 'V' },
            { letra: 'N' },
            { letra: 'A' },
            { letra: 'O' },
            { letra: 'I' },
            { letra: 'T' },
            { letra: 'S' },
        ],
        completados: [
            "AVION","VISA","NOTAS","VOTOS","TANOS","SANO","VASO","SATANAS"
        ],
        segundos: 0,
        minutos: 5,
        terminado: 0,
        correctos: 0,
        incorrecto: 0,
        nuevo: []
    }

    componentDidMount(){
        let minutos = 4;
        let segundos = 59;
        let interval = null;
        interval = setInterval(() => {
            if(minutos < 0){
                this.setState({ minutos:0, segundos: 0 });
                clearInterval(interval);
                Alert.alert('Tiempo agotado, suerte para la proxima');
                this.props.navigation.navigate('Home');
            }else{
                segundos = segundos - 1;
                if(segundos == 0){
                    segundos = 59;
                    minutos = minutos - 1;
                }
                this.setState({ 
                    segundos: segundos,
                    minutos: minutos
                });
            }
        },1000);
    }

    click_letra = (letra) => {
        this.state.nuevo.push(letra);
        console.log(this.state.nuevo);
        
        if(this.state.nuevo.length > 7){
            Alert.alert('Alcanze maximo de caracteres, vuelve ah intentarlo');
            this.setState({ incorrecto: this.state.incorrecto + 1 });
        }else{
            let palabra_creada = '';
            for(var i=0; i<this.state.nuevo.length; i++){
                palabra_creada = palabra_creada + this.state.nuevo[i];
            }
            console.log(palabra_creada);
            for(var j=0; j<this.state.completados.length; j++){
                if(palabra_creada == this.state.completados[j]){
                    console.log('correcto '+ this.state.completados[j]);
                    this.posicionar(palabra_creada);
                    this.state.nuevo = [];
                    this.setState({
                        correctos: this.state.correctos + 1
                    });
                }
            }
        }
    }

    recorrer = (palabra, estado) => {
        let c = 0;
        estado.map( valor => {
            estado[c].text = palabra[c];
            c = c + 1;
        });

        this.state.terminado += 1;

        if(this.state.terminado == 8){
            Alert.alert(`Juego terminado, ${AsyncStorage.getItem('user')}`);
        }
    }

    posicionar = (palabra) => {
        switch(palabra){
            case 'AVION':
                this.recorrer(palabra ,this.state.fila1);
            break;
            case 'VISA':
                this.recorrer(palabra, this.state.fila2);
            break;
            case 'NOTAS':
                this.recorrer(palabra, this.state.fila3);
            break;
            case 'VOTOS':
                this.recorrer(palabra, this.state.fila4);
            break;
            case 'TANOS':
                this.recorrer(palabra, this.state.fila5);
            break;
            case 'SANO':
                this.recorrer(palabra, this.state.fila6);
            break;
            case 'VASO':
                this.recorrer(palabra, this.state.fila7);
            break;
            case 'SATANAS':
                this.recorrer(palabra, this.state.fila8);
            break;
        }
    }

    render(){
        return(
            <>
                <ImageBackground source={require('./static/2.jpg')} style={{ width: '100%', height: '100%'}}>
                    <View style={styles.marco}>
                        
                        <View style={styles.marco_celda}>
                            {this.state.fila1.map( valor => (
                                <View style={styles.celda}>
                                    <Text style={{color: 'green', fontWeight:'bold', fontSize: 25}} key={valor.key}>{valor.text}</Text>
                                </View>
                            ))}
                        </View>

                        <View style={styles.marco_celda}>
                            {this.state.fila2.map( valor => (
                                <View style={styles.celda}>
                                    <Text style={{color: 'green', fontWeight:'bold', fontSize: 25}} key={valor.key}>{valor.text}</Text>
                                </View>
                            ))}
                        </View>

                        <View style={styles.marco_celda}>
                            {this.state.fila3.map( valor => (
                                <View style={styles.celda}>
                                    <Text style={{color: 'green', fontWeight:'bold', fontSize: 25}} key={valor.key}>{valor.text}</Text>
                                </View>
                            ))}
                        </View>

                        <View style={styles.marco_celda}>
                            {this.state.fila4.map( valor => (
                                <View style={styles.celda}>
                                    <Text style={{color: 'green', fontWeight:'bold', fontSize: 25}} style={{color: 'green', fontWeight:'bold', fontSize: 25}} key={valor.key}>{valor.text}</Text>
                                </View>
                            ))}
                        </View>

                        <View style={styles.marco_celda}>
                            {this.state.fila5.map( valor => (
                                <View style={styles.celda}>
                                    <Text style={{color: 'green', fontWeight:'bold', fontSize: 25}} key={valor.key}>{valor.text}</Text>
                                </View>
                            ))}
                        </View>

                        <View style={styles.marco_celda}>
                            {this.state.fila6.map( valor => (
                                <View style={styles.celda}>
                                    <Text style={{color: 'green', fontWeight:'bold', fontSize: 25}} key={valor.key}>{valor.text}</Text>
                                </View>
                            ))}
                        </View>

                        <View style={styles.marco_celda}>
                            {this.state.fila7.map( valor => (
                                <View style={styles.celda}>
                                    <Text style={{color: 'green', fontWeight:'bold', fontSize: 25}} key={valor.key}>{valor.text}</Text>
                                </View>
                            ))}
                        </View>

                        <View style={styles.marco_celda}>
                            {this.state.fila8.map( valor => (
                                <View style={styles.celda}>
                                    <Text style={{color: 'green', fontWeight:'bold', fontSize: 25}} key={valor.key}>{valor.text}</Text>
                                </View>
                            ))}
                        </View>

                    </View>

                    <View style={styles.tiempo}>
                        <Text style={{fontSize: 45, color: '#000'}}>{this.state.minutos}:{this.state.segundos}</Text>
                    </View>

                    <View style={styles.puntaje}>
                        <View>
                            <Text style={{color: 'green', fontSize: 20}}>Correcto:</Text>
                            <Text style={styles.derecha}>{this.state.correctos}</Text>
                        </View>
                        <View>
                            <Text>-----</Text>
                        </View>
                        <View>
                            <Text style={{color: 'red', fontSize: 20}}>Incorrecto</Text>
                            <Text style={styles.izquierda}>{this.state.incorrecto}</Text>
                        </View>
                    </View>

                    <View style={styles.palabras}>
                        {this.state.caracteres.map( valor => (
                            <Text onPress={ () => this.click_letra(valor.letra)} style={styles.palabra_elegir}>{valor.letra}</Text>
                        ))}
                    </View>
                </ImageBackground>
            </>
        );
    }
}


const styles = StyleSheet.create({
    marco:{
        flex: 6,
        backgroundColor: 'rgba(250,250,250, 0.5)',
        width: '90%',
        left: 20
    },
    marco_celda:{
        justifyContent: 'center',
        flexDirection: 'row',
        backgroundColor: '#cdcdcd',
        top: 20
    },
    palabras:{
        flex: 1,
        backgroundColor: 'white',
        borderTopWidth: 2,
        borderTopColor: '#000',
        justifyContent: 'center',
        flexDirection: 'row',
    },
    palabra_elegir:{
        width: 50,
        height: 50,
        color: 'white',
        fontSize: 35,
        margin: 5,
        paddingHorizontal: 13,
        borderRadius: 50,
        backgroundColor: 'rgb(40,50,20)'
    },
    tiempo:{
        flex: 1,
        top: 30,
        backgroundColor: 'rgba(250,250,250, 0.8)',
        flexDirection: 'row',
        justifyContent: 'center',
    },
    puntaje:{
        flex: 2,
        top: 50,
        justifyContent: 'center',
        flexDirection: 'row',
    },
    derecha:{
        backgroundColor: 'green',
        color: 'white',
        justifyContent: 'center',
        textAlign: 'center',
        borderRadius: 50,
        fontSize: 25
    },
    izquierda:{
        backgroundColor: 'red',
        color: 'white',
        justifyContent: 'center',
        textAlign: 'center',
        borderRadius: 50,
        fontSize: 25
    },
    celda:{
        width: 45,
        height: 45,
        fontWeight: 'bold',
        flexWrap: 'wrap',
        backgroundColor: 'white',
        paddingVertical: 5,
        paddingHorizontal: 5,
        borderWidth: 2,
        borderColor: '#000',
        color: 'green'
    }
});

export default Juego;