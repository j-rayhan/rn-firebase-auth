import {useContext} from 'react';
//
import NetContext from './Context';

const useNetInfoContext = () => {
  return useContext(NetContext);
};

export default useNetInfoContext;
