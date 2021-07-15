
import * as React from 'react';
import { NavigationContainer } from '@react-navigation/native';
import { createStackNavigator } from '@react-navigation/stack';
import recorder from './screens/recorder';
import list from './screens/list';
import {createStore} from 'redux'
import {Provider} from 'react-redux'

const Stack = createStackNavigator();

const initialState = {
    Recordings: []
}

const reducer = (state = initialState, action) => {
    switch (action.type) {
        case 'INCREASE_RECORDINGS':
            return {...state, Recordings: [...state.Recordings, action.payload,]}
            default:
              return state
          }
    
}
const store = createStore(reducer)

export default function App() {
  return (
    <Provider store = {store}>
<NavigationContainer>
      <Stack.Navigator>
        <Stack.Screen name="recorder" component={recorder} />
        <Stack.Screen name="list" component={list} />
      </Stack.Navigator>
    </NavigationContainer>
    </Provider>
);

}
