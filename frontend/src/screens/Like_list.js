import React from 'react';
import {useState, useEffect} from 'react';
import { TouchableWithoutFeedback, Keyboard, SafeAreaView, View, FlatList, StyleSheet, Text, StatusBar, Image, TouchableOpacity, Alert, navigation } from 'react-native';
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



const Like_list = ({navigation}) => {
  const [access,setaccess]=useState('')
  const [DATA,setDATA] = useState([
    {
      "id": 2,
      "contentid": "125716",
      "contenttypeid": "12",
      "title": "좋아요 리스트가 없습니다.",
      "thumbnail": "http://tong.visitkorea.or.kr/cms/resource/48/2745248_image2_1.jpg",
      "overview": "동호해변(양양)을 추천해드릴게요.",
      "likeYn": true,
      "user_id": 8,
    },
  ]);

  useEffect(()=>{
    

    AsyncStorage.getItem('access_token', (err, result) => {
      setaccess(result)
      const config = {
        headers : {
          Authorization : `Bearer ${result}`,
        }
      }
      axios.get(`http://3.34.181.178/community/likelist`,config)
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

  const Item = ({ item }) => (
    <TouchableOpacity onPress={()=>navigation.navigate('Enterprise',{typeid:item.contenttypeid, conid:item.contentid, title:item.title, img:item.thumbnail, access:access})}>
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
      padding: 12,
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

export default Like_list
