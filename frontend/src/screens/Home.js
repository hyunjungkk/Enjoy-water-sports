import React, {Component} from 'react';
import { TouchableWithoutFeedback,Keyboard, ScrollView, Linking,ImageBackground, FlatList } from 'react-native';
import styled from 'styled-components/native';
import { Button } from '../components';
import { KeyboardAwareScrollView } from 'react-native-keyboard-aware-scroll-view';
import { Dimensions } from 'react-native';
import { StyleSheet, Text,View } from 'react-native';
import { AppRegistry, Image } from 'react-native'
import axios from 'axios';
import Spot from './Spot';
import Community from './Community';
import Swiper from 'react-native-swiper';
import { TouchableOpacity } from 'react-native-gesture-handler';
import { useState } from 'react';

const { width } = Dimensions.get('window')


const styles = {
  wrapper: {},
  slide: {
    height: 250,
    width,
    justifyContent: 'center',
    backgroundColor: 'transparent',
    marginTop : 20,
    marginBottom: 40
  },
  image: {
    width,
    height:250
  },
  paginationStyle: {
    position: 'absolute',
    bottom: 10,
    right: 10
  },
  paginationText: {
    color: 'white',
    fontSize: 15
  },
  listImage:{
    borderRadius:15,
    height:150,
    width:150,
    margin:5
  }
}

const state1 =[
  {"add1":"강원도 양양군 손양면 동호리 141-26","cat3":"A01011200","contentid":"125716","contenttypeid":"12","uri":"http://tong.visitkorea.or.kr/cms/resource/48/2745248_image2_1.jpg","sigungucode":"7","title":"동호해변(양양)"},
  {"add1":"제주특별자치도 서귀포시 중문관광로72번길","cat3":"A01011200","contentid":"126449","contenttypeid":"12","uri":"http://tong.visitkorea.or.kr/cms/resource/99/2729999_image2_1.jpg","sigungucode":"3","title":"중문·색달 해변"},
  {"add1":"제주특별자치도 제주시 구좌읍 해맞이해안로 480-1","cat3":"A01011200","contentid":"1918639","contenttypeid":"12","uri":"http://tong.visitkorea.or.kr/cms/resource/15/1831415_image2_1.jpg","sigungucode":"4","title":"월정리해변"},
  {"add1":"제주특별자치도 제주시 도리로","cat3":"A01011200","contentid":"126448","contenttypeid":"12","uri":"http://tong.visitkorea.or.kr/cms/resource/86/2799686_image2_1.jpg","sigungucode":"4","title":"이호테우해변"},
  {"add1":"제주특별자치도 서귀포시 막숙포로","cat3":"A01011300","contentid":"127048","contenttypeid":"12","uri":"http://tong.visitkorea.or.kr/cms/resource/70/1618770_image2_1.jpg","sigungucode":"3","title":"문섬/섶섬/범섬/새섬"},
  {"add1":"제주특별자치도 제주시 구좌읍 행원리","cat3":"A01011200","contentid":"2837222","contenttypeid":"12","uri":"http://tong.visitkorea.or.kr/cms/resource/13/2837213_image2_1.jpg","sigungucode":"4","title":"코난해변"},
  {"add1":"부산광역시 수영구 광안해변로 219","cat3":"A01011200","contentid":"126078","contenttypeid":"12","uri":"http://tong.visitkorea.or.kr/cms/resource/48/2745248_image2_1.jpg","sigungucode":"12","title":"광안리해수욕장"},
  {"add1":"경상북도 포항시 북구 해안로 95","cat3":"A01011200","contentid":"127698","contenttypeid":"12","uri":"http://tong.visitkorea.or.kr/cms/resource/04/2738504_image2_1.jpg","sigungucode":"23","title":"영일대해수욕장"},
  {"add1":"강원도 인제군 기린면 북리","cat3":"A01011800","contentid":"125627","contenttypeid":"12","uri":"http://tong.visitkorea.or.kr/cms/resource/66/2616266_image2_1.bmp","sigungucode":"10","title":"내린천 포트홀 (강원평화지역 국가지질공원)"},
  {"add1":"경상남도 산청군 산청읍 산청대로","cat3":"A01011800","contentid":"127633","contenttypeid":"12","uri":"http://tong.visitkorea.or.kr/cms/resource/26/2775426_image2_1.jpg","sigungucode":"9","title":"경호강"},
];

