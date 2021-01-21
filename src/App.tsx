/**
 * @format
 */

import React from 'react';
//
import {NetInfoProvider} from './Lib/NetInfo/Context';
import Expenses from './Screens/Expenses';

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
