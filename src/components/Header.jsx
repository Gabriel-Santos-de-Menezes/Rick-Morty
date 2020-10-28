import React from 'react';
import { View, Text, StyleSheet} from 'react-native';

export default function Header(){
    return(
        <View style={styles.container}>
            <Text style={styles.title}>Rick and Morty</Text>
        </View>
    )
}

const styles  = StyleSheet.create({
    container: {
        backgroundColor: '#c43e4c',
        justifyContent: 'center',
        alignItems: 'center',
        paddingBottom: 10,
        paddingTop: 10,
        
    },

    title: {
        color: '#fff',
        fontSize: 24,
        paddingHorizontal: 10,
    }
})