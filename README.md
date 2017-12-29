# 教你用Node来玩微信跳一跳
>仿[python](https://github.com/wangshub/wechat_jump_game)版实现

![游戏截屏](/score.png)

## 环境要求

1. Node 8.9.1
2. Android 手机
3. Adb 驱动

## 原理
1. 通过Adb对手机截屏，并拷贝到工程里的静态文件目录
2. 浏览器打开页面，建立ws连接，点击两个坐标，计算按下时间，通知服务端
3. 服务端收到通知，通过Adb模拟点击手机，重复123

## 使用步骤

1. 安装node依赖，运行程序
```
npm i
npm run dev
```
2. 微信打开小程序跳一跳，并开始游戏
3. 修改app/public/index.html
```
<meta name='viewport' content='width={你手机的宽度}'>
```
3. 浏览器打开[http://127.0.0.1:7001/index.html](http://127.0.0.1:7001/index.html)，启用设备模拟
4. 点击两个物体的中心
![demo](/demo.png)

##  相关资料
1. [egg](https://github.com/eggjs/egg)
2. [egg-socket.io](https://github.com/eggjs/egg-socket.io)
3. [socket.io](https://github.com/socketio/socket.io/)
4. [adb使用](http://blog.csdn.net/next_second/article/details/73648754)
