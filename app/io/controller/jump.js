'use strict';

const Controller = require('egg').Controller;
const exec = require('child_process').exec;
const path = require('path');

const execAsync = cmd => {
  return new Promise((reslove, reject) => {
    const child = exec(cmd, function(err, stdout, stderr) {
      if (err) {
        reject(err);
        return;
      }
      reslove(stdout);
    });
  });
};

class HomeController extends Controller {
  // 拉取图片
  async pullImage(ctx) {
    const { imageDir, screenImageName } = ctx.app.config;

    await execAsync(`adb shell mkdir -p ${imageDir}`);

    await execAsync(`adb shell screencap -p ${imageDir}/${screenImageName}`);

    await execAsync(
      `adb pull ${imageDir}/${screenImageName} ${path.join(
        __dirname,
        '../../public'
      )}`
    );

    //  计算按压时间
    // const pixels = await getPixelsAsync(`${__dirname}/${screenImageName}`);
  }

  async index(ctx) {
    const { static: { prefix = '/public' }, screenImageName } = ctx.app.config;
    await this.pullImage(ctx);
    await ctx.socket.emit(
      'jumpStart',
      `${prefix}${screenImageName}?t=${Date.now()}`
    );
  }

  async jump(ctx) {
    const time = Math.ceil(ctx.args[0]);
    await execAsync(`adb shell input swipe 200 200 200 200 ${time}`);
    await new Promise(resolve => {
      setTimeout(() => {
        resolve();
      }, time + 400);
    });
    await ctx.socket.emit('jumpEnd');
  }
}

module.exports = HomeController;
