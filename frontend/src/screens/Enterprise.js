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
import AsyncStorage from "@react-native-async-storage/async-storage";
import { useContext } from 'react';
import { UserContext } from '../context/UserContext';
import axios from 'axios';
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
    margin :5,
    marginLeft:15,
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



const Enterprise = ({navigation, route}) => {
    const access_token=route.params.access
    const typeid=route.params.typeid
    const img=route.params.img
    const conid=route.params.conid
    const title=route.params.title


    const [accomcountleports, setaccomcountleports]=useState('');
    const [chkbabycarriageleports, setchkbabycarriageleports]=useState('');
    const [chkcreditcardleports, setchkcreditcardleports]=useState('');
    const [chkpetleports, setchkpetleports]=useState('');
    const [expagerangeleports, setexpagerangeleports]=useState('');
    const [infocenterleports, setinfocenterleports]=useState('');
    const [openperiod, setopenperiod]=useState('');
    const [parkingfeeleports,setparkingfeeleports]=useState('');
    const [parkingleports,setparkingleports]=useState('');
    const [reservation,setreservation]=useState('');
    const [restdateleports,setrestdateleports]=useState('');
    const [scaleleports,setscaleleports]=useState('');
    const [usefeeleports,setusefeeleports]=useState('');
    const [usetimeleports,setusetimeleports]=useState('');
    const api_query="http://3.34.181.178/tourapi/enterprise/?contentid=*&contenttypeid=28"
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
          const accom=report.response.body.items.item[0].accomcountleports
          setaccomcountleports(accom)
          const chkbaby=report.response.body.items.item[0].chkbabycarriageleports
          setchkbabycarriageleports(chkbaby)
          const chkcre=report.response.body.items.item[0].chkcreditcardleports
          setchkcreditcardleports(chkcre)
          const chkpet=report.response.body.items.item[0].chkpetleports
          setchkpetleports(chkpet)
          const expag=report.response.body.items.item[0].expagerangeleports
          setexpagerangeleports(expag)
          const info=report.response.body.items.item[0].infocenterleports
          setinfocenterleports(info)
          const open=report.response.body.items.item[0].openperiod
          setopenperiod(open)
          const parkingfee=report.response.body.items.item[0].parkingfeeleports
          setparkingfeeleports(parkingfee)
          const parking=report.response.body.items.item[0].parkingleports
          setparkingleports(parking)
          const res=report.response.body.items.item[0].reservation
          setreservation(res)
          const rest=report.response.body.items.item[0].restdateleports
          setrestdateleports(rest)
          const scale=report.response.body.items.item[0].scaleleports
          setscaleleports(scale)
          const usef=report.response.body.items.item[0].usefeeleports
          setusefeeleports(usef)
          const uset=report.response.body.items.item[0].usetimeleports
          setusetimeleports(uset)
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
      let love_query='http://3.34.181.178/community/like/?contentid=!&contenttypeid=28&title=^&thumbnail=*&overview=@'
      love_query=love_query.replace('!',conid)
      love_query=love_query.replace('^',title)
      love_query=love_query.replace('*',img)
      love_query=love_query.replace('@',love_overview)

      const data = useContext(UserContext)
      const [access,setjwt]=useState('')
      useEffect(()=>{
        if(data.userdata){
          AsyncStorage.getItem('access_token', (err, result) => {
          setjwt(result)});
        
        }
      },[data.userdata]);

      const apiUrl = 'http://3.34.181.178/'
      
     
      const love_check=()=>{
        let formData = new FormData();
        const access=access_token
        console.log(access)
        const config = {
          headers: {Authorization : `Bearer ${access}`,
          "Content-Type": "application/json"},
          transformRequest: (data, headers) => {
            return data;
          },
        };
       
        formData.append("contentid", conid);
        formData.append("contenttypeid",typeid);
        formData.append("title",title);
        formData.append("thumbnail",img);
        formData.append("overview",love_overview);

        const form_data = JSON.stringify({
          contentid: Number(conid),
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
            console.log(response)
          }
          ).catch(function (error) {
            console.log(error)
            alert(error)})
       
      }

      const [num, setNum] = useState(0);
  
      const onIncrease = () => {
        setNum(num + 1);
      }
      
      if (num%2===0) {
        iconname='heart-outline';
      } else {
        iconname='heart';
        alert('북마크에 저장되었습니다.');
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
        love_check();
    },[]);
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
            "수용 인원",
            accomcountleports
        ],
        [
            "유아차 대여 여부",
            chkbabycarriageleports
        ],
        [   
            "신용카드 가능 여부",
            chkcreditcardleports
        ],
        [   
            "반려동물 동반 가능 여부",
            chkpetleports
        ],
        ["체험 가능 연령",
        expagerangeleports
        ],
        ["문의 및 안내",
        infocenterleports
        ],
        [ "개장기간",
             openperiod
         ],
        ["주차요금",
          parkingfeeleports
        ],
        ["주차시설",
            parkingleports
        ],
        [ "예약안내",
            reservation
        ],
        ["휴무",
        restdateleports
        ],
        ["규모",
           scaleleports
        ],  
        [   
          "입장료",
          usefeeleports
        ],
        ["이용시간",
           usetimeleports
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
                    <TouchableOpacity onPress={onIncrease} >
                    <Icon name={iconname} size={25}  color='red' style={{ margin:10, marginTop:30, alignContent:'flex-end'}}/>
                    </TouchableOpacity>
                </View>
            <View>
            {img===""?
          <Image style={{width:width-20,height:250, margin:10}} source={{uri:sampleimg}}>
           </Image>
        :<Image style={{width:width-20,height:250, margin:10}} source={{uri:img}}>
          </Image>}
            </View>
            <View style={{flex:1, marginBottom:20}}>
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
                <View View style={{width:width, marginLeft:55,marginRight:20, justifyContent:'flex-start'}}>
                <Text style={styles.text}>이용 안내</Text>
                <View style={{marginLeft:20}}>
                {Content.get('예약안내')===''?
              <Text style={{fontSize:0.1}}> </Text>
              :
              <Text>
              {Content.get('예약안내').includes('http')===true?
              <Text style={styles.text7}>
              <Text style={styles.text7}>예약 안내 : </Text>  
              <TouchableOpacity onPress={()=>Linking.openURL(Content.get('예약안내'))}>
              <Text style={styles.text6}>예약 사이트</Text>
              </TouchableOpacity>
              </Text>
              :Content.get('예약안내').includes('-')===true?
              <Text style={styles.text7}>
              <Text style={styles.text7}>예약 안내 : </Text>  
              <TouchableOpacity onPress={()=>Linking.openURL('tel:'+Content.get('예약안내'))}>
              <Text style={styles.text6}>전화 예약</Text>
              </TouchableOpacity>
              </Text>
              :
              <Text style={styles.text7}>
              <Text style={styles.text7}>예약 안내 : </Text>  
              <Text style={styles.text7}>{Content.get('예약안내')}</Text>
              </Text>
            }
              </Text>
            }
            {Content.get('문의 및 안내')===''?
              <Text style={{fontSize:0.1}}> </Text>
              :
              <Text style={styles.text7}>
              {Content.get('문의 및 안내').includes('-')===true?
              <Text style={styles.text7}>
                <Text style={styles.text7}>문의 및 안내 : </Text>  
              <TouchableOpacity onPress={()=>Linking.openURL('tel:'+Content.get('문의 및 안내'))}>
              <Text style={styles.text6}>{Content.get('문의 및 안내')}</Text>
              </TouchableOpacity>
                </Text>  
                :<Text style={styles.text7}>
                  <Text style={styles.text7}>문의 및 안내 : </Text>
                  <Text style={styles.text7}>{Content.get('문의 및 안내')}</Text>
                  </Text>

            }
              </Text>
            }
              {Content.get('유아차 대여 여부')===''?
              <Text style={{fontSize:0.1}}> </Text>
              :
              <Text style={styles.text7}>
              <Text>유아차 대여 여부 : </Text>  
              <Text>{Content.get('유아차 대여 여부')}</Text>
              </Text>
            }
            {Content.get('휴무')===''?
              <Text style={{fontSize:0.1}}> </Text>
              :
              <Text style={styles.text7}>
              <Text>휴무 : </Text>  
              <Text>{Content.get('휴무')}</Text>
              </Text>
            }
            {Content.get('이용시간')===''?
              <Text style={{fontSize:0.1}}> </Text>
              :
              <Text style={styles.text7}>
              <Text>이용시간 : </Text>  
              <Text>{Content.get('이용시간')}</Text>
              </Text>
            }
            {Content.get('신용카드 가능 여부')===''?
              <Text style={{fontSize:0.1}}> </Text>
              :
              <Text style={styles.text7}>
              <Text>신용카드 가능 여부 : </Text>  
              <Text>{Content.get('신용카드 가능 여부')}</Text>
              </Text>
            }
            {Content.get('반려동물 동반 가능 여부')===''?
              <Text style={{fontSize:0.1}}> </Text>
              :
              <Text style={styles.text7}>
              <Text>반려동물 동반 가능 여부 : </Text>  
              <Text>{Content.get('반려동물 동반 가능 여부')}</Text>
              </Text>
            }
            {Content.get('체험 가능 연령')===''?
              <Text style={{fontSize:0.1}}> </Text>
              :
              <Text style={styles.text7}>
              <Text>체험 가능 연령 : </Text>  
              <Text>{Content.get('체험 가능 연령')}</Text>
              </Text>
            }
            {Content.get('개장기간')===''?
              <Text style={{fontSize:0.1}}> </Text>
              :
              <Text style={styles.text7}>
              <Text>개장기간 : </Text>  
              <Text>{Content.get('개장기간')}</Text>
              </Text>
            }
            {Content.get('입장료')===''?
              <Text style={{fontSize:0.1}}> </Text>
              :
              <Text style={styles.text7}>
              <Text>입장료 : </Text>  
              <Text>{Content.get('입장료')}</Text>
              </Text>
            }
            {Content.get('주차요금')===''?
              <Text style={{fontSize:0.1}}> </Text>
              :
              <Text style={styles.text7}>
              <Text>주차요금 : </Text>  
              <Text>{Content.get('주차요금')}</Text>
              </Text>
            }
            {Content.get('주차시설')===''?
              <Text style={{fontSize:0.1}}> </Text>
              :
              <Text style={styles.text7}>
              <Text>주차시설 : </Text>  
              <Text>{Content.get('주차시설')}</Text>
              </Text>
            }
            {Content.get('규모')===''?
              <Text style={{fontSize:0.1}}> </Text>
              :
              <Text style={styles.text7}>
              <Text>규모 : </Text>  
              <Text>{Content.get('규모')}</Text>
              </Text>
            }
                </View>
            </View>
            </Container>
        </ScrollView>


    );
};


export default Enterprise


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