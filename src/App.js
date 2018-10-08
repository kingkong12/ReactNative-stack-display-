import React, { Component } from 'react'; 
import { View, Text } from 'react-native';
import { Provider } from 'react-redux'; 
import { createStore } from 'redux';
import reducers from './reducers/Index'; 
import { Header } from './components/common/index';
import LibraryList from './components/LibraryList'; 

const App = () => {
    return (
        <Provider store={createStore(reducers)}>
        <View style={{ flex: 1 }}> 
            <Header headerText="Stack List" /> 
            <LibraryList /> 
        </View>     
        </Provider >           
    );
}; 

export default App; 
