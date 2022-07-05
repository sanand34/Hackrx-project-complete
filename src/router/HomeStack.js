import React, {useState} from 'react';
import {createStackNavigator} from '@react-navigation/stack';
import HomeScreen from '../screens/HomeScreen';
import Nudge from '../../NudgeFramework/Nudge';
import {SafeAreaView, View, TextInput} from 'react-native';
import Feather from 'react-native-vector-icons/Feather';
import {useAnalytics} from '@segment/analytics-react-native';
const Stack = createStackNavigator();

const HeaderComponent = ({searchValue, setSearchValue}) => {
  const {track} = useAnalytics();
  return (
    <SafeAreaView style={{backgroundColor: 'black'}}>
      <View
        style={{
          margin: 10,
          padding: 5,
          backgroundColor: 'white',
          flexDirection: 'row',
          alignItems: 'center',
          borderRadius: 12,
        }}>
        <Nudge event="searchBar" track={track}>
          <Feather name="search" size={20} />

          <TextInput
            style={{height: 40, marginLeft: 10}}
            placeholder="Search..."
            value={searchValue}
            onChangeText={setSearchValue}
          />
        </Nudge>
      </View>
    </SafeAreaView>
  );
};

const HomeStack = () => {
  const [searchValue, setSearchValue] = useState('');
  return (
    <Stack.Navigator
      screenOptions={{
        header: () => (
          <HeaderComponent
            searchValue={searchValue}
            setSearchValue={setSearchValue}
          />
        ),
      }}>
      <Stack.Screen name="HomeScreen" options={{title: 'Home'}}>
        {() => <HomeScreen searchValue={searchValue} />}
      </Stack.Screen>
    </Stack.Navigator>
  );
};

export default HomeStack;
