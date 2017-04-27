let METEOR_URL = 'ws://192.168.1.13:3000/websocket';

if (process.env.NODE_ENV === 'production') {
  METEOR_URL = ''; // Your production serverExpress url
}

export const settings = {
  env: process.env.NODE_ENV,
  USER_TOKEN_KEY: 'reactnativemeteor_usertoken',
  METEOR_URL
};

export default settings;
