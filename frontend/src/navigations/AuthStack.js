import React, { useContext } from 'react';
import { createStackNavigator } from '@react-navigation/stack';
import { createBottomTabNavigator } from '@react-navigation/bottom-tabs';
import Icon from 'react-native-vector-icons/Ionicons';
import { Community, Home, Mypage, Search_1 } from '../screens';
import { Spot, Enterprise, Search_2, Location_list, Ranking, Login, EditProfile, Like_list, Scrap_list, Review_list } from '../screens';


const Tab = createBottomTabNavigator();
const Stack = createStackNavigator();


const Search = () => {
  return (
      <Stack.Navigator screenOptions = {{cardStyle : {backgroundColor : '#ffffff'}}}>
          <Stack.Screen name = "Search_1" component = {Search_1} options = {{ headerBackTitleVisible : false }} />
          <Stack.Screen name = "Search_2" component = {Search_2} options = {{ headerBackTitleVisible : false }} />
          <Stack.Screen name = "Location_list" component = {Location_list} options = {{ headerBackTitleVisible : false }} />
          
      </Stack.Navigator>
  )
}

const Main_home = () => {
  return (
      <Stack.Navigator screenOptions = {{cardStyle : {backgroundColor : '#ffffff'}}}>
          <Stack.Screen name = "Login" component = {Login} options = {{ headerBackTitleVisible : false, headerShown : false }} />
          <Stack.Screen name = "Home" component = {Home} options = {{ headerBackTitleVisible : false, headerShown : false }} />
          <Stack.Screen name = "Spot" component = {Spot} options = {{ headerBackTitleVisible : false,headerShown : false }} />
          <Stack.Screen name = "Enterprise" component = {Enterprise} options = {{ headerBackTitleVisible : false,headerShown : false }} />
          <Stack.Screen name = "Ranking" component = {Ranking} options = {{ headerBackTitleVisible : false,headerShown : false }} />
          
      </Stack.Navigator>
  )
}

const Magazine = () => {
  return (
      <Stack.Navigator screenOptions = {{cardStyle : {backgroundColor : '#ffffff'}}}>
          <Stack.Screen name = "Community" component = {Community} options = {{ headerBackTitleVisible : false }} />
          
      </Stack.Navigator>
  )
}

const User = () => {
  return (
      <Stack.Navigator screenOptions = {{cardStyle : {backgroundColor : '#ffffff'}}}>
          <Stack.Screen name = "Mypage" component = {Mypage} options = {{ headerBackTitleVisible : false }} />
          <Stack.Screen name = "EditProfile" component = {EditProfile} options = {{ headerBackTitleVisible : false }} />
          <Stack.Screen name = "Login" component = {Login} options = {{ headerBackTitleVisible : false }} />
          <Stack.Screen name = "Like_list" component = {Like_list} options = {{ headerBackTitleVisible : false }} />
          <Stack.Screen name = "Scrap_list" component = {Scrap_list} options = {{ headerBackTitleVisible : false }} />
          <Stack.Screen name = "Review_list" component = {Review_list} options = {{ headerBackTitleVisible : false }} />
          
      </Stack.Navigator>
  )
}


const AllTabs = () => {
    return(
        <Tab.Navigator screenOptions = {({ route }) => ({
            tabBarIcon: ({ focused, color, size }) => {
              let iconName;
              if (route.name === 'Main_home') {
                iconName = focused ? 'home-sharp' : 'home-outline';
              } else if (route.name === 'Search'){
                iconName = focused ? 'search' : 'search-outline';
              } else if (route.name === 'Magazine'){
                iconName = focused ? 'chatbubbles' : 'chatbubbles-outline';
              } else if (route.name === 'User'){
                iconName = focused ? 'person-sharp' : 'person-outline';
              }
  
              return <Icon name={iconName} size={size}  color={color}/>;
            },
          })}
          tabBarOptions={{
            activeTintColor: 'black',
            inactiveTintColor: 'gray',
            showLabel : false
          }}
        >
            <Tab.Screen name = "Main_home" component = {Main_home} options = {{headerShown : false}}/>
            <Tab.Screen name = "Search" component = {Search} options = {{headerShown : false}}/>
            <Tab.Screen name="Magazine"component={Magazine} options = {{headerShown : false}}/>
            <Tab.Screen name="User"component={User} options = {{headerShown : false}}/>
        </Tab.Navigator>
    )
}

export default AllTabs;