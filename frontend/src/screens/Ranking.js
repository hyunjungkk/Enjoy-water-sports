import React from 'react';
import { TouchableWithoutFeedback,Keyboard,ScrollView } from 'react-native';
import styled from 'styled-components/native';
import { Button } from '../components';
import { KeyboardAwareScrollView } from 'react-native-keyboard-aware-scroll-view';
import { Dimensions } from 'react-native';
import { StyleSheet, Text,View } from 'react-native';
import { Image} from 'react-native';

import Swiper from 'react-native-swiper/src';
import { FlatList, TouchableOpacity } from 'react-native';
import Hr from "react-native-hr-plus";

const { width } = Dimensions.get('window')

 
const styles = {
  wrapper: {
    
  },

  text: {
    color: '#D8D8D8'
  },
  
  slide: {
    justifyItems: 'center',
    alignItems: 'center',
    backgroundColor: 'transparent',
    marginTop : 20,
    marginBottom: 40
  },

  listImage: {
    flexDirection:'row',
    marginBottom:50,
    marginTop:20,
  },

  
  listItem: {
    borderRadius:2,
    paddingLeft:20,
    justifyContent:'center',

  },

  image: {
    width: 360,
    height: 150,
    resizeMode: 'contain',
    justifyContent: 'center',
    alignItems: 'center',
    borderRadius:5,
  },
/*
  listItem: {
    height: 90,
    justifyContent:'center',
    alignItems:'center'
  }
  */
}

const apiUrl = "http://3.34.181.178/";

const Container = styled.View`
    flex : 1;
    background-color : ${({ theme }) => theme.background};
    padding : 30px;
`;

const state =[
    {"id":"1. ","name":"양양 게스트 하우스","tag":"#제주 #익스트림","picture":"../images/leisure_surfing.jpg"},
    {"id":"2. ","name":"중문서핑스쿨","tag":"★★★★☆ 4.6", "picture":"../images/leisure_surfing.jpg"},
    {"id":"3. ","name":"월정리 해변","tag":"★★★★☆ 4.6 (5,727)", "picture":"../images/leisure_surfing.jpg"},
  ];

  function getRanking({}){
    /*
    const access = cookies.get("access_token");
    const config = {
      headers: {
        Authorization: `Bearer ${access}`,
      },
    };
    */
    //const magazineId = 2
    //axios.get(`${apiUrl}community/mz/${magazineId}`)
    axios.get(`${apiUrl}rank`)
        .then(function (response) {
        // response.id 

        if(response.data.count > 0 ) {
          //renderFunction
         // console.log('response: '+response);
          //navigate("/searchlist",{state:response.data});
        const magazineList = response.results.title;
          //setLists(response.data)
        
          

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


  function Ranking_Item({ item }) {
    return (
      <View style={styles.listImage}>
      <Image source={require('../images/leisure_fishing.jpg')}  style={{width:120, height:120}} />
      <View style={styles.listItem}>
          <Text style={{color:"#595959", fontWeight:"bold", fontSize: 18, marginBottom:5}}>{item.id + item.name}</Text>
          <Text style={{color:"grey", marginRight:50, fontSize: 16}}>{item.tag}</Text>
      </View>
      <Hr color="#B0AEAE" width={1} style={{marginTop: 30}}></Hr>                
    </View>
    /*
      <Container>
      <View>
        <View style={styles.listItem}>
        <Image source={require('../images/magazine_user.png')}  style={{width:50, height:50,borderRadius:30}} />
            <Text style={{fontSize:22, color:"#818182", fontWeight:"bold"}}>{item.id + item.name}</Text>
            <Text style={{fontSize:17, color:"#5887BF" }}>{item.tag}</Text>                  
        </View>
        <TouchableOpacity style={{height:50,width:50, justifyContent:"center",alignItems:"center"}}>
            <Text style={{color:"green"}}></Text>
        </TouchableOpacity>
        <Hr color="#B0AEAE" width={1} style={{flex: 0.1, width:'150%'}}></Hr>                
      </View>
      </Container>
      */
    );
  }

const Ranking = ({navigation, route}) => {
  ID=route.params.ID
    return (
            <Container>
              <View>
                <Text>{ID}</Text>
                <Image source={require('../images/ranking_cardnews.jpg')}
                style={{marginLeft: -30, marginTop: 20, marginBottom:30, width: 440, height: 140}} />
              </View>
                    <Text style={{marginTop:10, marginBottom:5, fontWeight: 'bold',fontSize:21,color: "#3b3b3b"}}>
                    <Text>위클리 인기 TOP </Text>
                </Text>
                <Text style={{ marginBottom:20,fontSize:14, color:"#595959"}}>
                  <Text>최근 1주간 별점이 가장 높았어요</Text>
                </Text>

                <View style={{flex: 2.3}}>
                    <FlatList
                    style ={{width: 350}}
                    data={state}
                    renderItem={({ item }) => (<Ranking_Item item={item}/>)}
                    keyExtractor={item => item.id} 
                    />
                </View>
            </Container>


        /*
        <KeyboardAwareScrollView 
            contentContainerStyle = {{flex : 1}}
            extraScrollHeight = {20}
        >
        <TouchableWithoutFeedback>
        <Container>
            <Button title = "community" />
        </Container>
        </TouchableWithoutFeedback>
        </KeyboardAwareScrollView>
        */
    );
};


export default Ranking