import { StyleSheet, Text, View, ImageBackground, TextInput, Dimensions, Image, Button } from 'react-native'
import React, { useState } from 'react'
import axios from 'axios';


const Busca = () => {

    const [cidade, setCidade] = useState('');
    const [result, setResult] = useState(null);
    const [error, setError] = useState(false)

    const handleSearch = () => {
        const apiUrl = 'https://api.weatherapi.com/v1/search.json?key=dab07cab8e4f48a18b411132231209&q=' + cidade;

        axios
            .get(apiUrl)
            .then((response) => {
                setResult(response.data);
                setError(false)
                console.warn(response.data)
                console.warn(result)
            })
            .catch((e) => {
                console.error('Erro ao consultar cidade: ', e)
                setResult(null);
                setError(true);
            })

    }

    const handleInputCity = (city) => {
        setCidade(city);
    }


    return (
        <View style={styles.container}>
            <View style={styles.logo}>
                <Image source={require('../assets/logo.png')}></Image>
                <Text style={{ fontSize: 20, fontWeight: 600, color: '#FAFAFA' }}>iWeather</Text>
            </View>
            <Text>result && {result.server}</Text>
            <View style={styles.welcome}>
                <Text style={{ color: '#fff', fontSize: 20 }}>Boas vindas ao <Text style={{ color: '#8FB2F5' }}>TypeWeather</Text></Text>
                <Text style={{ color: '#BFBFD4', fontSize: 14 }}>Escolha um local para ver a previsão do tempo</Text>
            </View>
            <View style={{ flexDirection: 'row' }}>
                <TextInput
                    style={styles.input}
                    placeholder='Buscar Local'
                    placeholderTextColor={'#7F7F98'}
                    value={cidade}
                    onChange={handleInputCity}
                ></TextInput>
                <Button style={{ width: 40, height: 10 }} title="Buscar" onPress={handleSearch} />

            </View>
        </View>
    )
}

export default Busca

const styles = StyleSheet.create({
    container: {
        width: Dimensions.get('window').width,
        height: Dimensions.get('window').height,
        backgroundColor: '#000',
        flex: 1,
        textAlign: 'center',
        alignItems: 'center',
    },
    logo: {
        flexDirection: 'row',
        alignItems: 'center',
        gap: 5,
        marginTop: 50
    },
    welcome: {
        alignItems: 'center',
        marginTop: 200,
        gap: 4,
        fontFamily: 'Nunito' // Note the font family string here
    },
    input: {
        marginTop: 32,
        backgroundColor: '#1E1E29',
        width: '80%',
        height: 56,
        paddingLeft: 20,
        paddingRight: 20,
        borderRadius: 8
    }
})
