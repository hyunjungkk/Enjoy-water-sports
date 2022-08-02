import React from 'react';
import { TouchableWithoutFeedback, Keyboard, TouchableOpacity, navigation, StyleSheet, View, Button, SafeAreaView, Text, Alert, Image, FlatList, SectionList, } from 'react-native';
import styled from 'styled-components/native';


const Container = styled.View`
    flex : 1;
    padding : 20px;
`;

const Separator = () => (
    <View style={styles.separator} />
  );

const DATA = [
    {
      title: "더보기",
      data: ["공지사항", "약관 및 동의 내용", "공지사항"]
    },
];  

const Item = ({ title }) => (
  <TouchableOpacity onPress={()=>Alert.alert('이동')}>
    <View style={styles.item}>
      <Text style={styles.sectiontitle}>{title}</Text>
    </View>
  </TouchableOpacity>
  );

const Mypage = ({navigation}) => {

    return (
        <TouchableWithoutFeedback>
        <Container>
            <View style={styles.fixprofile}> 
            <Image 
                style={styles.tinyLogo}
                source={require('../images/fsa.jpg')}
            />
            </View>
            <View style={styles.fixprofile}> 
            <Text style={styles.title}> 김현지 </Text>
            </View>
            <Button
                color="#adb5bd"
                title="프로필 편집"
                onPress={()=>navigation.navigate('EditProfile')}
            />
            <Separator/>
            <View style={styles.fixToText}>
                <Button
                title="하트찜"
                onPress={()=>navigation.navigate('Like_list')}
                />
                
                <Button
                title="스크랩"
                onPress={()=>navigation.navigate('Scrap_list')}
                />
                <Button
                title="내후기"
                onPress={()=>navigation.navigate('Review_list')}
                />
            </View>
            <Separator/>
            <SafeAreaView style={styles.container}>
                <SectionList
                sections={DATA}
                keyExtractor={(item, index) => item + index}
                renderItem={({ item }) => <Item title={item} />}
                />
            </SafeAreaView>

        </Container>
        </TouchableWithoutFeedback>
    );
};


const styles = StyleSheet.create({
    tinyLogo: {
      width: 100,
      height: 100,
      marginVertical: 15,
      borderRadius: 70,
    },
    container: {
      flex: 1,
      marginHorizontal: 16,
    },
    title: {
      marginBottom: 20,
      fontSize: 18,
    },
    fixprofile: {
        flexDirection: 'row',
        justifyContent: 'center',
      },
    fixToText: {
      flexDirection: 'row',
      justifyContent: 'space-between',
    },
    separator: {
      marginVertical: 15,
      borderBottomColor: '#737373',
      borderBottomWidth: StyleSheet.hairlineWidth,
    },
    item: {
      marginVertical: 8,
      fontsize: 15,
    },
    sectiontitle: {
      fontsize: 15,
    },
    section_separator:{
      backgroundColor: '#e0e0e0',
      height: 1,
    }
  });

export default Mypage