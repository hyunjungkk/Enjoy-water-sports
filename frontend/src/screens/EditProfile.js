import React from 'react';
import { TouchableWithoutFeedback, Keyboard, View, TextInput, StyleSheet, Text, Image, Pressable, Button } from 'react-native';
import styled from 'styled-components/native';
import { KeyboardAwareScrollView } from 'react-native-keyboard-aware-scroll-view';


const Container = styled.View`
    flex : 1;
    justify-content : center;
    align-items : center;
    background-color : ${({ theme }) => theme.background};
    padding : 20px;
`;

const UselessTextInput = (props) => {
    return (
      <TextInput
        {...props}
        editable
        maxLength={10}
      />
    );
  }

  const EditProfile = ({navigation}) => {
    const [value, onChangeText] = React.useState('김현지');
  
    // If you type something in the text box that is a color, the background will change to that
    // color.
    return (
      <View style={styles.container}>
        <View style={styles.fixItem}>
          <Image
          style={styles.tinyLogo}
          source={require('../images/fsa.jpg')}
          ></Image>
          <View style={{alignSelf: 'center', padding: 10}}>
            <View style={{ padding: 5, width: 130}}>
            <Button        
                color="#adb5bd"
                title="기본 변경"
            />
            </View>
            <View style={{ padding: 5, width: 130}}>
              <Button
                  color="#adb5bd"
                  title="앨범 선택"
              />
            </View>
          </View>
        </View>
        
        <View style={styles.fixItem}> 
          <Text style={{ alignSelf: 'center', width: 60, fontSize: 15, }}>닉네임</Text>
          <View 
            style={{
              backgroundColor: value,
              alignSelf: 'center',
              borderColor: '#e0e0e0',
              borderWidth: 1,
              width: 150,
            }}>
              <TextInput
                onChangeText={text => onChangeText(text)}
                value={value}
                numberOfLines={1}
                fontSize={15}
                style={{padding: 8}}
              />
          </View>
        </View>
  
        <View style={styles.fixItem}>
          <View  style={{ padding: 5, width: 100}}>
            <Button
              color="#adb5bd"
              title="취소"
            />
          </View>
            <View  style={{ padding: 5, width: 100}}>
            <Button
              title="저장"
            />
          </View>
        </View>
  
      </View>
    );
  }

const styles = StyleSheet.create({
    container: {
    flex: 1,
    alignItems: "center",
    marginHorizontal: 16,
    //marginTop: StatusBar.currentHeight || 0,
  },
  fixItem: {
      flexDirection: 'row',
      justifyContent: 'center',
      marginHorizontal: 16,
      padding: 10,
    },
  tinyLogo: {
    width: 100,
    height: 100,
    marginVertical: 15,
    borderRadius: 70,
  },
});

export default EditProfile
