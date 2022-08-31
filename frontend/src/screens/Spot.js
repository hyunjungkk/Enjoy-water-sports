import React, {useState, useEffect} from 'react';
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
import axios from 'axios';
import { Linking } from 'react-native';

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
  text4:{
    fontSize : 15,
    marginLeft:15,
    margin :5,
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
  {id: '1', title: 'Fist Item', t:'1233'},
  {id: '2', title: 'Second Item', t:'1234'},
  {id: '3', title: 'Third Item', t:'1235'},
  {id: '4', title: 'Forth Item', t:'1236'},
  {id: '5', title: 'Fifth Item', t:'1237'},
  {id: '6', title: 'Sixth Item', t:'1238'},
];



const Spot = ({navigation, route}) => {
  const Item = ({ title }) => (
    <View style={styles.item}>
      <TouchableOpacity onPress={()=>navigation.navigate('Enterprise')}>
      <Text style={styles.title}>{title}</Text>
      </TouchableOpacity>
    </View>
  );

  ID=route.params.ID
  const name=route.params.ID
  const sid=route.params.SID
  const uri=route.params.Uri
  const tid=route.params.TID

  let query= "http://3.34.181.178/tourapi/spot/?contentid={}&contenttypeid=*"
  query=query.replace('{}',sid)
  query=query.replace('*',tid)
  
  const [address,setaddress]=useState('');
  const [homepage,sethomepage]=useState('');
  const [overview,setoverview]=useState('');

  const axiostest= async ()=>{
    const access = ''
    const config = {
      headers : {
        Authorization : `Bearer ${access}`,
      }
    }
    axios.get(query)
    .then(function (response) {
      const valor = JSON.stringify(response.data)
      const report=JSON.parse(valor)
      const add=report.response.body.items.item[0].addr1
      const homepage=report.response.body.items.item[0].homepage
      const overview=report.response.body.items.item[0].overview
      setaddress(add)
      sethomepage(homepage)
      setoverview(overview)
    })
  }

  let kakao_query='https://dapi.kakao.com/v2/local/search/keyword.json?query={}'
  kakao_query=kakao_query.replace('{}',name)
  const [pid, setPid] = useState('');
  const [px,setPx]=useState(0);
  const [py,setPy]=useState(0);
  const callApi = async ()=> {
      try{
          setPid(null);
          const res=await axios.get (
                  query,
                  {
                      headers:{
                          Authorization:"KakaoAK 62e37fc1387a408315981029aef3f771",
                      },
                  },
              );
              const location=res.data.documents[0];
              console.log(location)
              const p_id=location.id
              const p_x=location.x
              const p_y=location.y
              setPid(p_id)
              setPx(p_x)
              setPy(p_y)
      }catch(error){
          console.log(error.message);
      }
  };

  useEffect(()=>{
      callApi();
      axiostest();
  },[]);

  console.log(pid)

  let p_id=String(pid)
  let Kakao_map='kakaomap://place?id={}'
  Kakao_map=Kakao_map.replace('{}',p_id)
  let p_x=Number(px)
  let p_y=Number(py)
  let x=Number(p_x.toFixed(4))
  let y=Number(p_y.toFixed(4))

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
  
  const [line, setLine] = useState(4);
  const [isActivated, setIsActivated] = useState(false);

  const handleLine = () => {
    isActivated ? setLine(4) : setLine(Number.MAX_SAFE_INTEGER);
    setIsActivated(prev => !prev);
  }
    return (
        <ScrollView showsVerticalScrollIndicator ={false}>
            <Container>
                <View style={{flexDirection: 'row', flex:0.5, alignItems:'flex-start'}}>
                    <Text style={{fontSize:20, margin:10, marginTop:30, marginRight:width/2-20}}>{ID}</Text>
                    <TouchableOpacity onPress={onIncrease} >
                    <Icon name={iconname} size={25}  color='red' style={{margin:10, marginTop:30}}/>
                    </TouchableOpacity>
                </View>
                <View style={{flex:1, marginBottom:20}}>
                    <Image style={{width:width-30, height:250, margin:5}} imageStyle={styles.listImage} source={{uri}}/>
                    <View style={{flexDirection: 'row', flex:0.5, alignItems:'flex-start'}}>
                    <Text style={styles.text}>이용 정보</Text>
                    <TouchableOpacity onPress={()=>Linking.openURL(Kakao_map)}>
                    <Text style={{marginLeft:width-250, marginTop:10, marginBottom:10, backgroundColor:'#b8b4ad',color:'#ffffff',fontSize:17}}>카카오맵에서 보기</Text>
                    </TouchableOpacity>
                    </View>
                    <Text style={styles.text4}>
                    <Text style={styles.text4}> 주소 : </Text>
                    <Text >{address}</Text>
                    </Text>
                    <Text style={styles.text4}>{homepage}</Text>
                    <View style={{ flex:0.5, alignItems:'flex-start'}}>
                    <Text style={styles.text}>개요 </Text>
                      <Text style={styles.text2} numberOfLines={line} ellipsizeMode="tail" onPress={()=>handleLine()}>{overview}</Text>
                    </View>
                </View>
                <SwiperView
                  tabList={tabListData}>
                  </SwiperView>
            </Container>
        </ScrollView>

    );
};

/*<View style={{flex:1, position:'relative',left: 10, width}}>
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
*/

export default Spot;