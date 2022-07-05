import {createClient} from '@segment/analytics-react-native';
const segmentClient = createClient({
  writeKey: 'Ee2DUHE2x5NN3LHMCRwKHG8SWYd9LrkO',
  trackAppLifecycleEvents: false,
  recordScreenViews: true,

  //additional config options
});
export {segmentClient};
