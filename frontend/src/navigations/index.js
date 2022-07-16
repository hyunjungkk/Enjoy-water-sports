import React from 'react';
import { NavigationContainer } from '@react-navigation/native';
import AllTabs from './AuthStack';

const Navigation = () => {
    return (
        <NavigationContainer>
            <AllTabs />
        </NavigationContainer>
    );
};

export default Navigation;