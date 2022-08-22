import React from 'react';
import { TouchableWithoutFeedback,Keyboard,ScrollView, TouchableOpacity } from 'react-native';
import styled from 'styled-components/native';
import { KeyboardAwareScrollView } from 'react-native-keyboard-aware-scroll-view';
import { Dimensions } from 'react-native';
import { StyleSheet, Text,View, Button } from 'react-native';
import { Image} from 'react-native';
import Home from './Home';
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

  
const Login = ({}) => {
    function LogInProgress(data){
        // access code는 url에 붙어 장황하게 날아온다.
        // substringd으로 url에서 code=뒤를 substring하면 된다.
        const exp = "ZcAb8tpNGSZpDU1ZKo0jvMHXtVr7nFtAymofbnuiJ1vVUCSs0tFKoM3ZvfrkE4rJBRLwKAo9dJgAAAGCsAQr_Q";
      	var condition = data.indexOf(exp);
      	if(condition!= -1){
            var request_code = data.substring(condition+exp.length);
            console.log("access code :: " + request_code);
            requestToken(request_code);
      	  }
        };

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
    
     
    
            }).catch(function (error) {
    
                console.log('error', error);
    
            });
    
        };
    
 
        
    //...
    return (
          <View style={{flex: 1}}>
            <WebView
                originWhitelist={['*']}
                scalesPageToFit={false}
                style={{ marginTop: 30 }}
                source = {{uri : 'https://kauth.kakao.com/oauth/authorize?response_type=code&client_id=5b48efc86f980599330df1d6a153e1bf&redirect_uri=http://localhost:3000/accounts/kakao/login/callback/'}}
                injectedJavaScript={runFirst}

                javaScriptEnabled={true}

                onMessage={(event) => { LogInProgress(event.nativeEvent["url"]); }}

            // onMessage ... :: webview에서 온 데이터를 event handler로 잡아서 logInProgress로 전달
            />
          </View>
        );
        };

        /*
const Login = ({navigation}) => {
//...
return (
    <View style={{ flex: 1 }}>

    <WebView

        originWhitelist={['*']}

        scalesPageToFit={false}

        style={{ marginTop: 30 }}

        source={{ uri: 'https://kauth.kakao.com/oauth/authorize?response_type=code&client_id={5b48efc86f980599330df1d6a153e1bf}&redirect_uri=http://localhost:3000/auth/kakao/callback' }}

        injectedJavaScript={runFirst}

        javaScriptEnabled={true}

        onMessage={(event) => { LogInProgress(event.nativeEvent["url"]); }}

    />

</View>
    );
    };

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
                <TouchableOpacity style={styles.button}>
                    <Image source={require('../images/kakao_logo.png')}  style={{width:30, height:30,marginRight:10}} />
                    <Text style={{color: '#3C1E1E', fontWeight: 'bold'}}>카카오톡으로 간편로그인</Text>
                </TouchableOpacity>

                <TouchableOpacity onPress={()=>navigation.navigate('Home')}>            
                    <Text style={{color: '#3C1E1E', fontWeight: 'bold'}}>Home</Text>
                </TouchableOpacity>
            </View>
        </Container>
        </TouchableWithoutFeedback>
        </KeyboardAwareScrollView>
    );
};
*/
export default Login