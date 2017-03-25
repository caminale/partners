let METEOR_URL = 'ws://54.93.85.202:80/websocket';

if (process.env.NODE_ENV === 'production') {
  METEOR_URL = ''; // your production serverExpress url
}

export const settings = {
  env: process.env.NODE_ENV,
  METEOR_URL,
};

export default settings;
