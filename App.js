import { View, Text, StyleSheet } from 'react-native'
import React from 'react'
import Busca from './src/components/Busca.js'

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