import React from 'react';
import { StatusBar } from 'expo-status-bar';
import { theme } from './theme';
import { ThemeProvider } from 'styled-components';
import Navigation from './navigations';

const App = () => {
    return (
        
        <ThemeProvider theme = {theme}>
            <StatusBar barStyle = "dark-content"/>
            <Navigation />
        </ThemeProvider>
    
    );
};

export default App;