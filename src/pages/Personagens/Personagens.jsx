import React, { useState, useEffect } from 'react'
import { View, Text, StyleSheet, ScrollView, ActivityIndicator} from  'react-native';

import { getPersons } from '../../services/getPersonagens';

import api from '../../services/api'

export default function Personagens(){
    const [person, setPersonangens] = useState([]);

    useEffect(() => {
        
        const getPer = async() =>{
            const response = await getPersons();
            setPersonangens(response.data.results);
            //console.log(response.data)
        }

        getPer();
        
    }, [])

    //console.log(person)

    if(!person){
        return(
            <ActivityIndicator size={30} />
        )
    }
    

    return (

        
        <View style={styles.container}>

            <Text>Personagens</Text>
            <ScrollView style={{flex: 1}}>
                {person ? person.map(personagem => {
                    {console.log("i\n\n\n\n\n\n",personagem.name)}
                    <Text>{personagem.name}</Text>
                }): <ActivityIndicator size={30} />}
            </ScrollView>
        </View>
    )
}

const styles = StyleSheet.create({
    container: {
        marginTop: 24,
    }
})