import React from 'react';
import { View, StyleSheet, Button, StatusBar } from 'react-native';
import { useNavigation} from '@react-navigation/native'

import Header from '../../components/Header';

import Capa from '../../assets/img/capa.png';
import { Buttons, Container, HeaderView, Personagens, Subtitle, Text, Image } from './styles';


const Landing = () => {
    
    const navigation  = useNavigation();

    function handlePagePersonanges(){
        navigation.navigate('Personagens')
    }

    return (
        <Container>
            <Header />

            <Subtitle ></Subtitle>
            <Image source={Capa} />
            
            <Buttons >
                <Personagens 
                    
                    onPress={handlePagePersonanges}
                >
                    <Text>Lista de personagens</Text>
                </Personagens>
                <Personagens 
                    
                    onPress={handlePagePersonanges}
                >
                    <Text>Favoritos</Text>
                </Personagens>
            </Buttons>

            
                
        </Container>
    )
}

export default Landing;