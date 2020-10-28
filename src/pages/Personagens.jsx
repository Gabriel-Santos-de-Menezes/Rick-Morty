import React, { useState, useEffect } from 'react'
import { View, Text, StyleSheet, ScrollView} from  'react-native';

import api from '../services/api'

export default function Personagens(){
    const [person, setPersonangens] = useState();

    useEffect(() => {
        api.get('character').then(response => {
            setPersonangens(response.data.results);
            //console.log(response.data)
        })
    }, [])

    //console.log(person)

    if(!person){
        return(
            <View>
                <Text>Carregando...</Text>
            </View>
        )
    }
    

    return (
        <View style={styles.container}>
            <Text>Personagens</Text>

            <ScrollView>
                {person.map(personagem => {
                    {console.log(personagem)}
                    {/* <Text key={personagem.id}>{personagem.name}</Text> */}
                })}
            </ScrollView>
        </View>
    )
}

const styles = StyleSheet.create({
    container: {
        marginTop: 24,
    }
})