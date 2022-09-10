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
import AsyncStorage from "@react-native-async-storage/async-storage";
import { useContext } from 'react';
import { UserContext } from '../context/UserContext';
import { Linking } from 'react-native';
import { Platform } from 'react-native'

const { width } = Dimensions.get('window');

   
const Container = styled.View`
    flex : 1;
    justify-content : center;
    align-items : center;
    background-color : ${({ theme }) => theme.background};
    padding : 20px;
`;

const style = StyleSheet.create({
  shadow: {
      ...Platform.select({
          ios: { 
              shadowColor: '#000',
              background: '#ffffff',
             shadowOffset: { width: 10, height: 10, },
              shadowOpacity: 0.5,
             shadowRadius: 10,
             fontSize : 20,
              margin :15,
            fontWeight: "bold",
          },
          android: { 
            background: '#ffffff',
             elevation: 23,
             fontSize : 20,
             margin :15,
             color:'#ffffff',
             fontWeight: "bold",
          },
      })
  }
});


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
     
  },
  text3:{
      fontSize : 20,
      margin :15,
  },
  text5:{
    fontSize : 20,
      margin :15,
      fontWeight: "bold",
      color:'#ffffff',
      backgroundColor:'#E6E6E6'
},
  text4:{
    fontSize : 15,
    marginLeft:15,
    margin :5
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
  },
  text6:{
    fontSize : 15,
      margin :5,
      marginLeft:15,
      textDecorationLine:'underline'
  },
}






