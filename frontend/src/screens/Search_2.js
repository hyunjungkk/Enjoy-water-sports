import React from 'react';
import { TouchableWithoutFeedback,Keyboard } from 'react-native';
import styled from 'styled-components/native';
import { Button } from '../components';
import { KeyboardAwareScrollView } from 'react-native-keyboard-aware-scroll-view';


const Container = styled.View`
    flex : 1;
    justify-content : center;
    align-items : center;
    background-color : ${({ theme }) => theme.background};
    padding : 20px;
`;

const Search_2 = () => {

    return (
        <KeyboardAwareScrollView 
            contentContainerStyle = {{flex : 1}}
            extraScrollHeight = {20}
        >
        <TouchableWithoutFeedback>
        <Container>
            <Button title = "Search_2" />
        </Container>
        </TouchableWithoutFeedback>
        </KeyboardAwareScrollView>
    );
};


export default Search_2
