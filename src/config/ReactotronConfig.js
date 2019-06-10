import Reactotron, { asyncStorage } from 'reactotron-react-native';

if (__DEV__) {
  const tron = Reactotron.configure()
    .useReactNative()
    .use(asyncStorage())
    .connect({
      enabled: true,
      host: '192.168.0.7',
      port: 9090,
    });

  console.tron = tron;

  tron.clear();
}