const Spot = ({navigation, route}) => {

  const name=route.params.ID
  const sid=route.params.SID
  const uri=route.params.Uri
  const tid=route.params.TID
  const area=route.params.Are
  const sigun=route.params.Sig


  const data = useContext(UserContext)
  const [access,setjwt]=useState('')
  useEffect(()=>{
    if(data.userdata){
      AsyncStorage.getItem('access_token', (err, result) => {
      setjwt(result)});
    }
  },[data.userdata]);

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
  /*레포츠 받아오기 */
  let all_query="http://3.34.181.178/tourapi/spotalltype?areacode=@&sigungucode=*&contenttypeid=28"
  all_query=all_query.replace('@',area)
  all_query=all_query.replace('*',sigun)
  const [sports,setreports]=useState([])
  const axios_all= async ()=>{
    const access = ''
    const config = {
      headers : {
        Authorization : `Bearer ${access}`,
      }
    }
    axios.get(all_query)
    .then(function (response) {
      const valor = JSON.stringify(response.data)
      const report=JSON.parse(valor)
      setreports(report.response.body.items.item)
    })
  }

  /*숙박 받아오기*/
  let sleep_query="http://3.34.181.178/tourapi/spotalltype?areacode=@&sigungucode=*&contenttypeid=32"
  sleep_query=sleep_query.replace('@',area)
  sleep_query=sleep_query.replace('*',sigun)
  const [sleep,setsleep]=useState([])
  const axios_sleep= async ()=>{
    const access = ''
    const config = {
      headers : {
        Authorization : `Bearer ${access}`,
      }
    }
    axios.get(sleep_query)
    .then(function (response) {
      const valor = JSON.stringify(response.data)
      const report=JSON.parse(valor)
      setsleep(report.response.body.items.item)
    })
  }
  
  /* 음식점 받아오기*/
  let eat_query="http://3.34.181.178/tourapi/spotalltype?areacode=@&sigungucode=*&contenttypeid=39"
  eat_query=eat_query.replace('@',area)
  eat_query=eat_query.replace('*',sigun)
  const [eat,seteat]=useState([])
  const axios_eat= async ()=>{
    const access = ''
    const config = {
      headers : {
        Authorization : `Bearer ${access}`,
      }
    }
    axios.get(eat_query)
    .then(function (response) {
      const valor = JSON.stringify(response.data)
      const report=JSON.parse(valor)
      seteat(report.response.body.items.item)
    })
  }

  /* 행사/공연/축제 받아오기 */

  let fun_query="http://3.34.181.178/tourapi/spotalltype?areacode=@&sigungucode=*&contenttypeid=15"
  fun_query=fun_query.replace('@',area)
  fun_query=fun_query.replace('*',sigun)
  const [fun,setfun]=useState([])
  const axios_fun= async ()=>{
    const access = ''
    const config = {
      headers : {
        Authorization : `Bearer ${access}`,
      }
    }
    axios.get(fun_query)
    .then(function (response) {
      const valor = JSON.stringify(response.data)
      const report=JSON.parse(valor)
      setfun(report.response.body.items.item)
    })
  }

  const sampleimg="http://tong.visitkorea.or.kr/cms/resource/13/2837213_image2_1.jpg"
  const Item = ({ title, img, typeid, contentid}) => (
      
      <TouchableOpacity onPress={()=>navigation.navigate('Enterprise',{typeid:typeid, conid:contentid, title:title,img:img,access:access})}>
      {img===""?
      <ImageBackground style={{width:width-20,height:150, margin:10}} source={{uri:sampleimg}}>
        <View style={{flexDirection: 'column', flex:1, justifyContent:'flex-end', paddingTop:15}}>
        <Text style={style.shadow}>{title}</Text>
        </View>
      </ImageBackground>
      :<ImageBackground style={{width:width-20,height:150, margin:10}} source={{uri:img}}>
        <View style={{flexDirection: 'column', flex:1, justifyContent:'flex-end', paddingTop:15}}>
        <Text style={style.shadow}>{title}</Text>
        </View>
      </ImageBackground>}

      </TouchableOpacity>
  );

  const renderItem = ({ item }) => (
    <Item title={item.title} img={item.firstimage} typeid={item.contenttypeid} contentid={item.contentid}/>
  );


  const Item_32 = ({ title, img, typeid, contentid}) => (
      
    <TouchableOpacity onPress={()=>navigation.navigate('Enterprise_32',{typeid:typeid, conid:contentid, title:title,img:img,access:access})}>
    {img===""?
    <ImageBackground style={{width:width-20,height:150, margin:10}} source={{uri:sampleimg}}>
      <View style={{flexDirection: 'column', flex:1, justifyContent:'flex-end', paddingTop:15}}>
      <Text style={style.shadow}>{title}</Text>
      </View>
    </ImageBackground>
    :<ImageBackground style={{width:width-20,height:150, margin:10}} source={{uri:img}}>
      <View style={{flexDirection: 'column', flex:1, justifyContent:'flex-end', paddingTop:15}}>
      <Text style={style.shadow}>{title}</Text>
      </View>
    </ImageBackground>}

    </TouchableOpacity>
);

const renderItem_32 = ({ item }) => (
  <Item_32 title={item.title} img={item.firstimage} typeid={item.contenttypeid} contentid={item.contentid}/>
);
  

const Item_39 = ({ title, img, typeid, contentid}) => (
      
  <TouchableOpacity onPress={()=>navigation.navigate('Enterprise_39',{typeid:typeid, conid:contentid, title:title,img:img,access:access})}>
  {img===""?
  <ImageBackground style={{width:width-20,height:150, margin:10}} source={{uri:sampleimg}}>
    <View style={{flexDirection: 'column', flex:1, justifyContent:'flex-end', paddingTop:15}}>
    <Text style={style.shadow}>{title}</Text>
    </View>
  </ImageBackground>
  :<ImageBackground style={{width:width-20,height:150, margin:10}} source={{uri:img}}>
    <View style={{flexDirection: 'column', flex:1, justifyContent:'flex-end', paddingTop:15}}>
    <Text style={style.shadow}>{title}</Text>
    </View>
  </ImageBackground>}

  </TouchableOpacity>
);

const renderItem_39 = ({ item }) => (
<Item_39 title={item.title} img={item.firstimage} typeid={item.contenttypeid} contentid={item.contentid}/>
);

const Item_15 = ({ title, img, typeid, contentid}) => (
      
  <TouchableOpacity onPress={()=>navigation.navigate('Enterprise_15',{typeid:typeid, conid:contentid, title:title,img:img,access:access})}>
  {img===""?
  <ImageBackground style={{width:width-20,height:150, margin:10}} source={{uri:sampleimg}}>
    <View style={{flexDirection: 'column', flex:1, justifyContent:'flex-end', paddingTop:15}}>
    <Text style={style.shadow}>{title}</Text>
    </View>
  </ImageBackground>
  :<ImageBackground style={{width:width-20,height:150, margin:10}} source={{uri:img}}>
    <View style={{flexDirection: 'column', flex:1, justifyContent:'flex-end', paddingTop:15}}>
    <Text style={style.shadow}>{title}</Text>
    </View>
  </ImageBackground>}

  </TouchableOpacity>
);

const renderItem_15= ({ item }) => (
<Item_15 title={item.title} img={item.firstimage} typeid={item.contenttypeid} contentid={item.contentid}/>
);
  const tabListData = [
    {name: '레포츠', component: <FlatList data={sports} renderItem={renderItem} keyExtractor={item => item.id}/>},
    { name: '숙박', component: <FlatList data={sleep} renderItem={renderItem_32} keyExtractor={item => item.id}/> },
    { name: '음식점', component: <FlatList data={eat} renderItem={renderItem_39} keyExtractor={item => item.id}/> },
    { name: '즐길거리', component: <FlatList data={fun} renderItem={renderItem_15} keyExtractor={item => item.id}/> },
  ];


/* 
  const n_id=String(name)
  let kakao_query='https://dapi.kakao.com/v2/local/search/keyword.json?query={}'
  kakao_query=kakao_query.replace('{}',n_id)
  const [pid, setPid] = useState('');
  const [px,setPx]=useState(0);
  const [py,setPy]=useState(0);
  const callApi = async ()=> {
      try{
          setPid(null);
          const res=await axios.get (
                  kakao_query,
                  {
                      headers:{
                          Authorization:"KakaoAK 62e37fc1387a408315981029aef3f771",
                      },
                  },
              );
              const location=res.data.documents[0];
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
*/
  useEffect(()=>{
      //callApi();
      axiostest();
      axios_all();
      axios_sleep();
      axios_eat();
      axios_fun();
  },[]);


/* 
  let p_id=String(pid)
  let Kakao_map='kakaomap://place?id={}'
  Kakao_map=Kakao_map.replace('{}',p_id)
  let p_x=Number(px)
  let p_y=Number(py)
  let x=Number(p_x.toFixed(4))
  let y=Number(p_y.toFixed(4))

  */
  
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

  let re_home=homepage.split('<a href="')
  let re_re_home=String(re_home[1])
  let re_homepage=re_re_home.split('"')
  let home_page=re_homepage[0]
  
  let re_over=overview.replace(/<br [/]>/gi , '\n')
  let re_re_over=re_over.replace(/<br>/gi, '')

    return (
        <ScrollView showsVerticalScrollIndicator ={false}>
            <Container>
                <View style={{ flex:0.5}}>
                    <Text style={{fontSize:20, margin:10, marginTop:30, marginRight:width/2-20}}>{name}</Text>
                </View>
                <View style={{flex:1, marginBottom:20}}>
                    <Image style={{width:width-30, height:250, margin:5}} imageStyle={styles.listImage} source={{uri}}/>
                    <View style={{flexDirection: 'row', flex:0.5, alignItems:'flex-start'}}>
                    <Text style={styles.text}>이용 정보</Text>
                    </View>
                    <Text style={styles.text4}>
                    <Text style={styles.text4}> 주소 : </Text>
                    <Text >{address}</Text>
                    </Text>
                    {home_page==="undefined"?
                    <Text style={styles.text4}>   </Text>
                    :
                    <TouchableOpacity onPress={()=>Linking.openURL(home_page)}>
                    <Text style={styles.text4}>
                    <Text style={styles.text4}> 홈페이지 : </Text>
                    <Text style={styles.text6}>{home_page}</Text>
                    </Text>
                    </TouchableOpacity> 
                    }
                    <View style={{ flex:0.5, alignItems:'flex-start'}}>
                    <Text style={styles.text}>개요 </Text>
                      <Text style={styles.text2} numberOfLines={line} ellipsizeMode="tail" onPress={()=>handleLine()}>{re_re_over}</Text>
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

                카카오맵에서 보기
                <TouchableOpacity onPress={()=>Linking.openURL(Kakao_map)}>
                    <Text style={{marginLeft:width-250, marginTop:10, marginBottom:10, backgroundColor:'#b8b4ad',color:'#ffffff',fontSize:17}}>카카오맵에서 보기</Text>
                    </TouchableOpacity>
*/

export default Spot;