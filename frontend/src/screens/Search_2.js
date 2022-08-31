import React from 'react';
import { TouchableWithoutFeedback,Keyboard, Alert } from 'react-native';
import styled from 'styled-components/native';
import { Button } from '../components';
import { KeyboardAwareScrollView } from 'react-native-keyboard-aware-scroll-view';

const Container = styled.View`
    flex : 1;
    justify-content : center;
    align-items : center;
    background-color : ${({ theme }) => theme.background};
    padding : 10px;
`;


const Search_2 = ({navigation}) => {

    return (
        <KeyboardAwareScrollView 
           // contentContainerStyle = {{flex : 1}}
           // extraScrollHeight = {20}
        >
            
        <TouchableWithoutFeedback>
        <Container>
            <Button title = "서울" onPress={()=>navigation.navigate('Search_3', {data:"1"})}/> 
            <Button title = "인천" onPress={()=>navigation.navigate('Search_3', {data:"2"})}/>  
            <Button title = "대전" onPress={()=>navigation.navigate('Search_3', {data:"3"})}/>  
            <Button title = "대구" onPress={()=>navigation.navigate('Search_3', {data:"4"})}/>  
            <Button title = "광주" onPress={()=>navigation.navigate('Search_3', {data:"5"})}/>  
            <Button title = "부산" onPress={()=>navigation.navigate('Search_3', {data:"6"})}/>  
            <Button title = "울산" onPress={()=>navigation.navigate('Search_3', {data:"7"})}/> 
            <Button title = "세종특별자치시" onPress={()=>navigation.navigate('Search_3', {data:"8"})}/> 
            <Button title = "경기도" onPress={()=>navigation.navigate('Search_3', {data:"9"})}/> 
            <Button title = "강원도" onPress={()=>navigation.navigate('Search_3', {data:"10"})}/> 
        </Container>
        </TouchableWithoutFeedback>
        </KeyboardAwareScrollView>
    );
};


export default Search_2
