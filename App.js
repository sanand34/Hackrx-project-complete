import NudgeFramework from './NudgeFramework/index';
import Router from './src/router';
import React from 'react';
import reducer, {initialState} from './appState/reducer.js';
import {StateProvider} from './appState/StateProvider';
export default function App() {
  return (
    <StateProvider initialState={initialState} reducer={reducer}>
      <NudgeFramework router={Router} />
    </StateProvider>
  );
}
