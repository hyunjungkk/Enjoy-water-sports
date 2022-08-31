import React from 'react';
import { TouchableWithoutFeedback,Keyboard, SafeAreaView, View, FlatList, StyleSheet, Text, StatusBar, Image, TouchableOpacity, Alert } from 'react-native';
import styled from 'styled-components/native';
import { Button } from '../components';
import { KeyboardAwareScrollView } from 'react-native-keyboard-aware-scroll-view';

const DATA = [
    {
      id: 'bd7acbea-c1b1-46c2-aed5-3ad53abb28ba',
      title: '하파서프',
      category: '숙박레저 패키지',
      location: '강릉',
      content: '서핑 강습 + 바베큐 파티 + 게스트하우스',
      iU: require('../images/leisure_fishing.jpg'),
    },
    {
      id: '3ac68afc-c605-48d3-a4f8-fbd91aa97f63',
      title: '함덕해수욕장',
      category: '관광지',
      location: '제주',
      content: '검은모래해변, 유채꽃밭, 둘레길',
      iU: require('../images/leisure_surfing.jpg'),
    },
    {
      id: '58694a0f-3da1-471f-bd96-145571e29d72',
      title: '방아머리해수욕장',
      category: '관광지',
      location: '대부도',
      content: '해수욕장, 해변',
      iU: require('../images/leisure_fishing.jpg'),
    },
    {
      id: '58694a0f-3da1-471f-bd96-145571e29d72',
      title: '방아머리해수욕장',
      category: '관광지',
      location: '대부도',
      content: '해수욕장, 해변',
      iU: require('../images/leisure_surfing.jpg'),
    },
    {
      id: '58694a0f-3da1-471f-bd96-145571e29d72',
      title: '방아머리해수욕장',
      category: '관광지',
      location: '대부도',
      content: '해수욕장, 해변',
      iU: require('../images/leisure_fishing.jpg'),
    },
    {
      id: '58694a0f-3da1-471f-bd96-145571e29d72',
      title: '방아머리해수욕장',
      category: '관광지',
      location: '대부도',
      content: '해수욕장, 해변',
      iU: require('../images/leisure_fishing.jpg'),
    },
    {
      id: '58694a0f-3da1-471f-bd96-145571e29d72',
      title: '방아머리해수욕장',
      category: '관광지',
      location: '대부도',
      content: '해수욕장, 해변',
      iU: require('../images/leisure_fishing.jpg'),
    },
  ];


  const Item = ({ item }) => (
    <TouchableOpacity onPress={()=>Alert.alert('이동')}>
    <View>
    <View style={styles.item}>
        <Image style={styles.tinyLogo}
        source={item.iU}
        />
    </View>
    <View style={styles.itemcontent}>
      <View style={styles.content}>
        <Text >{item.title}</Text>
        <Text >#{item.category}</Text>
        <Text >#{item.location}</Text>
      </View>
    </View>
    </View>
    </TouchableOpacity>
  );  

const Container = styled.View`
    flex : 1;
    justify-content : center;
    align-items : center;
    background-color : ${({ theme }) => theme.background};
    padding : 20px;
`;

const Location_list = () => {
    const renderItem = ({ item }) => (
        <Item item={item} />
      );

    return (
        <KeyboardAwareScrollView 
            contentContainerStyle = {{flex : 1}}
            extraScrollHeight = {20}
        >
        <TouchableWithoutFeedback>
        <Container>
            <SafeAreaView style={styles.container}>
                <FlatList
                    data={DATA}
                    renderItem={renderItem}
                    keyExtractor={item => item.id}
                />
            </SafeAreaView>
        </Container>
        </TouchableWithoutFeedback>
        </KeyboardAwareScrollView>
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
      justifyContent: 'center',
    },
    itemcontent: {
      flex: 1,
      marginLeft: 20,
      marginRight: 20,
    },
    content: {
      padding: 3,
      fontSize: 15,
      flex: 1,
      width: '100%',
    },
    tinyLogo: {
      width: 250,
      height: 120,
      marginVertical: 3,
      borderRadius: 2,
    },
  });

export default Location_list