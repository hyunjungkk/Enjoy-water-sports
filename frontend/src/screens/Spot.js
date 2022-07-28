import React from 'react';
import { TouchableWithoutFeedback,Keyboard } from 'react-native';
import styled from 'styled-components/native';
import { Button } from '../components';
import { KeyboardAwareScrollView } from 'react-native-keyboard-aware-scroll-view';
<<<<<<< 822c503820606033d8232e4dcc726f05221df26b
=======
import SwiperView from 'react-native-swiper-view';
import Enterprise from './Enterprise';
>>>>>>> Spot 업데이트


const Container = styled.View`
    flex : 1;
    justify-content : center;
    align-items : center;
    background-color : ${({ theme }) => theme.background};
    padding : 20px;
`;

const Spot = ({navigation}) => {

    return (
<<<<<<< 822c503820606033d8232e4dcc726f05221df26b
        <KeyboardAwareScrollView 
            contentContainerStyle = {{flex : 1}}
            extraScrollHeight = {20}
        >
        <TouchableWithoutFeedback>
        <Container>
            <Button title = "spot" onPress={()=>navigation.navigate('Enterprise')}/>
        </Container>
        </TouchableWithoutFeedback>
        </KeyboardAwareScrollView>
=======
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
>>>>>>> Spot 업데이트
    );
};


export default Spot