import React from 'react';
import { TouchableWithoutFeedback,Keyboard, Alert } from 'react-native';
import styled from 'styled-components/native';
import { Button } from '../components';
import { KeyboardAwareScrollView } from 'react-native-keyboard-aware-scroll-view';
import { useState } from "react";
import axios from 'axios'

const Container = styled.View`
    flex : 1;
    justify-content : center;
    align-items : center;
    background-color : ${({ theme }) => theme.background};
    padding : 10px;
`;


const Search_2 = ({route, navigation}) => {
    const sendData_les = route.params.data;
    const [DATAAAA, setDATAAAA] = useState([
    ]);

    const access = ''
    const config = {
        headers : {
      //  Authorization : `Bearer ${access}`,
        }
    }
        axios.get(`http://3.34.181.178/tourapi/areacode/?areacode=`)
            .then(function (response) {
            // response  
            if(response) {
            const valor = JSON.stringify(response.data)
            const report = JSON.parse(valor)
            //Alert.alert(report.response.body.items.item[0].name)
            setDATAAAA(report.response.body.items.item);
            }
            else {
            Alert.alert("검색 결과가 없습니다");
            }
        }).catch(function (error) {
            // 오류발생시 실행
        }).then(function() {
            // 항상 실행
        });
    
    return (
        <KeyboardAwareScrollView>
            
        <TouchableWithoutFeedback>
        <Container>
        {DATAAAA.map((data) => {
                   //return <Button key={data.code} title = {data.name} onPress={()=>navigation.navigate('Search_3', {state: {data:(data.code), les:'gg'}})} /> 
                   return <Button 
                   key={data.code} 
                   title = {data.name} 
                   onPress={()=>navigation.navigate('Search_3', 
                        {
                            data:(data.code),
                            leis:(sendData_les)
                        }
                   )} /> 
                })} 

        </Container>
        </TouchableWithoutFeedback>
        </KeyboardAwareScrollView>
    );
};


export default Search_2
