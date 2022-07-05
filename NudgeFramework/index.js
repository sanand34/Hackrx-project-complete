import 'react-native-gesture-handler';
import React, {useState, useEffect} from 'react';
import PropTypes from 'prop-types';
import {View, StatusBar, useColorScheme} from 'react-native';
import {getActiveRouteName} from './routeName';
import {Colors} from 'react-native/Libraries/NewAppScreen';
import {NavigationContainer} from '@react-navigation/native';
import {segmentClient} from './segmentClient';
import {AnalyticsProvider} from '@segment/analytics-react-native';
import Pusher from 'pusher-js/react-native';
import {useStateValue} from '../appState/StateProvider';
import {actionTypes} from '../appState/reducer';

function App({start, router: Router}) {
  const [{product}, dispatch] = useStateValue();
  const isDarkMode = useColorScheme() === 'dark';

  const backgroundStyle = {
    backgroundColor: isDarkMode ? Colors.darker : Colors.lighter,
    flex: 1,
  };
  const [routeName, setRouteName] = useState('Unknown');
  useEffect(() => {
    Pusher.logToConsole = true;
    const pusher = new Pusher('efa0d6c7474efdef2f26', {
      cluster: 'ap2',
    });

    const channel = pusher.subscribe('my-channel');
    channel.bind('product', function (data) {
      dispatch({
        type: actionTypes.SET_PRODUCT,
        product: data,
      });
      dispatch({
        type: actionTypes.SET_DISCOUNT,
        discount: data.nudge,
      });
    });

    return () => {
      channel.unbind_all();
      channel.unsubscribe();
    };
  }, []);

  return (
    <NavigationContainer
      onStateChange={state => {
        const newRouteName = getActiveRouteName(state);

        if (routeName !== newRouteName) {
          segmentClient.screen(newRouteName);
          setRouteName(newRouteName);
        }
      }}>
      <View style={backgroundStyle}>
        <StatusBar />
        <AnalyticsProvider client={segmentClient}>
          <Router start={start} />
        </AnalyticsProvider>
      </View>
    </NavigationContainer>
  );
}
App.propTypes = {
  start: PropTypes.func.isRequired,
  copilotEvents: PropTypes.shape({
    on: PropTypes.func.isRequired,
  }).isRequired,
};
export default App;
/*



 
*/
