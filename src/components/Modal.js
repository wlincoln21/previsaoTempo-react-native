import React, { useState } from 'react';
import { View, Text, Modal, Button, StyleSheet } from 'react-native';

const Modal = () => {
    const [modalVisible, setModalVisible] = useState(false);

    return (
        <View style={styles.container}>
            <Button
                title="Abrir Modal"
                onPress={() => {
                    setModalVisible(true);
                }}
            />

            <Modal
                animationType='slide'
                presentationStyle='formSheet'
                transparent={true}

                visible={modalVisible}
                onRequestClose={() => {
                    setModalVisible(false);
                }}
            >
                <View style={styles.modalContainer}>
                    <View style={styles.modalContent}>
                        <Text>Este é um Modal!</Text>
                        <Button
                            title="Fechar Modal"
                            onPress={() => {
                                setModalVisible(false);
                            }}
                        />
                    </View>
                </View>
            </Modal>
        </View>
    );
};

const styles = StyleSheet.create({
    container: {
        flex: 1,
        justifyContent: 'center',
        alignItems: 'center',
    },
    modalContainer: {
        flex: 1,
        justifyContent: 'center',
        alignItems: 'center',
        backgroundColor: 'rgba(0, 0, 0, 0.5)',
    },
    modalContent: {
        width: 300,
        padding: 20,
        backgroundColor: 'white',
        borderRadius: 10,
        alignItems: 'center',
    },
});

export default Modal;
