/**
 * @format
 */

import React from 'react';
//
import {NetInfoProvider} from './lib/NetInfo/Context';
import Expenses from './screens/Expenses';

const App: React.FC = () => {
  return (
    <>
      <NetInfoProvider>
        <Expenses />
      </NetInfoProvider>
    </>
  );
};

export default App;
