import {Text, Dimensions} from 'react-native';
import React, {useEffect} from 'react';
import {copilot, walkthroughable, CopilotStep} from 'react-native-copilot';
const MARGIN = 8;
const WIDTH = Dimensions.get('window').width - 2 * MARGIN;
function Nudge({start, children, event, track}) {
  const WalkthroughableText = walkthroughable(Text);
  useEffect(() => {
    start();
    track(event);
  }, []);
  return (
    <CopilotStep text={event} order={1} name={event}>
      <WalkthroughableText>{children}</WalkthroughableText>
    </CopilotStep>
  );
}

export default copilot({
  tooltipStyle: {
    backgroundColor: 'white',
    borderRadius: 10,
    paddingTop: 5,
    width: WIDTH,
    maxWidth: WIDTH,
    left: MARGIN,
    text: 'white',
  },
  svgMaskPath: ({position, canvasSize}) =>
    `M0,0H${canvasSize.x}V${canvasSize.y}H0V0ZM${position.x._value},${position.y._value}`,
})(Nudge);
