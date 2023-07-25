import React from "react";
import { Text, View, StyleSheet, Modal, TouchableOpacity } from "react-native";

export default function Detalhes(props) {
    return(
        <View style={styles.container}> 
            
            <View style={styles.modalContainer}>

                <TouchableOpacity style={styles.btnVoltar} onPress={ props.voltar }>
                    <Text style={{color: '#FFF', }}> VOLTAR</Text>
                </TouchableOpacity>

                <Text style={styles.titulo}>{props.filme.nome}</Text>
                <Text style={styles.sinopse}>Sinopse: </Text>
                <Text style={styles.descricao}>{props.filme.sinopse}</Text>

            </View>

        </View>
    )
}

const styles = StyleSheet.create({
    container: {
        marginLeft: 12,
        marginRight: 12,
        flex: 1,
        alignItems: 'center',
        justifyContent: 'flex-end'
    },
    modalContainer: {
        width: '100%',
        height: '80%',
        backgroundColor: '#121212',
        borderTopLeftRadius: 5,
        borderTopRightRadius: 5
    },
    btnVoltar: {
        backgroundColor: '#E52246',
        padding: 10,
        borderTopLeftRadius: 5,
        borderTopRightRadius: 5
    },
    titulo: {
        color: '#FFF',
        margin: 12,
        fontSize: 24,
        fontWeight: 'bold'
    },
    sinopse: {
        color: '#FFF',
        fontSize: 18,
        fontWeight: '500',
        marginBottom: 8,
        marginLeft: 12
    },
    descricao: {
        color: '#FFF',
        marginLeft: 12,
        marginRight: 12
    }

})