import React from "react";
import { NavigationContainer } from '@react-navigation/native';
import { createStackNavigator } from '@react-navigation/stack';

import TelaInicio from './telas/TelaInicio';
import TelaTabuada from './telas/TelaTabuada';
import TelaRespostaCerta from './telas/TelaRespostaCorreta';
import TelaRespostaErrada from './telas/TelaRespostaErrada';

const Stack = createStackNavigator();

const App = () => (
  <NavigationContainer>
    <Stack.Navigator screenOptions={{ headerShown: false}}>

    <Stack.Screen name="Inicio" component = { TelaInicio } />
    <Stack.Screen name="Tabuada" component = { TelaTabuada } />
    <Stack.Screen name= {"RespostaCorreta"} component= { TelaRespostaCerta} />
    <Stack.Screen name= {"RespostaErrada"} component= { TelaRespostaErrada} />

    </Stack.Navigator>
</NavigationContainer>
);

export default App;