import React from 'react';
import { TouchableWithoutFeedback,Keyboard,ScrollView, TouchableOpacity } from 'react-native';
import styled from 'styled-components/native';
import { KeyboardAwareScrollView } from 'react-native-keyboard-aware-scroll-view';
import { Dimensions } from 'react-native';
import { StyleSheet, Text,View, Button } from 'react-native';
import { Image} from 'react-native';
import Home from './Home';
import kakaoLogin from './kakaoLogin';

const { width } = Dimensions.get('window')

const styles = {
    wrapper: {
    },

    button: {
        flexDirection:'row',
        backgroundColor: '#F7E314',
        alignItems: 'center',
        justifyContent: 'center',
        width: 250,
        height: 50,
        marginBottom: 30,
        borderRadius: 5,  
    },

    image: {
      width: 180,
      height: 180,
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
    }
  }

const Container = styled.View`
    flex : 1;
    justify-content : center;
    align-items : center;
    background-color : ${({ theme }) => theme.background};
    padding : 20px;
`;

const Login = ({navigation}) => {

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
            <View style={{flex : 1.2}}>
                <TouchableOpacity style={styles.button} onPress={()=>navigation.navigate(kakaoLogin)}>
                    <Image source={require('../images/kakao_logo.png')}  style={{width:30, height:30,marginRight:10}} />
                    <Text style={{color: '#3C1E1E', fontWeight: 'bold'}}>카카오톡으로 간편로그인</Text>
                </TouchableOpacity>
            </View>
        </Container>
        </TouchableWithoutFeedback>
        </KeyboardAwareScrollView>
    );
};

export default Login