import React, { useState } from "react";
import { View, Text, StyleSheet, Image, TouchableOpacity, Modal } from "react-native";
import Detalhes from "../Detalhes";

export default function Filmes({ data }) {

    const [modalVisible, setModalVisible] = useState(false)
    return(
        <View>
           

                <View style={styles.card}>

                    <Text style={styles.titulo}>{data.nome}</Text>

                    <TouchableOpacity onPress={() => setModalVisible(true) }>
                        <Image 
                        source={{ uri: data.foto }}
                        style={styles.imgCard}
                        />
                    </TouchableOpacity>

                    <View style={styles.areaBtn}>
                        <TouchableOpacity style={styles.botao} onPress={ () => setModalVisible(true) }>
                            <Text style={styles.textoBtn}>LEIA MAIS</Text>
                        </TouchableOpacity>
                    </View>
                    
                </View>

            

            <Modal transparent={true} animationType="slide" visible={modalVisible}>
                <Detalhes filme={data} voltar={ () => setModalVisible(false) } />
            </Modal>
        </View>
    )
}

const styles = StyleSheet.create({
    card: {
        backgroundColor: '#FFF',
        margin: 16,
        elevation: 2,
        borderRadius: 12
    },
    titulo: {
        padding: 16,
        fontSize: 20,
        fontWeight: '500'
    },
    imgCard: {
        height: 250,
        zIndex: 2,
    },
    areaBtn: {
        width: '100%',
        marginTop:-37,
        zIndex: 9
    },
    botao: {
        width: '100%',
        backgroundColor: '#09A6FF',
        opacity: 0.80,
        padding: 8,
        borderTopLeftRadius: 8,
        borderTopRightRadius: 8
    },
    textoBtn: {
        color: '#FFF',
        textAlign: 'center'

    }
})