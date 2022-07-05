import {AnalyticsProvider} from '@segment/analytics-react-native';
import {SegmentClient} from '@segment/analytics-react-native/lib/typescript/src/analytics';
import React from 'react';

export default function Analytics({router: Router}) {
  return (
    <AnalyticsProvider client={SegmentClient}>
      <Router />
    </AnalyticsProvider>
  );
}
