import React from 'react';
import {useState, useEffect} from 'react';
import { TouchableWithoutFeedback,Keyboard, SafeAreaView, View, FlatList, StyleSheet, Text, StatusBar, Image, TouchableOpacity, Alert } from 'react-native';
import styled from 'styled-components/native';
import { Button } from '../components';
import { KeyboardAwareScrollView } from 'react-native-keyboard-aware-scroll-view';
import axios from 'axios';
import AsyncStorage from "@react-native-async-storage/async-storage";

const Container = styled.View`
    flex : 1;
    justify-content : center;
    align-items : center;
    background-color : ${({ theme }) => theme.background};
    padding : 20px;
`;

const DATA = [
    {
      id: 'bd7acbea-c1b1-46c2-aed5-3ad53abb28ba',
      title: '하파서프',
      category: '숙박레저 패키지',
      location: '강릉',
      content: '서핑 강습 + 바베큐 파티 + 게스트하우스',
      imageUrl: '../images/fsa.jpg',
    },
    {
      id: '3ac68afc-c605-48d3-a4f8-fbd91aa97f63',
      title: '함덕해수욕장',
      category: '관광지',
      location: '제주',
      content: '검은모래해변, 유채꽃밭, 둘레길',
      imageUrl: '../images/fsa.jpg',
    },
    {
      id: '58694a0f-3da1-471f-bd96-145571e29d72',
      title: '방아머리해수욕장',
      category: '관광지',
      location: '대부도',
      content: '해수욕장, 해변',
      imageUrl: '../images/fsa.jpg',
    },
    {
      id: '58694a0f-3da1-471f-bd96-145571e29d72',
      title: '방아머리해수욕장',
      category: '관광지',
      location: '대부도',
      content: '해수욕장, 해변',
      imageUrl: '../images/fsa.jpg',
    },
    {
      id: '58694a0f-3da1-471f-bd96-145571e29d72',
      title: '방아머리해수욕장',
      category: '관광지',
      location: '대부도',
      content: '해수욕장, 해변',
      imageUrl: '../images/fsa.jpg',
    },
    {
      id: '58694a0f-3da1-471f-bd96-145571e29d72',
      title: '방아머리해수욕장',
      category: '관광지',
      location: '대부도',
      content: '해수욕장, 해변',
      imageUrl: '../images/fsa.jpg',
    },
    {
      id: '58694a0f-3da1-471f-bd96-145571e29d72',
      title: '방아머리해수욕장',
      category: '관광지',
      content: '해수욕장, 해변',
      imageUrl: '../images/fsa.jpg',
    },
  ];
  
  const Item = ({ item }) => (
    <TouchableOpacity onPress={()=>Alert.alert('이동')}>
    <View style={styles.item}>
        <Image style={styles.tinyLogo}
        source={{uri:item.thumbnail}}
        />
      <View style={styles.textcon}>
        <Text style={styles.title}>{item.title}</Text>
        <Text style={styles.overview}>#{item.overview}</Text>
      </View>
    </View>
    </TouchableOpacity>
  );

const Scrap_list = () => {
  const [DATA,setDATA] = useState([
    {
      "id":1,
      "title":"서핑 초보들은 모여라 !",
      "thumbnail":" nn",
      "overview":"초보 서퍼들을 위한 준비..",
      "bookmarkYn":true,
      "user_id":4,
      "mz_id":1
    },
  ]);

  useEffect(()=>{
    const access = ''

    AsyncStorage.getItem('access_token', (err, result) => {
      const config = {
        headers : {
          Authorization : `Bearer ${result}`,
        }
      }
      axios.get(`http://3.34.181.178/community/bookmarklist`,config)
          .then(function (response) {
          // response  
          if(response) {
            if(response.data.count > 0) {
              setDATA(response.data.results)
            }
          }
          else {
          
          }
      }).catch(function (error) {
          // 오류발생시 실행
          alert(error)
      }).then(function() {
          // 항상 실행
      });
    })
  },[]);


    const renderItem = ({ item }) => (
        <Item item={item} />
      );

    return (
        <SafeAreaView style={styles.container}>
      <FlatList
        data={DATA}
        renderItem={renderItem}
        keyExtractor={item => item.id}
      />
    </SafeAreaView>
    );
};

const styles = StyleSheet.create({
    container: {
      flex: 1,
      marginTop: StatusBar.currentHeight || 0,
    },
    item: {
      padding: 10,
      marginVertical: 8,
      marginHorizontal: 8,
      flexDirection: 'row',
      borderRadius: 3,
      flex: 1,
      borderTopColor: '#e0e0e0',
      borderTopWidth: 1,
    },
    itemcontent: {
      flex: 1,
      backgroundColor: '#e0e0e0',
      padding: 5,
      borderRadius: 5,
      marginLeft: 20,
      marginRight: 20,
    },
    textcon: {
      padding: 10,
      flex: 1,
    },
    title: {
      padding: 3,
      fontSize: 17,
    },
    category: {
      padding: 3,
      fontSize: 15,
      color: 'gray'
    },
    content: {
      padding: 3,
      fontSize: 15,
      flex: 1,
      width: '100%',
    },
    tinyLogo: {
      width: 120,
      height: 100,
      marginVertical: 3,
      borderRadius: 2,
    },
  });

export default Scrap_list
