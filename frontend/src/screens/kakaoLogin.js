import React from 'react';
import { TouchableWithoutFeedback, Keyboard, ScrollView, TouchableOpacity, Alert, AsyncStorage } from 'react-native';
import styled from 'styled-components/native';
import { KeyboardAwareScrollView } from 'react-native-keyboard-aware-scroll-view';
import { Dimensions } from 'react-native';
import { StyleSheet, Text,View, Button } from 'react-native';
import { Image} from 'react-native';
import Home from './Home';
import Login from './Login';
import { useState } from 'react';

import { WebView } from 'react-native-webview';
import axios from 'axios';

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


const runFirst = `window.ReactNativeWebView.postMessage("this is message from web");`;
const apiUrl = "http://3.34.181.178/";
//const apiUrl = "http://127.0.0.1:8000/";

const kakaoLogin = ({navigation}) => {
    const LogInProgress = async url => {
      const exp = 'code='; //url에 붙어 날라오는 인가코드는 code=뒤부터 parse하여 get
     // alert(url)
     alert(JSON.stringify(url))
      const startIndex = url.indexOf(exp); //url에서 "code="으로 시작하는 index를 찾지 못하면 -1반환
      if (startIndex !== -1) {
        const authCode = url.substring(startIndex + exp.length);
       // alert('access code2 :: ' + authCode);
       alert(authCode)

       await axios.get(`${apiUrl}mypage/login/`,{
                  params: {
                    code: authCode,
                  },
                })
            .then(function (response) {
                alert("hi")
                setWebView(false)
                if(response) {
              //   navigation.navigate('Home');
                }
                else {
                  //검색 결과가 없습니다.
                  alert("검색 결과가 없습니다 !!");
                }
        }).catch(function (error) {
            // 오류발생시 실행
            alert(error)
        }).then(function() {
            // 항상 실행
        });

      }
    }

    const client_id = 'af62338ebe8c58e6ef815e75d71810e9'
   // const re_url = 'http://3.34.181.178/mypage/'
    const re_url = 'http://3.34.181.178/mypage/login'
    //const re_url = 'http://127.0.0.1:8000/mypage/login'
    const [isWebView, setWebView] = useState(true)

    return (
          <View style={{flex: 1}}>
            {isWebView?<WebView
                originWhitelist={['*']}
                scalesPageToFit={false}
                style={{ marginTop: 30 }}
                source = {{uri : `https://kauth.kakao.com/oauth/authorize?response_type=code&client_id=${client_id}&redirect_uri=${re_url}`}}
                injectedJavaScript={runFirst}

                javaScriptEnabled={true}
                
                onMessage={event => {
                  LogInProgress(event.nativeEvent["url"]);
                }}
                
            // onMessage ... :: webview에서 온 데이터를 event handler로 잡아서 logInProgress로 전달
            />:<div></div>}
          </View>
        );
      
    };
export default kakaoLogin
