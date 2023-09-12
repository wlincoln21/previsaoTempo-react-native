import { View, Text, StyleSheet } from 'react-native'
import React, { useEffect } from 'react'
import Busca from './src/components/Busca.js'



const url_base = 'https://api.api-futebol.com.br/v1/'
const token = 'test_3e573ea72e4668e302aaaf610f363f'




const App = () => {
    return (
        <View style={styles.container}>
            <Busca />
        </View>
    )
}


const styles = StyleSheet.create({
    container: {
        flex: 1,
        alignItems: 'center',
        justifyContent: 'center'
    }
})


export default App