import React from 'react';
import { TouchableWithoutFeedback,Keyboard, ScrollView, Linking,ImageBackground } from 'react-native';
import styled from 'styled-components/native';
import { Button } from '../components';
import { KeyboardAwareScrollView } from 'react-native-keyboard-aware-scroll-view';
import { Dimensions } from 'react-native';
import { StyleSheet, Text,View } from 'react-native';
import { Image } from 'react-native'

import Spot from './Spot';
import Community from './Community';
import Swiper from 'react-native-swiper';
import { TouchableOpacity } from 'react-native-gesture-handler';

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
                <TouchableOpacity onPress={()=>navigation.navigate('Ranking')}>
                 <Image style={styles.image} source={require('../images/leisure_surfing.jpg')} />
                 </TouchableOpacity>
                </View>
                <View style={styles.slide}>
                <TouchableOpacity onPress={()=>navigation.navigate('Ranking')}>
                 <Image style={styles.image} source={require('../images/spot_1_ocean.jpg')} />
                </TouchableOpacity>
                </View>
                 <View style={styles.slide}>
                <TouchableOpacity onPress={()=>navigation.navigate('Ranking')}>
                <Image style={styles.image} source={require('../images/spot_2_sea.jpg')} />
                </TouchableOpacity>
                </View>
                <View style={styles.slide}>
                <TouchableOpacity onPress={()=>navigation.navigate('Ranking')}>
                 <Image style={styles.image} source={require('../images/spot_2_sea.jpg')} />
                 </TouchableOpacity>
                </View>
                 <View style={styles.slide}>
                  <TouchableOpacity>
                <Image style={styles.image} source={require('../images/spot_1_ocean.jpg')} />
                </TouchableOpacity>
                </View>
                <View style={styles.slide}>
                  <TouchableOpacity>
                <Image style={styles.image} source={require('../images/leisure_fishing.jpg')} />
                </TouchableOpacity>
                </View>
              </Swiper>
            </View>
            <View style={{ flex: 3.5 }}>
            <Text style={{fontSize:20, marginTop:30, marginBottom:10}}>
                <Text># 지금 가장</Text>
                <Text style={{color:'#ff0000'}}> HOT </Text>
                <Text>한 서핑 스팟</Text>
            </Text>
                <ScrollView horizontal={true} style={{marginBottom:20}} showsHorizontalScrollIndicator={false}>
                  <TouchableOpacity  onPress={()=>navigation.navigate(Spot)}>
                  <ImageBackground style={{width:150, height:150, margin:5}} imageStyle={styles.listImage} source={require('../images/leisure_fishing.jpg')}>
                    <View style={{position: 'absolute', top: 0, left: 0, right: 0, bottom: 0, justifyContent: 'center', alignItems: 'center'}}>
                    <Text style={{color:'#ffffff', fontSize:20}} >제주 중문 해수욕장</Text>
                    </View>
                  </ImageBackground>
                  </TouchableOpacity>
                  <TouchableOpacity>
                  <ImageBackground style={{width:150, height:150, margin:5}} imageStyle={styles.listImage} source={require('../images/spot_1_ocean.jpg')}>
                    <View style={{position: 'absolute', top: 0, left: 0, right: 0, bottom: 0, justifyContent: 'center', alignItems: 'center'}}>
                    <Text style={{color:'#ffffff', fontSize:20}}>제주 을왕리 해변</Text>
                    </View>
                  </ImageBackground>
                  </TouchableOpacity>
                  <TouchableOpacity>
                  <ImageBackground style={{width:150, height:150, margin:5}} imageStyle={styles.listImage} source={require('../images/leisure_fishing.jpg')}>
                    <View style={{position: 'absolute', top: 0, left: 0, right: 0, bottom: 0, justifyContent: 'center', alignItems: 'center'}}>
                    <Text style={{color:'#ffffff', fontSize:20}}>이호테우</Text>
                    </View>
                  </ImageBackground>
                  </TouchableOpacity>
                </ScrollView>
                <Text style={{fontSize:20, margin:10}}> #레저 안전하게 즐기기 </Text>
                <ScrollView horizontal={true} showsHorizontalScrollIndicator={false}>
                    <TouchableOpacity onPress={()=>Linking.openURL(`https://www.mof.go.kr/article/view.do?articleKey=26780&boardKey=17&menuKey=383&currentPageNo=1`)}>
                    <Image style={styles.listImage} source={require('../images/cardnews1.png')} />
                    </TouchableOpacity>
                    <TouchableOpacity onPress={()=>Linking.openURL(`https://www.mof.go.kr/article/view.do?articleKey=26778&searchSelect=title&boardKey=17&menuKey=383&currentPageNo=8`)}>
                     <Image style={styles.listImage} source={require('../images/cardnews2.png')} />
                    </TouchableOpacity>
                     <Image style={styles.listImage} source={require('../images/leisure_fishing.jpg')} />
                    <Image style={styles.listImage} source={require('../images/spot_1_ocean.jpg')} />
                </ScrollView>
                </View>
                <View style={{flex:0.3, backgroundColor:'#6da7ed', width:width-35, margin:10, borderRadius:15, marginTop:20}}>
                <TouchableOpacity onPress={()=>navigation.navigate('Community')}>
                    <Text style={{marginTop:10, marginBottom:15, marginLeft:20, color:'#ffffff', fontSize:20}}>해양 쓰레기 챌린지</Text>
                    <Text style={{marginBottom:5, marginLeft:20, color:'#ffffff', fontSize:15}}>해양 스포츠를 즐기고, 쓰레기를 정리한 사진을 찍어서</Text>
                    <Text style={{marginBottom:15, marginLeft:20, color:'#ffffff', fontSize:15}}>공유하면 추첨을 통해 서핑 강습권을 드려요!</Text>
                    </TouchableOpacity>
                </View>
            </Container>
        </ScrollView>
    );
};


export default Home