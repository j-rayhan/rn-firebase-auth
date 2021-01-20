import * as React from 'react';
import NetInfo, {
  NetInfoState,
  NetInfoStateType,
} from '@react-native-community/netinfo';
type NetInfoType = {type: any; effectiveTy: any};

const inititalState: any = {
  type: null,
  effectiveType: null,
};

const useNetInfo = () => {
  const [netInfo, setNetInfo] = React.useState<any>(inititalState);

  const onChange = (newState: any) => {
    setNetInfo(newState);
  };

  React.useEffect(() => {
    NetInfo.fetch().then((connectionInfo) => {
      setNetInfo(connectionInfo);
    });
  }, []);

  React.useEffect(() => {
    const unsubscriber = NetInfo.addEventListener(onChange);

    return () => {
      unsubscriber();
    };
  }, []);

  return netInfo;
};

export default useNetInfo;
