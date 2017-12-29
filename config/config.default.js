'use strict';

module.exports = appInfo => {
  const config = exports = {};

  // use for cookie sign key, should change to your own and keep security
  config.keys = appInfo.name + '_1514562720638_6238';

  // add your config here
  config.middleware = [];

  config.static = {
    prefix: '/',
  };

  config.imageDir = '/sdcard/wechat_jump';

  config.screenImageName = 'wechat_jump.png';

  return config;
};
