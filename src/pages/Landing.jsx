import React from 'react';
import { View, StyleSheet, Text, Image, Button, StatusBar } from 'react-native';
import { useNavigation} from '@react-navigation/native'

import Header from '../components/Header';

import Capa from '../assets/img/capa.png';

const Landing = () => {
    
    const navigation  = useNavigation();

    function handlePagePersonanges(){
        navigation.navigate('Personagens')
    }

    return (
        <View style={styles.container}>
            <Header style={styles.header} />

            <Text style={styles.subtitle}></Text>
            <Image source={Capa} />
            
            <View style={styles.buttons}>
                <Button 
                    title="Personagens"
                    style={styles.personagens}
                    color="#7ab440"
                    onPress={handlePagePersonanges}
                />
                <Button 
                    title="Epsódio"
                    color="#7ab440"

                />
            </View>

            
                
        </View>
    )
}

const styles = StyleSheet.create({
    container: {
        flex: 1,
        backgroundColor: '#137c8c',
        marginTop: 24,
    },

    subtitle: {
        color: '#fff'
    },

    header: {
        paddingHorizontal: 10,
    },

    buttons: {
        flexDirection: 'row',
        alignItems: 'center',
        justifyContent: 'space-around',
        bottom: 0,
        height: 40,
        
    },

    personagens: {
        height: 30,
        borderRadius: 20,
        
        
    }
    
     
})

export default Landing;