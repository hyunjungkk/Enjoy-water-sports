import React from 'react';
import { NavigationContainer } from '@react-navigation/native';
import AllTabs from './AuthStack';
import { useState } from 'react';
import { UserContext } from '../context/UserContext';

const Navigation = () => {
    const [userdata, setUserdata] = useState(false)

    return (
        <UserContext.Provider value={{userdata, setUserdata}}>
            <NavigationContainer>
                <AllTabs />
            </NavigationContainer>
        </UserContext.Provider>
    );
};

export default Navigation;