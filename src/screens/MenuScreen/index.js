import React, {useEffect} from 'react';
import {StyleSheet, View} from 'react-native';
import {
  GoogleSignin,
  statusCodes,
} from '@react-native-google-signin/google-signin';
import {actionTypes} from '../../../appState/reducer';
import {useStateValue} from '../../../appState/StateProvider';
import Nudge from '../../../NudgeFramework/Nudge';

import {useAnalytics} from '@segment/analytics-react-native';
import Button from '../../components/Button';
const App = () => {
  const {track} = useAnalytics();
  const [{user}, dispatch] = useStateValue();
  useEffect(() => {
    GoogleSignin.configure();
  }, []);

  return (
    <View style={styles.container}>
      {!user ? (
        <Button
          onPress={async () => {
            try {
              await GoogleSignin.hasPlayServices();
              const userInfo = await GoogleSignin.signIn();
              dispatch({
                type: actionTypes.SET_USER,
                user: userInfo.user,
              });
            } catch (error) {
              if (error.code === statusCodes.SIGN_IN_CANCELLED) {
                // user cancelled the login flow
              } else if (error.code === statusCodes.IN_PROGRESS) {
                // operation (e.g. sign in) is in progress already
              } else if (
                error.code === statusCodes.PLAY_SERVICES_NOT_AVAILABLE
              ) {
                // play services not available or outdated
              } else {
                // some other error happened
              }
            }
          }}
          text="Login"
        />
      ) : (
        <Nudge event="Logged in successfully" track={track}>
          <Button
            onPress={async () => {
              try {
                await GoogleSignin.revokeAccess();
                await GoogleSignin.signOut();
                dispatch({type: actionTypes.SET_USER, user: null});
                console.log('Signout');
                // Remember to remove the user from your app's state as well
              } catch (error) {
                console.error(error);
              }
            }}
            text="Logout"
          />
        </Nudge>
      )}
    </View>
  );
};
const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: 'white',
    alignItems: 'center',
    justifyContent: 'center',
  },
  loginText: {
    color: 'black',
    fontSize: 20,
    fontWeight: 'bold',
  },
  nameText: {
    paddingTop: 20,
    color: 'white',
    fontSize: 20,
    fontWeight: 'bold',
  },

  loginBtn: {
    width: '80%',
    borderRadius: 25,
    height: 50,
    alignItems: 'center',
    justifyContent: 'center',
    marginTop: 40,
    backgroundColor: 'white',
  },

  avatar: {
    width: 150,
    height: 150,
    borderRadius: 200,
  },
});

export default App;

/*

onPress={async () => {
                try {
                  await GoogleSignin.revokeAccess();
                  await GoogleSignin.signOut();
                  console.log('Signout');
                  // Remember to remove the user from your app's state as well
                } catch (error) {
                  console.error(error);
                }
onPress={async () => {
                try {
                  await GoogleSignin.hasPlayServices();
                  const userInfo = await GoogleSignin.signIn();
                  dispatch({
                    type: actionTypes.SET_USER,
                    user: userInfo.user,
                  });
                  dispatch({
                    type: actionTypes.SET_devID,
                    id: userInfo.user.id,
                  });
                  console.log({userInfo});
                } catch (error) {
                  if (error.code === statusCodes.SIGN_IN_CANCELLED) {
                    // user cancelled the login flow
                  } else if (error.code === statusCodes.IN_PROGRESS) {
                    // operation (e.g. sign in) is in progress already
                  } else if (
                    error.code === statusCodes.PLAY_SERVICES_NOT_AVAILABLE
                  ) {
                    // play services not available or outdated
                  } else {
                    // some other error happened
                  }
                }


*/
