import React, {useState, useEffect} from 'react';
import { TouchableWithoutFeedback,Keyboard,ImageBackground, FlatList  } from 'react-native';
import styled from 'styled-components/native';
import { Button } from '../components';
import Icon from 'react-native-vector-icons/Ionicons';
import { Image } from 'react-native';
import { StyleSheet, Text,View } from 'react-native';
import { ScrollView, TouchableOpacity } from 'react-native-gesture-handler';
import { Dimensions } from 'react-native';
import { Linking } from 'react-native';
import axios from 'axios';
import AsyncStorage from "@react-native-async-storage/async-storage";
import { useContext } from 'react';
import { UserContext } from '../context/UserContext';
//import MapView, {Marker} from 'react-native-maps';
import { element } from 'prop-types';

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
text6:{
  fontSize : 15,
    textDecorationLine:'underline'
},
  text4:{
    fontSize : 15,
    marginLeft:15,
    margin :5
},
text7:{
  fontSize : 15,
  marginBottom:20,
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



const Enterprise_15 = ({navigation, route}) => {
    const access_token=route.params.access
    const typeid=route.params.typeid
    const img=route.params.img
    const conid=route.params.conid
    const title=route.params.title


    const [agelimit, setagelimit]=useState('');
    const [bookingplace, setbookingplace]=useState('');
    const [discountinfofestival,setdiscountinfofestival]=useState('');
    const [eventhomepage,seteventhomepage]=useState('');
    const [eventplace,seteventplace]=useState('');
    const [playtime,setplaytime]=useState('');
    const [program,setprogram]=useState('');
    const [sponsor1,setsponsor1]=useState('');
    const [sponsor1tel,setsponsor1tel]=useState('');
    const [sponsor2,setsponsor2]=useState('');
    const [sponsor2tel,setsponsor2tel]=useState('');
    const [subevent,setsubevent]=useState('');
    const [usetimefestival,setusetimefestival]=useState('');

    const api_query="http://3.34.181.178/tourapi/enterprise/?contentid=*&contenttypeid=15"
    const query_28=api_query.replace('*',conid)
    const axiostest= async ()=>{
        const access = ''
        const config = {
          headers : {
            Authorization : `Bearer ${access}`,
          }
        }
        axios.get(query_28)
        .then(function (response) {
          const valor = JSON.stringify(response.data)
          const report=JSON.parse(valor)
          const accom=report.response.body.items.item[0].agelimit
          setagelimit(accom)
          const chkbaby=report.response.body.items.item[0].bookingplace
          setbookingplace(chkbaby)
          const chkcre=report.response.body.items.item[0].discountinfofestival
          setdiscountinfofestival(chkcre)
          const chkpet=report.response.body.items.item[0].eventhomepage
          seteventhomepage(chkpet)
          const expag=report.response.body.items.item[0].eventplace
          seteventplace(expag)
          const info=report.response.body.items.item[0].playtime
          setplaytime(info)
          const open=report.response.body.items.item[0].program
          setprogram(open)
          const parkingfee=report.response.body.items.item[0].sponsor1
          setsponsor1(parkingfee)
          const parking=report.response.body.items.item[0].sponsor1tel
          setsponsor1tel(parking)
          const res=report.response.body.items.item[0].sponsor2
          setsponsor2(res)
          const restel=report.response.body.items.item[0].sponsor2tel
          setsponsor2tel(restel)
          const sube=report.response.body.items.item[0].subevent
          setsubevent(sube)
          const usetime=report.response.body.items.item[0].usetimefestival
          setusetimefestival(usetime)
        })
      }

      let spot_query= "http://3.34.181.178/tourapi/spot/?contentid={}&contenttypeid=*"
      spot_query=spot_query.replace('{}',conid)
      spot_query=spot_query.replace('*',typeid)
      
      const [address,setaddress]=useState('');
      const [homepage,sethomepage]=useState('');
      const [overview,setoverview]=useState('');

      const axios_spot= async ()=>{
        const access = ''
        const config = {
          headers : {
            Authorization : `Bearer ${access}`,
          }
        }
        axios.get(spot_query)
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
      let love_overview=overview.substring(0,15)

      const apiUrl = 'http://3.34.181.178/'
      
      const [yn,setyn]=useState()
      const love_yn=()=>{
        let yn_query='http://3.34.181.178/community/like?contentid=*&contenttypeid=^'
        yn_query=yn_query.replace('*',conid)
        yn_query=yn_query.replace('^',typeid)
        const type_data=JSON.stringify({
          contentid:conid,
          contenttypeid:typeid
        })
        const access=access_token;
        const config={
          headers : {
            Authorization : `Bearer ${access}`,
            "Content-Type": "application/json"},
            transformRequest: (data, headers) => {
              return data;
          }
        }
        axios.get(
          yn_query,
          config
          )
          .then(function(response){
            const yorn=response.data.likeYn
            setyn(yorn)
          })
      }
      const [iconname,seticonname]=useState('heart-outline')
      const [road,setroad]=useState(1)
      const heart_check=()=>{
        if (yn===false) {
         seticonname('heart-outline')
        } if(yn===true) {
          seticonname('heart')
        }
      }
      

      const love_check=()=>{
        setroad(2)
        let formData = new FormData();
        const access=access_token
        const config = {
          headers: {Authorization : `Bearer ${access}`,
          "Content-Type": "application/json"},
          transformRequest: (data, headers) => {
            return data;
          },
        };
       
        const form_data = JSON.stringify({
          contentid: conid,
          contenttypeid: String(typeid),
          title : String(title),
          thumbnail:String(img),
          overview:love_overview
        });

        axios.post(
            `${apiUrl}community/like`,
            form_data,
            config
          )
          .then(function(response){
            console.log(response.data.likeYn)
            setyn(response.data.likeYn)
          }
          ).catch(function (error) {
            console.log(error)
            alert(error)})

            if (yn===false) {
              seticonname('heart-outline')
            } else {
              seticonname('heart')
            }
            setroad(1)
      }
/* 
    let query='https://dapi.kakao.com/v2/local/search/keyword.json?query={}'
    query=query.replace('{}',title)
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
        axios_spot();
        love_yn();
    },[]);

    useEffect(()=>{
      return()=>{
        heart_check();
      }
    },[road])
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
    const Content=new Map([
        [   
            "관람 가능연령",
            agelimit
        ],
        [
            "예매처",
            bookingplace
        ],
        [   
            "할인정보",
            discountinfofestival
        ],
        [   
            "행사 홈페이지",
            eventhomepage
        ],
        ["행사 장소",
        eventplace
        ],
        ["공연시간",
        playtime
        ],
        [ "행사 프로그램",
        program
         ],
        ["주최자 정보",
        sponsor1
        ],
        ["주최자 연락처",
        sponsor1tel
        ],
        [ "주관사 정보",
        sponsor2
        ],
        [ "주관사 연락처",
        sponsor2tel
        ],
        [ "부대행사",
        subevent
        ],
        [ "이용요금",
        usetimefestival
        ]
    ]);
    
 

    Content.forEach(function(value,key){
      if (value.includes('<a href="')===true){
          let t=Content.get(key)
          let s=t.split('<a href="')
          let re_s=s[1].split('"')
          Content.set(key,re_s[0])
          

      }
  })

   Content.forEach(function(value,key){
    if (value.includes('<br />')===true){
        let t=Content.get(key)
        let s=t.replace(/<br [/]>/gi , '\n')
        Content.set(key,s)
    }
})
Content.forEach(function(value,key){
  if (value.includes('<br/>')===true){
      let t=Content.get(key)
      let s=t.replace(/<br[/]>/gi , '\n')
      Content.set(key,s)
  }
})

Content.forEach(function(value,key){
  if (value.includes('<br>')===true){
      let t=Content.get(key)
      let s=t.replace(/<br>/gi , '\n')
      Content.set(key,s)
  }
})
    
    let test_arr=Array.from(Content)
    let l=test_arr.length
    var i =0;
    var arr=[];
    var arr_v=[];
    var arr_m=[];
    while (i<l){
      var k=String(test_arr[i])
      var j=k.split(',')
      var m=k.replace(',',' :    ')
      arr.push(j[0])
      arr_v.push(j[1])
      arr_m.push(m)
      i++;
    }

/*
    let p_id=String(pid)
    let Kakao_map='kakaomap://place?id={}'
    Kakao_map=Kakao_map.replace('{}',p_id)
    let p_x=Number(px)
    let p_y=Number(py)
    let x=Number(p_x.toFixed(4))
    let y=Number(p_y.toFixed(4))
  */
    
    const sampleimg="http://tong.visitkorea.or.kr/cms/resource/13/2837213_image2_1.jpg"

    return (
        <ScrollView>
            <Container>
            <View style={{width:width, flexDirection: 'row', flex:0.5, alignItems:'flex-start' , justifyContent:'space-between'}}>
                    <Text style={{fontSize:20, marginLeft:20, marginTop:30,marginRight:50, alignContent:'flex-start', justifyContent:'flex-start'}}>{title}</Text>
                    <TouchableOpacity onPress={love_check} >
                    {yn===true?
                    <Icon name={'heart'} size={25}  color='red' style={{ margin:10, marginTop:30, alignContent:'flex-end'}}/>
                    :
                    <Icon name={'heart-outline'} size={25}  color='red' style={{ margin:10, marginTop:30, alignContent:'flex-end'}}/>
                  }
                    </TouchableOpacity>
                </View>
            <View>
            {img===""?
          <Image style={{width:width-20,height:250, margin:10}} source={{uri:sampleimg}}>
           </Image>
        :<Image style={{width:width-20,height:250, margin:10}} source={{uri:img}}>
          </Image>}
            </View>
            <View style={{width:width-40,flex:1, marginBottom:20}}>
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
                <View style={{width:width-30, justifyContent:'flex-start'}}>
                <Text style={styles.text}>이용 안내</Text>
                <View style={{marginLeft:10}}>

                {Content.get('행사 홈페이지')===''?
              <Text style={{fontSize:0.1}}> </Text>
              :
              <Text style={styles.text7}>
              {Content.get('행사 홈페이지').includes('http')===true?
              <Text style={styles.text7}>
                <Text style={styles.text7}>행사 홈페이지 : </Text>  
              <TouchableOpacity onPress={()=>Linking.openURL(Content.get('행사 홈페이지'))}>
              <Text style={styles.text6}>{Content.get('행사 홈페이지')}</Text>
              </TouchableOpacity>
                </Text>  
                :<Text style={styles.text7}>
                  <Text style={styles.text7}>행사 홈페이지 : </Text>
                  <Text style={styles.text7}>{Content.get('행사 홈페이지')}</Text>
                  </Text>

            }
              </Text>
            }
            {Content.get('행사 장소')===''?
              <Text style={{fontSize:0.1}}> </Text>
              :
              <Text style={styles.text7}>
              <Text>행사 장소 : </Text>  
              <Text>{Content.get('행사 장소')}</Text>
              </Text>
            }
                {Content.get('예매처')===''?
              <Text style={{fontSize:0.1}}> </Text>
              :
              <Text>
              {Content.get('예매처').includes('http')===true?
              <Text style={styles.text7}>
              <Text style={styles.text7}>예매처 : </Text>  
              <TouchableOpacity onPress={()=>Linking.openURL(Content.get('예매처'))}>
              <Text style={styles.text6}>{Content.get('예매처')}</Text>
              </TouchableOpacity>
              </Text>
              :Content.get('예매처').includes('-')===true?
              <Text style={styles.text7}>
              <Text style={styles.text7}>예매처 : </Text>  
              <TouchableOpacity onPress={()=>Linking.openURL('tel:'+Content.get('예매처'))}>
              <Text style={styles.text6}>전화 예약</Text>
              </TouchableOpacity>
              </Text>
              :
              <Text style={styles.text7}>
              <Text style={styles.text7}>예매처 : </Text>  
              <Text style={styles.text7}>{Content.get('예매처')}</Text>
              </Text>
            }
              </Text>
            }
            {Content.get('할인정보')===''?
              <Text style={{fontSize:0.1}}> </Text>
              :
              <Text style={styles.text7}>
              <Text>할인정보 : </Text>  
              <Text>{Content.get('할인정보')}</Text>
              </Text>
            }
            {Content.get('주최자 정보')===''?
              <Text style={{fontSize:0.1}}> </Text>
              :
              <Text style={styles.text7}>
              <Text>주최자 정보 : </Text>  
              <Text>{Content.get('주최자 정보')}</Text>
              </Text>
            }
            {Content.get('주최자 연락처')===''?
              <Text style={{fontSize:0.1}}> </Text>
              :Content.get('주최자 연락처').includes('-')===true?
              <Text style={styles.text7}>
              <Text style={styles.text7}>주최자 연락처 : </Text>  
              <TouchableOpacity onPress={()=>Linking.openURL('tel:'+Content.get('주최자 연락처'))}>
              <Text style={styles.text6}>{Content.get('주최자 연락처')}</Text>
              </TouchableOpacity>
              </Text>
              :
              <Text>
                <Text style={styles.text7}>주최자 연락처</Text>
                <Text style={styles.text7}>{Content.get('주최자 연락처')}</Text>
              </Text>
            }
            {Content.get('주관사 정보')===''?
              <Text style={{fontSize:0.1}}> </Text>
              :
              <Text style={styles.text7}>
              <Text>주관사 정보 : </Text>  
              <Text>{Content.get('주관사 정보')}</Text>
              </Text>
            }
            {Content.get('주관사 연락처')===''?
              <Text style={{fontSize:0.1}}> </Text>
              :Content.get('주관사 연락처').includes('-')===true?
              <Text style={styles.text7}>
              <Text style={styles.text7}>주관사 연락처 : </Text>  
              <TouchableOpacity onPress={()=>Linking.openURL('tel:'+Content.get('주관사 연락처'))}>
              <Text style={styles.text6}>{Content.get('주관사 연락처')}</Text>
              </TouchableOpacity>
              </Text>
              :
              <Text>
                <Text style={styles.text7}>주관사 연락처</Text>
                <Text style={styles.text7}>{Content.get('주관사 연락처')}</Text>
              </Text>
            }
            {Content.get('공연시간')===''?
              <Text style={{fontSize:0.1}}> </Text>
              :
              <Text style={styles.text7}>
              <Text>공연시간 : </Text>  
              <Text>{Content.get('공연시간')}</Text>
              </Text>
            }
            {Content.get('행사 프로그램')===''?
              <Text style={{fontSize:0.1}}> </Text>
              :
              <Text style={styles.text7}>
              <Text>행사 프로그램 : </Text>  
              <Text>{Content.get('행사 프로그램')}</Text>
              </Text>
            }
            {Content.get('관람 가능연령')===''?
              <Text style={{fontSize:0.1}}> </Text>
              :
              <Text style={styles.text7}>
              <Text>관람 가능연령 : </Text>  
              <Text>{Content.get('관람 가능연령')}</Text>
              </Text>
            }
            {Content.get('부대행사')===''?
              <Text style={{fontSize:0.1}}> </Text>
              :
              <Text style={styles.text7}>
              <Text>부대행사 : </Text>  
              <Text>{Content.get('부대행사')}</Text>
              </Text>
            }
            {Content.get('이용요금')===''?
              <Text style={{fontSize:0.1}}> </Text>
              :
              <Text style={styles.text7}>
              <Text>이용요금 : </Text>  
              <Text styles={{width:width-10 ,marginLeft:10}}>{Content.get('이용요금')}</Text>
              </Text>
            }
                </View>
            </View>
            </Container>
        </ScrollView>


    );
};


export default Enterprise_15;


/*
<View style={{flexDirection: 'column', flex:1, justifyContent:'flex-start', paddingTop:15}}>
                <Text style={styles.text5}>생생한 후기</Text>
            </View>
            <View style={{flexDirection: 'row', flex:1, justifyContent:'space-around', paddingTop:15}}>
            <FlatList
                    style ={{width: 350}}
                    data={state}
                    renderItem={({ item }) => (<Item item={item}/>)}
                    keyExtractor={item => item.id} 
                    />
            </View>
*/

/*
const state =[
    {"id":1,"name":"*****","title":"오늘은 다이빙 스팟을 추천하려 합니다. 지난 번 스노쿨링스팟에 이어서 준비해봤습니다. 다이빙을 여러 곳 다녀봤…", 
    "picture":"uri"},
    {"id":2,"name":"****","title":"이번에 범섬으로 다이빙을 떠났는데, 너무나 운 좋게도 바다거북을 만났습니다. 사진도 찍었는데 공유드리고 갈게…"
    ,"picture":"url"},
    {"id":3,"name":"*****","title":"오늘은 다이빙 스팟을 추천하려 합니다. 지난 번 스노쿨링스팟에 이어서 준비해봤습니다. 다이빙을 여러 곳 다녀봤…"
    ,"picture":"url"},
  ];

  function Item({ item }) {
    return (
      <View style={styles.listImage}>
        <Image source={require('../images/magazine_user.png')}  style={{width:50, height:50,borderRadius:30}} />
        <View style={styles.listItem}>
            <Text style={{color:"grey", fontWeight:"bold", marginBottom:15}}>{item.name}</Text>
            <Text style={{color:"grey", marginRight:50, fontSize: 14}}>{item.title}</Text>
        </View>
        <TouchableOpacity style={{height:50,width:50, justifyContent:"center",alignItems:"center"}}>
            <Text style={{color:"green"}}></Text>
        </TouchableOpacity>
      </View>
    );
  }

                  카카오맵에서 보기


              <View style={{flexDirection: 'row', flex:0.5, alignItems:'flex-start'}}>
                <Text style={styles.text}> 위치 정보 </Text>
                <TouchableOpacity onPress={()=>Linking.openURL(Kakao_map)}>
                    <Text style={{marginLeft:width-250, marginTop:10, marginBottom:10, backgroundColor:'#b8b4ad',color:'#ffffff',fontSize:17}}>카카오맵에서 보기</Text>
                </TouchableOpacity>
            </View>
*/