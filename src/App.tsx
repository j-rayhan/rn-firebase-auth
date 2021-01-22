/**
 * @format
 */

import React from 'react';
import './config/firebase';
//
import {NetInfoProvider} from './lib/NetInfo/Context';
import Expenses from './screens/Expenses';
import MainNav from './navigation/MainNav';

const App: React.FC = () => {
  return (
    <>
      <NetInfoProvider>
        <MainNav />
      </NetInfoProvider>
    </>
  );
};

export default App;
