import React from 'react';
import { TouchableWithoutFeedback,Keyboard,ScrollView, TouchableOpacity } from 'react-native';
import styled from 'styled-components/native';
import { KeyboardAwareScrollView } from 'react-native-keyboard-aware-scroll-view';
import { Dimensions } from 'react-native';
import { StyleSheet, Text,View, Button } from 'react-native';
import { Image,TextInput } from 'react-native';
import Home from './Home';
import kakaoLogin from './kakaoLogin';
import { useState } from 'react';
import axios from 'axios';

const { width } = Dimensions.get('window')

const styles = {
    wrapper: {
    },

    button: {
        flexDirection:'row',
        backgroundColor: '#bfe9ff',
        alignItems: 'center',
        justifyContent: 'center',
        width: 250,
        height: 50,
        marginBottom: 30,
        borderRadius: 5,  
    },

    image: {
      width: 100,
      height: 100,
      justifyItems: 'center',
      alignItems: 'center',
      resizeMode: 'contain',
      marginTop: 170,
      borderRadius: 100,
    },

    text: {
        fontSize: 30,
        textAlign: 'center',
        color: 'white'
    },
    textinput: {
      marginTop: 20,
      height: 40,
      borderColor: "gray",
      borderBottomWidth: 1,
      marginBottom: 10,
    }
  }

const Container = styled.View`
    flex : 1;
    justify-content : center;
    align-items : center;
    background-color : ${({ theme }) => theme.background};
    padding : 20px;
`;


const apiUrl = 'http://3.34.181.178/'
//const apiUrl = 'http://127.0.0.1:8000/'


const RegisterPage = ({navigation}) => {
    const [ID, setID] = useState('')
    const [password, setPassword] = useState('')
    const [email, setEmail] = useState('')
    const [nickname, setNickname] = useState('')

    const startRegister = () => {
        if (
            !(ID && password && email && nickname)
        ) {
            alert("입력하지 않은 항목이 있습니다!")
        }
        //이메일 포맷체크
        
        let formData = new FormData();
        const config = {
            header: { "content-Type": "multipart/form-data" },
        };
        formData.append("user_id", ID);
        formData.append("password", password);
        formData.append("email", email);
        formData.append("nickname", nickname);
    
        axios.post(
            `${apiUrl}oursignup/`,
            formData,
            config
            )
            .then(function (response) {
                alert(response.user.nickname+"님! 회원가입이 완료되었습니다!");
                navigation.navigate(Login)
            })
            .catch(function (error) {
                alert(error)
            });
    }

    return (
        <KeyboardAwareScrollView 
            contentContainerStyle = {{flex : 1}}
            extraScrollHeight = {20}
        >
        <TouchableWithoutFeedback>
        <Container>
            <View style={{flex : 1.5}}>
                <Image style={styles.image} source={require('../images/login_logo.png')} />
            </View>
            <View style={{flex : 2.0}}>
                <TextInput style={styles.textinput}
                    placeholder="ID"
                    onChangeText={text => setID(text)} value={ID}
                />
                <TextInput style={styles.textinput}
                    placeholder="PASSWORD"
                    onChangeText={text => setPassword(text)} value={password}
                />
                <TextInput style={styles.textinput}
                    placeholder="이메일"
                    onChangeText={text => setEmail(text)} value={email}
                />
                <TextInput style={styles.textinput}
                    placeholder="닉네임"
                    onChangeText={text => setNickname(text)} value={nickname}
                />
                <TouchableOpacity style={styles.button} onPress={startRegister}>
                    <Text style={{color: '#3C1E1E', fontWeight: 'bold'}}>회원가입</Text>
                </TouchableOpacity>

            </View>
        </Container>
        </TouchableWithoutFeedback>
        </KeyboardAwareScrollView>
    );
};

export default RegisterPage