const state2 =[
  {"add1":"강원도 삼척시 근덕면 장호리","cat3":"A01011200","contentid":"125711","contenttypeid":"12","uri":"http://tong.visitkorea.or.kr/cms/resource/61/2642261_image2_1.jpg","sigungucode":"4","title":"장호해수욕장"},
  {"add1":"제주특별자치도 제주시 한경면 판포리 2877-3","cat3":"A01011400","contentid":"2785869","contenttypeid":"12","uri":"http://tong.visitkorea.or.kr/cms/resource/12/2792112_image2_1.jpg","sigungucode":"4","title":"판포포구"},
  {"add1":"제주특별자치도 서귀포시 막숙포로","cat3":"A01011300","contentid":"127048","contenttypeid":"12","uri":"http://tong.visitkorea.or.kr/cms/resource/70/1618770_image2_1.jpg","sigungucode":"3","title":"문섬/섶섬/범섬/새섬"},
  {"add1":"제주특별자치도 제주시 구좌읍 행원리","cat3":"A01011200","contentid":"2837222","contenttypeid":"12","uri":"http://tong.visitkorea.or.kr/cms/resource/13/2837213_image2_1.jpg","sigungucode":"4","title":"코난해변"},
  {"add1":"강원도 인제군 기린면 북리","cat3":"A01011800","contentid":"125627","contenttypeid":"12","uri":"http://tong.visitkorea.or.kr/cms/resource/66/2616266_image2_1.bmp","sigungucode":"10","title":"내린천 포트홀 (강원평화지역 국가지질공원)"},
  {"add1":"경상남도 산청군 산청읍 산청대로","cat3":"A01011800","contentid":"127633","contenttypeid":"12","uri":"http://tong.visitkorea.or.kr/cms/resource/26/2775426_image2_1.jpg","sigungucode":"9","title":"경호강"},
  {"add1":"제주특별자치도 제주시 구좌읍 해맞이해안로 480-1","cat3":"A01011200","contentid":"1918639","contenttypeid":"12","uri":"http://tong.visitkorea.or.kr/cms/resource/15/1831415_image2_1.jpg","sigungucode":"4","title":"월정리해변"},
  {"add1":"제주특별자치도 제주시 도리로","cat3":"A01011200","contentid":"126448","contenttypeid":"12","uri":"http://tong.visitkorea.or.kr/cms/resource/86/2799686_image2_1.jpg","sigungucode":"4","title":"이호테우해변"},
  {"add1":"부산광역시 수영구 광안해변로 219","cat3":"A01011200","contentid":"126078","contenttypeid":"12","uri":"http://tong.visitkorea.or.kr/cms/resource/48/2745248_image2_1.jpg","sigungucode":"12","title":"광안리해수욕장"},
  {"add1":"경상북도 포항시 북구 해안로 95","cat3":"A01011200","contentid":"127698","contenttypeid":"12","uri":"http://tong.visitkorea.or.kr/cms/resource/04/2738504_image2_1.jpg","sigungucode":"23","title":"영일대해수욕장"},
];
const state3 =[
  {"add1":"서울특별시 서초구 신반포로11길 40 한강공원 반포 안내센터","cat3":"A02020700","contentid":"970138","contenttypeid":"12","uri":"http://tong.visitkorea.or.kr/cms/resource/16/2385816_image2_1.jpg","sigungucode":"15","title":"반포한강공원"},
  {"add1":"부산광역시 해운대구 해운대해변로 264","cat3":"A01011200","contentid":"126081","contenttypeid":"12","uri":"http://tong.visitkorea.or.kr/cms/resource/75/2648975_image2_1.jpg","sigungucode":"16","title":"해운대해수욕장"},
  {"add1":"부산광역시 수영구 광안해변로 219","cat3":"A01011200","contentid":"126078","contenttypeid":"12","uri":"http://tong.visitkorea.or.kr/cms/resource/48/2745248_image2_1.jpg","sigungucode":"12","title":"광안리해수욕장"},
  {"add1":"경상북도 포항시 북구 해안로 95","cat3":"A01011200","contentid":"127698","contenttypeid":"12","uri":"http://tong.visitkorea.or.kr/cms/resource/04/2738504_image2_1.jpg","sigungucode":"23","title":"영일대해수욕장"},
  {"add1":"강원도 인제군 기린면 북리","cat3":"A01011800","contentid":"125627","contenttypeid":"12","uri":"http://tong.visitkorea.or.kr/cms/resource/66/2616266_image2_1.bmp","sigungucode":"10","title":"내린천 포트홀 (강원평화지역 국가지질공원)"},
  {"add1":"경상남도 산청군 산청읍 산청대로","cat3":"A01011800","contentid":"127633","contenttypeid":"12","uri":"http://tong.visitkorea.or.kr/cms/resource/26/2775426_image2_1.jpg","sigungucode":"9","title":"경호강"},
  {"add1":"제주특별자치도 제주시 구좌읍 해맞이해안로 480-1","cat3":"A01011200","contentid":"1918639","contenttypeid":"12","uri":"http://tong.visitkorea.or.kr/cms/resource/15/1831415_image2_1.jpg","sigungucode":"4","title":"월정리해변"},
  {"add1":"제주특별자치도 제주시 도리로","cat3":"A01011200","contentid":"126448","contenttypeid":"12","uri":"http://tong.visitkorea.or.kr/cms/resource/86/2799686_image2_1.jpg","sigungucode":"4","title":"이호테우해변"},
  {"add1":"제주특별자치도 서귀포시 막숙포로","cat3":"A01011300","contentid":"127048","contenttypeid":"12","uri":"http://tong.visitkorea.or.kr/cms/resource/70/1618770_image2_1.jpg","sigungucode":"3","title":"문섬/섶섬/범섬/새섬"},
  {"add1":"제주특별자치도 제주시 구좌읍 행원리","cat3":"A01011200","contentid":"2837222","contenttypeid":"12","uri":"http://tong.visitkorea.or.kr/cms/resource/13/2837213_image2_1.jpg","sigungucode":"4","title":"코난해변"},
];
const state4 =[
  {"add1":"강원도 영월군 영월읍 동강로 826","cat3":"A01011800","contentid":"126807","contenttypeid":"12","uri":"http://tong.visitkorea.or.kr/cms/resource/55/765455_image2_1.jpg","sigungucode":"8","title":"동강(영월)"},
  {"add1":"경기도 포천시 이동면 도평리 35","cat3":"A01010900","contentid":"125492","contenttypeid":"12","uri":"http://tong.visitkorea.or.kr/cms/resource/55/2663855_image2_1.jpg","sigungucode":"29","title":"백운계곡 (한탄강 국가지질공원)"},
  {"add1":"강원도 인제군 기린면 북리","cat3":"A01011800","contentid":"125627","contenttypeid":"12","uri":"http://tong.visitkorea.or.kr/cms/resource/66/2616266_image2_1.bmp","sigungucode":"10","title":"내린천 포트홀 (강원평화지역 국가지질공원)"},
  {"add1":"경상남도 산청군 산청읍 산청대로","cat3":"A01011800","contentid":"127633","contenttypeid":"12","uri":"http://tong.visitkorea.or.kr/cms/resource/26/2775426_image2_1.jpg","sigungucode":"9","title":"경호강"},
  {"add1":"제주특별자치도 제주시 구좌읍 해맞이해안로 480-1","cat3":"A01011200","contentid":"1918639","contenttypeid":"12","uri":"http://tong.visitkorea.or.kr/cms/resource/15/1831415_image2_1.jpg","sigungucode":"4","title":"월정리해변"},
  {"add1":"제주특별자치도 제주시 도리로","cat3":"A01011200","contentid":"126448","contenttypeid":"12","uri":"http://tong.visitkorea.or.kr/cms/resource/86/2799686_image2_1.jpg","sigungucode":"4","title":"이호테우해변"},
  {"add1":"제주특별자치도 서귀포시 막숙포로","cat3":"A01011300","contentid":"127048","contenttypeid":"12","uri":"http://tong.visitkorea.or.kr/cms/resource/70/1618770_image2_1.jpg","sigungucode":"3","title":"문섬/섶섬/범섬/새섬"},
  {"add1":"제주특별자치도 제주시 구좌읍 행원리","cat3":"A01011200","contentid":"2837222","contenttypeid":"12","uri":"http://tong.visitkorea.or.kr/cms/resource/13/2837213_image2_1.jpg","sigungucode":"4","title":"코난해변"},
  {"add1":"부산광역시 수영구 광안해변로 219","cat3":"A01011200","contentid":"126078","contenttypeid":"12","uri":"http://tong.visitkorea.or.kr/cms/resource/48/2745248_image2_1.jpg","sigungucode":"12","title":"광안리해수욕장"},
  {"add1":"경상북도 포항시 북구 해안로 95","cat3":"A01011200","contentid":"127698","contenttypeid":"12","uri":"http://tong.visitkorea.or.kr/cms/resource/04/2738504_image2_1.jpg","sigungucode":"23","title":"영일대해수욕장"},
];


