import React, {useState} from 'react';
import { TouchableWithoutFeedback,Keyboard,ImageBackground, FlatList  } from 'react-native';
import styled from 'styled-components/native';
import { Button } from '../components';
import Icon from 'react-native-vector-icons/Ionicons';
import { Image } from 'react-native';
import { StyleSheet, Text,View } from 'react-native';
import { ScrollView, TouchableOpacity } from 'react-native-gesture-handler';
import { Dimensions } from 'react-native';
import { KeyboardAwareScrollView } from 'react-native-keyboard-aware-scroll-view';
import SwiperView from 'react-native-swiper-view';

const { width } = Dimensions.get('window');

   
const Container = styled.View`
    flex : 1;
    justify-content : center;
    align-items : center;
    background-color : ${({ theme }) => theme.background};
    padding : 20px;
`;


const styles = {
  image: {
    width:width-20,
    height:250
  },
  listImage:{
    borderRadius:15,
    height:150,
    width:150,
    margin:5
  },
  text:{
      fontSize : 20,
      margin :15,
      fontWeight: "bold"
  },
  text1:{
      fontSize : 18,
      marginLeft:15,
      margin:5
  },
  text2:{
      fontSize : 12,
      marginLeft:15,
      margin:5,
      color:'#bfbfbf'
  },
  text3:{
      fontSize : 20,
      margin :15,
  },
  item: {
    backgroundColor: '#6da7ed',
    padding: 20,
    marginVertical: 8,
    marginHorizontal: 16,
  },
  title: {
    fontSize: 15,
  },
  src: {
    height :15,
    width : width-30
  }
}


const DATA = [
  {id: '1', title: 'Fist Item', },
  {id: '2', title: 'Second Item',},
  {id: '3', title: 'Third Item', },
  {id: '4', title: 'Forth Item', },
  {id: '5', title: 'Fifth Item', },
  {id: '6', title: 'Sixth Item', },
];

const Item = ({ title }) => (
  <View style={styles.item}>
    <Text style={styles.title}>{title}</Text>
  </View>
);


const Spot = ({navigation}) => {

  const renderItem = ({ item }) => (
    <Item title={item.title}/>
  );
  
  const tabListData = [
    { name: '전체', component: <FlatList data={DATA} renderItem={renderItem} style={{width:width}} keyExtractor={item => item.id}/> },
    {name: '숙소', component: <FlatList data={DATA} renderItem={renderItem} keyExtractor={item => item.id}/>},
    { name: '맛집', component: <FlatList data={DATA} renderItem={renderItem} keyExtractor={item => item.id}/> },
    { name: '대여', component: <FlatList data={DATA} renderItem={renderItem} keyExtractor={item => item.id}/> },
    { name: '장소', component: <FlatList data={DATA} renderItem={renderItem} keyExtractor={item => item.id}/> },
  ];
  
  const [num, setNum] = useState(0);
  
  const onIncrease = () => {
    setNum(num + 1);
  }
  
  if (num%2===0) {
    iconname='bookmark-outline';
  } else {
    iconname='bookmark';
    alert('북마크에 저장되었습니다.');
  }
  
    return (
        <ScrollView showsVerticalScrollIndicator ={false}>
            <Container>
                <View style={{flexDirection: 'row', flex:0.5, alignItems:'flex-start'}}>
                    <Text style={{fontSize:20, margin:10, marginTop:30, marginRight:width/2-20}}>중문 해수욕장</Text>
                    <TouchableOpacity onPress={onIncrease} >
                    <Icon name={iconname} size={25}  color='red' style={{margin:10, marginTop:30}}/>
                    </TouchableOpacity>
                </View>
                <View style={{flex:1}}>
                    <Image style={styles.image} source={require('../images/spot_1_ocean.jpg')} />
                    <Text style={styles.text}>이용 정보</Text>
                    <Text style={styles.text1}>주소 : </Text>
                    <Text style={styles.text1}>연락처 :  </Text>
                    <Text style={styles.text2}>중문해수욕장은 아름다운 바닷가 풍경과 ~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~ </Text>
                </View>
                <View style={{flex:1, position:'relative',left: 10, width}}>
                    <Text style={styles.text3}>당신이 찾던 서핑</Text>
                    <ScrollView horizontal={true} style={{marginBottom:20}} showsHorizontalScrollIndicator={false}>
                  <TouchableOpacity onPress={()=>navigation.navigate('Enterprise')}>
                  <ImageBackground style={{width:150, height:150, margin:5}} imageStyle={styles.listImage} source={require('../images/leisure_fishing.jpg')}>
                    <View style={{position: 'absolute', top: 0, left: 0, right: 0, bottom: 0, justifyContent: 'center', alignItems: 'center'}}>
                    <Text style={{color:'#ffffff', fontSize:20}} >중문서핑스쿨</Text>
                    </View>
                  </ImageBackground>
                  </TouchableOpacity>
                  <TouchableOpacity>
                  <ImageBackground style={{width:150, height:150, margin:5}} imageStyle={styles.listImage} source={require('../images/spot_1_ocean.jpg')}>
                    <View style={{position: 'absolute', top: 0, left: 0, right: 0, bottom: 0, justifyContent: 'center', alignItems: 'center'}}>
                    <Text style={{color:'#ffffff', fontSize:20}}>양양서핑월드</Text>
                    </View>
                  </ImageBackground>
                  </TouchableOpacity>
                  <TouchableOpacity>
                  <ImageBackground style={{width:150, height:150, margin:5}} imageStyle={styles.listImage} source={require('../images/leisure_fishing.jpg')}>
                    <View style={{position: 'absolute', top: 0, left: 0, right: 0, bottom: 0, justifyContent: 'center', alignItems: 'center'}}>
                    <Text style={{color:'#ffffff', fontSize:20}}>제주 서핑 스쿨</Text>
                    </View>
                  </ImageBackground>
                  </TouchableOpacity>
                </ScrollView>
                </View>
                <SwiperView
                  tabList={tabListData}>
                  </SwiperView>
            </Container>
        </ScrollView>

    );
};


export default Spot;