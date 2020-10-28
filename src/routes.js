import React from 'react'

import { NavigationContainer} from '@react-navigation/native'
import { createStackNavigator } from '@react-navigation/stack'

import Landing from './pages/Landing'
import Personagens from './pages/Personagens'

export default function Routes(){

    const {Navigator, Screen} = createStackNavigator();

    return (
        <NavigationContainer>
            <Navigator screenOptions={{ headerShown: false, cardStyle: {backgroundColor: '#7ab440'}}}>
                <Screen
                    name="Landing"
                    component={Landing}
                />
                <Screen
                    name="Personangens"
                    component={Personagens}
                />
            </Navigator>
        </NavigationContainer>
    )
}