const renderPagination = (index, total, context) => {
    return (
      <View style={styles.paginationStyle}>
        <Text style={{ color: 'grey' }}>
          <Text style={styles.paginationText}>{index + 1}</Text>/{total}
        </Text>
      </View>
    )
  }

const Container = styled.View`
    flex : 1;
    justify-content : center;
    align-items : center;
    background-color : ${({ theme }) => theme.background};
    padding : 20px;
`;


const Home = ({navigation}) => {
/*
  const axiostest = (e)=>{
    const access = ''
    const config = {
      headers : {
        Authorization : `Bearer ${access}`,
      }
    }
    axios.get("http://3.34.181.178/tourapi/enterprise/?contentid=2501905&contenttypeid=28")
    .then(function (response) {
      const valor = JSON.stringify(response.data)
      console.log(valor)
      const report=JSON.parse(valor)
      console.log(report)
      const test=report.response.body.items.item[0].accomcountleports
      console.log('-----------')
      console.log(test)
      alert('test')
    })
  }
*/
  const itemlist=[state1, state2, state3, state4];
  const getRandomlist=(length)=>{
    return parseInt(Math.random()*length);
  }

  const _renderItem = ({item}) => (
    <TouchableOpacity  onPress={()=>navigation.navigate('Spot', {ID:item.title, SID:item.contentid, Uri:item.uri, TID:item.contenttypeid})}>
      <ImageBackground style={{width:150, height:150, margin:5}} imageStyle={styles.listImage} source={{uri:item.uri}}>
          <View style={{position: 'absolute', top: 0, left: 0, right: 0, bottom: 0, justifyContent: 'flex-end', alignItems: 'flex-start'}}>
              <Text style={{color:'#ffffff', fontSize:15,fontWeight: "bold", marginBottom:10, marginLeft:15}} >{item.title}</Text>
          </View>
      </ImageBackground>
    </TouchableOpacity>
    );
    return (
      <ScrollView showsVerticalScrollIndicator ={false}>
         <Container>
            <View style={{height:250}}>
                <Swiper
                 style={styles.wrapper}
                 renderPagination={renderPagination}
                 loop={true}
                 autoplay={true}
                >
                <View style={styles.slide}>
                <TouchableOpacity onPress={()=>navigation.navigate('Ranking', {ID:'A03030300'})}>
                 <Image style={styles.image} source={require('../images/banner_yort.png')} />
                 </TouchableOpacity>
                </View>
                <View style={styles.slide}>
                <TouchableOpacity onPress={()=>navigation.navigate('Ranking', {ID:'A03030200'})}>
                 <Image style={styles.image} source={require('../images/banner_kayak.png')} />
                </TouchableOpacity>
                </View>
                 <View style={styles.slide}>
                <TouchableOpacity onPress={()=>navigation.navigate('Ranking', {ID:'A03030400'})}>
                <Image style={styles.image} source={require('../images/banner_diving.png')} />
                </TouchableOpacity>
                </View>
                <View style={styles.slide}>
                <TouchableOpacity onPress={()=>navigation.navigate('Ranking', {ID:'A0303'})}>
                 <Image style={styles.image} source={require('../images/banner_surfing.png')} />
                 </TouchableOpacity>
                </View>
              </Swiper>
            </View>
            <View style={{ flex: 3.5 }}>
            <Text style={{fontSize:20, marginTop:30, marginBottom:10}}>
                <Text># 지금 가장</Text>
                <Text style={{color:'#ff0000'}}> HOT </Text>
                <Text>한 수상레저 스팟</Text>
            </Text>
                <FlatList 
                  data={itemlist[getRandomlist(itemlist.length)]}
                  renderItem={_renderItem}
                  horizontal = {true}
                  showsHorizontalScrollIndicator={false}
                  keyExtractor={(item) => item.id}
                />
                <Text style={{fontSize:20, marginTop:25}}> # 소중한 바다 우리가 지켜요 </Text>
                <ScrollView horizontal={true} showsHorizontalScrollIndicator={false}>
                    <TouchableOpacity onPress={()=>Linking.openURL(`https://www.instagram.com/p/CdXTL9WrY7x/?igshid=YmMyMTA2M2Y=`)}>
                    <Image style={styles.listImage} source={require('../images/cardnews1.png')} />
                    </TouchableOpacity>
                    <TouchableOpacity onPress={()=>Linking.openURL(`https://www.instagram.com/p/CeVbWUIlb88/?igshid=YmMyMTA2M2Y=`)}>
                     <Image style={styles.listImage} source={require('../images/cardnews2.png')} />
                    </TouchableOpacity>
                    <TouchableOpacity onPress={()=>Linking.openURL('https://www.instagram.com/p/Cd235hCl4fg/?igshid=YmMyMTA2M2Y=')}>
                     <Image style={styles.listImage} source={require('../images/cardnews3.png')} />
                    </TouchableOpacity>
                    <TouchableOpacity onPress={()=>Linking.openURL('https://www.instagram.com/p/Cd235hCl4fg/?igshid=YmMyMTA2M2Y=')}>
                    <Image style={styles.listImage} source={require('../images/cardnews4.png')} />
                    </TouchableOpacity>
                </ScrollView>
                </View>
                <View style={{flex:0.3, backgroundColor:'#6da7ed', width:width-35, margin:10, borderRadius:15, marginTop:20}}>
                <TouchableOpacity onPress={()=>Linking.openURL(`https://instagram.com/korea_mof?igshid=YmMyMTA2M2Y=`)}>
                    <Text style={{marginTop:10, marginBottom:15, marginLeft:20, color:'#ffffff', fontSize:20}}>해양수산부 인스타그램 바로 가기</Text>
                    <Text style={{marginBottom:5, marginLeft:20, color:'#ffffff', fontSize:15}}>안전한 물놀이 방법과 우리 바다를 지키는  </Text>
                    <Text style={{marginBottom:15, marginLeft:20, color:'#ffffff', fontSize:15}}>더 많은 방법이 궁금하다면?</Text>
                    </TouchableOpacity>
                </View>
            </Container>
        </ScrollView>
    );
};


export default Home