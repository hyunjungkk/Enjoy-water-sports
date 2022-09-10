import React from 'react';
import { TouchableWithoutFeedback,Keyboard, StyleSheet, Alert,SectionList,SafeAreaView, Text, FlatList, View } from 'react-native';
import styled from 'styled-components/native';
import { Button } from '../components';
import { KeyboardAwareScrollView } from 'react-native-keyboard-aware-scroll-view';
import { useState } from "react";

import axios from 'axios'

const Container = styled.View`
    flex : 1;
    background-color : ${({ theme }) => theme.background};
    padding : 20px;
    justify-content : center;
    align-items : center;
`;
const styles = StyleSheet.create({
    fixToText: {
        backgroundColor: '#f9c2ff',
        fontSize: 30,
    },
});


const Search_3 = ({route, navigation}) => {

    const [DATAAAA, setDATAAAA] = useState([
    ]);

    const sendData = route.params.data;
    const sendleis = route.params.leis;
    const state = sendData;
       const access = ''
        const config = {
          headers : {
            //Authorization : `Bearer ${access}`,
          }
        }
        alert(state)
        axios.get(`http://3.34.181.178/tourapi/areacode/?areacode=${state}`)
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
            alert(error)
            // 오류발생시 실행
        }).then(function() {
            // 항상 실행
        });
    

    return (
        <KeyboardAwareScrollView>
        <TouchableWithoutFeedback>
        <Container>
            <View style={styles.fixToText}>
            </View>
            {DATAAAA?DATAAAA.map((data) => {
                   return <Button key={data.code} title = {data.name} 
                   onPress={()=>navigation.navigate('Location_list', 
                        {
                            data1:(sendData),
                            data2:(data.code),
                            leis:(sendleis)
                        }
                   )}
                   
                   /> 
                }):<Button></Button>} 
        </Container>
        </TouchableWithoutFeedback>
        </KeyboardAwareScrollView>
    );
};

export default Search_3
