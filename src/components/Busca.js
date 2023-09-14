import React, { useState } from 'react';
import { View, Text, TextInput, Button, StyleSheet, Image, Dimensions } from 'react-native';
import axios from 'axios';

const Busca = () => {
    const [cidade, setCidade] = useState('');
    const [result, setResult] = useState(null);
    const [error, setError] = useState(false);
    const [inputVisible, setInputVisible] = useState(true);
    const [value, setValue] = useState('');

    const styles = StyleSheet.create({
        container: {
            width: Dimensions.get('window').width,
            height: Dimensions.get('window').height,
            backgroundColor: '#000',
            flex: 1,
            alignItems: 'center',

        },
        logo: {
            flexDirection: 'row',
            alignItems: 'center',
            marginTop: 50,
            marginBottom: 20,
        },
        welcome: {
            alignItems: 'center',
            marginTop: 200,
            display: inputVisible ? 'flex' : 'none'
        },
        input: {
            backgroundColor: '#1E1E29',
            width: '80%',
            height: 56,
            paddingLeft: 20,
            paddingRight: 20,
            borderRadius: 8,
            marginRight: 10,
            color: '#fff',
            fontSize: 20
        },
        containerInput: {
            display: inputVisible ? 'flex' : 'none',
            flexDirection: 'row',
            marginTop: 30,
        }
    });
    const handleSearch = async () => {
        try {
            const apiKey = 'dab07cab8e4f48a18b411132231209';
            const apiUrl = `https://api.weatherapi.com/v1/current.json?key=${apiKey}&q=${cidade}`;

            const response = await axios.get(apiUrl);
            setResult(response.data);
            setError(false);
            setInputVisible(false);
        } catch (e) {
            console.error('Erro ao consultar cidade: ', e);
            setResult(null);
            setError(true);
        }
    };

    const handleInputCity = (cidade) => {
        setCidade(cidade);
    };

    return (
        <View style={styles.container}>
            <View style={styles.logo}>
                <Image source={require('../assets/logo.png')} />
                <Text style={{ fontSize: 20, fontWeight: '600', color: '#FAFAFA' }}>iWeather</Text>
            </View>
            <View style={styles.welcome}>
                <Text style={{ color: '#fff', fontSize: 20 }}>Boas vindas ao <Text style={{ color: '#8FB2F5' }}>TypeWeather</Text></Text>
                <Text style={{ color: '#BFBFD4', fontSize: 14 }}>Escolha um local para ver a previsão do tempo</Text>
            </View>
            <View style={styles.containerInput}>
                <TextInput
                    style={styles.input}
                    placeholder='Buscar Local'
                    placeholderTextColor={'#7F7F98'}
                    value={cidade}
                    onChangeText={handleInputCity}
                />
                <Button title="Buscar" onPress={handleSearch} buttonStyle={{ textAlign: 'center' }} />


            </View>

            {
                result ? (

                    <View style={{
                        backgroundColor: '#fff',
                        width: 400,
                        flex: 1,
                        justifyContent: 'center',
                        alignItems: 'center'
                    }}>
                        {result.current && (
                            <Image source={{ uri: "https:" + result.current.condition.icon }} style={{ width: 64, height: 64 }} />
                        )}
                        <Text style={{
                            fontSize: 22,
                            fontWeight: 'bold'
                        }}>{result.location.name}</Text>
                        {result.current && (
                            <Text>Temperatura: {result.current.temp_c}°C - Sensação: {result.current.feelslike_c}°C</Text>
                        )}
                        {result && (
                            <Text>
                                UV: {result.current.uv}
                            </Text>
                        )}
                        {result && (
                            <Text>
                                Vento Kph: {result.current.wind_kph}Kph
                            </Text>
                        )}
                        {result && (
                            <Text>
                                Umidade: {result.current.humidity}
                            </Text>
                        )}
                        {result && (
                            <Text>
                                Nuvens: {result.current.cloud}%
                            </Text>
                        )}
                        {result.current && (
                            <Text>
                                Condição do tempo: {result.current.condition.text === 'Light rain' ? 'Chuva leve' : null}
                            </Text>
                        )}
                        <Button
                            style={{ marginTop: 20 }}
                            title='Nova Busca'
                            onPress={() => {
                                setResult(null)
                                setInputVisible(true)
                            }}
                        ></Button>
                    </View>
                ) : null
            }
            {
                error && (
                    <Text style={{ color: 'red' }}>Erro ao buscar dados da API.</Text>
                )
            }
        </View >
    );
};

export default Busca;

