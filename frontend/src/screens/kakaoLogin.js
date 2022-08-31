import React from 'react';
import { TouchableWithoutFeedback,Keyboard,ScrollView, TouchableOpacity, Alert } from 'react-native';
import styled from 'styled-components/native';
import { KeyboardAwareScrollView } from 'react-native-keyboard-aware-scroll-view';
import { Dimensions } from 'react-native';
import { StyleSheet, Text,View, Button } from 'react-native';
import { Image} from 'react-native';
import Home from './Home';
import Login from './Login';

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

  // other import settings...

const runFirst = `window.ReactNativeWebView.postMessage("this is message from web");`;
const apiUrl = "http://3.34.181.178/";

const kakaoLogin = ({navigation}) => {
    function LogInProgress (data){
        
      
      const exp = "code=";
      	//var condition = data.indexOf(exp);
        console.log('-----------');

        
          console.log('kakaoLogin start');
            //var request_code = data.substring(condition+exp.length);
            //토큰값 받기
            //console.log("access code :: " + request_code);
            //requestToken(request_code);
            get_token;
            //navigation.navigate('Home');
        
    }
    function get_token({}){
      /*
      const access = cookies.get("access_token");
      const config = {
        headers: {
          Authorization: `Bearer ${access}`,
        },
      };
      */
      
      axios.get(`${apiUrl}mypage/login`)
          .then(function (response) {
          // response.id 
  
          if(response.data.count > 0 ) {
            //renderFunction
           // console.log('response: '+response);
            //navigate("/searchlist",{state:response.data});
          
            //setLists(response.data)
            //const access_token = response.token.access;
            //const refresh_token = response.token.refresh;
            console.log('access_token: '+ access_token);
            console.log('refresh_token: '+ refresh_token);
            navigation.navigate('Home');

          }
          else {
            //검색 결과가 없습니다.
            alert("검색 결과가 없습니다 !!");
          }
      }).catch(function (error) {
          // 오류발생시 실행
      }).then(function() {
          // 항상 실행
      });
    }
        /*
        const requestToken = async (request_code) => {

            var returnValue = "none";    
            var request_token_url = "https://kauth.kakao.com/oauth/token";
    
            axios({
    
                method: "post",
    
                url: request_token_url,
    
                params: {
    
                    grant_type: 'authorization_code',
    
                    client_id: 'ic',
    
                    redirect_uri: 'url',
    
                    code: request_code,
    
                },
    
            }).then(function (response) {
    
                returnValue = response.data.access_token;
                console.log(returnValue)
    
     
    
            }).catch(function (error) {
    
                console.log('error', error);
    
            });
    
        };
    
 */
/*
        const requestToken = async (request_code) => {
          var returnValue = "none";
          var request_token_url  = 'http://3.34.181.178/accounts/login/';
          
          console.log("requestToken start");
          
          axios({

            method: "post",
            url: request_token_url,
            params: {
                grant_type: 'authorization_code',
                client_id: 'ic',
                redirect_uri: 'url',
                code: request_code,
            },

        }).then(function (response) {

            returnValue = response.data.access_token;

        }).catch(function (error) {

            console.log('error', error);

        });

    };
*/
              /*
              if (result === 'stored') {
                const user = await getData('user');
                dispatch(read_S(user));
                await navigation.navigate('Main');
              }
              */
        
    //...

    /*
    async function requestToken(request_code){
      var returnValue = "none";
      var request_token_url = "http://3.34.181.178/mypage/login"; 
      axios
      .get(`${apiUrl}accounts/kakao/accesstoken/${KAKAO_CODE}`)
      .then((res) => {
        console.log(res);
        localStorage.setItem("user", res.data.user);
        localStorage.setItem("profile_photo", res.data.profile_photo);
        cookies.set("access_token", res.data.token.access, {
          path: "/",
        });
        cookies.set("refresh_token", res.data.token.refresh, {
          path: "/",
        });
        window.location.replace("/");
      });

      return returnValue;
  }
  */

    return (
          <View style={{flex: 1}}>
            <WebView
                originWhitelist={['*']}
                scalesPageToFit={false}
                style={{ marginTop: 30 }}
                source = {{uri : 'https://kauth.kakao.com/oauth/authorize?response_type=code&client_id=af62338ebe8c58e6ef815e75d71810e9&redirect_uri=http://3.34.181.178/mypage/login'}}
                injectedJavaScript={runFirst}

                javaScriptEnabled={true}
                
                onMessage={(event) => LogInProgress(event.nativeEvent["http://3.34.181.178/mypage/login"]) }

            // onMessage ... :: webview에서 온 데이터를 event handler로 잡아서 logInProgress로 전달
            />
          </View>
        );
      
    };
export default kakaoLogin
