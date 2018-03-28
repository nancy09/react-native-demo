# react-native初体验
React Native的设计理念：既拥有Native的用户体验、又保留React的开发效率。
RN使用 JavaScript 编写应用逻辑，UI 则可以保持全是原生的
RN实现model层和logic代码复用，而UI层的工作还是需要做ios和android两个平台。（采用类似html+css的排版，把语言换成了js）

## 准备 [http://vczero.github.io/react_native/%E7%AC%AC1%E7%AF%87hello-react-native.html]
- 环境配置
  - node
  - 在Mac上安装Xcode,建议Xcode 6.3以上版本————开模拟器调试，也可以在手机安装expo。
  Xcode其实在模拟器里面也是安装了expo
  - 建议安装watchman，终端命令：brew install watchman
  通过配置 watchman，React 实现了在代码发生变化时，完成相关的重建的功能。就像在使用 Xcode 时，每次保存文件都会进行一次创建
  - 安装flow：brew install flow
  - 找到创建的HelloWorld项目,双击HelloWorld.xcodeproj即可在xcode中打开项目。xcodeproj是xcode的项目文件。
  - 在xcode中，使用快捷键cmd + R即可启动项目。基本的Xcode功能可以熟悉，比如模拟器的选择等。
  启动完成后，你会看到React-Packger和iOS模拟器，具体的效果如下，说明你创建项目成功了。

- 使用react-native-cli新创建新项目 步骤：
  - 安装命令行工具：sudo npm install -g react-native-cli
  - 创建一个空项目：react-native init HelloWorld
  - 进行项目根目录：cd HelloWorld
  文件夹里包含 iOS 和 Android 工程目录
  - mac上打开ios文件夹：双击xcode文件即可用xcode打开（前提要安装xcode）

-----

## 拉取被人的demo直接开跑 [https://github.com/hnlinzhi19/react-base-learn]
- 从github拉项目代码【react-base-learn】本地vscode开发调试
  1. 执行npm install
  2. 安装watchman，终端命令：brew install watchman
  3. 执行npm run start
  （无需安装xcode）手机打开expo扫码上一步生成的二维码，完美收官~（前提保证手机和开发pc处于同一网段）
  4. 执行npm run ios
  （需安装xcode）自动打开xcode的模拟器（确保安装了xcode，且xcode配置正确）


-----

## 使用create-react-native-app创建RN应用

可以用 Windows 开发 iOS 版的 RN 应用: 解决这个问题需要借助两个工具：1. create-react-native-app（下文简称CRNA）； 2. Expo（原名Exponent）
但是如果最终你要打包 App 发布到应用市场，那还是需要有 iOS 和 Android 编译环境.
ps: [https://www.jianshu.com/p/abfb55c60684]

### react-native-scripts(即create-react-native-app 简称 CRNA)
电脑上用来创建 RN 应用的工具, 且不用安装 iOS 和 Android 的编译环境了，需要node环境。
旨在为React Native开发者提供一种快捷的，无需配置任何工具，同时也无需安装XCode与AndroidStudio就可以开发React Native App的一种方案。
- 安装
> $ npm install -g create-react-native-app
安装好之后就不再使用 react-native init XXX 的命令来新建应用了，直接使用下面的命令进行创建并启动。使用 CRNA 创建的项目，你在文件夹里看不到 iOS 和 Android 工程目录，它只包含了 JS 部分的代码。
```
$ create-react-native-app MarnoRN
$ cd MarnoRN
$ npm start
```
以上终端命令即创建好了一个 RN 应用，通过 npm start 启动该应用后，会生成一个二维码。这样的操作方式就感觉和微信小程序有些类似了。接下来使用 Expo 扫描这个二维码就可以打开你编写的 RN 应用了。并且只要在 Expo 中打开过一次，就会在 App 中保留一个入口。

- 常用命令
```
npm start
  启动本地开发服务器，这样一来你就可以通过Expo扫码将APP运行起来了。

npm run ios
  将APP运行在iOS设备上，仅仅Mac系统支持，且需要安装Xcode。

npm run android
  将APP运行在Android设备上，需要Android构建工具。

npm test
  运行测试用例。
```
- 入口文件为App.js

ps: [http://www.devio.org/2017/07/12/quickly-create-react-native-app/]


### expo
手机上安装的应用（Android、iOS 都有）
使用 Expo 我们可以很快速的将自己的 RN 应用和别人分享，只要把二维码或者应用链接发给别人就行，不过前提是别人也同样安装了 Expo 。我们也可以把自己的 App 上传到 Expo 中，让更多的人搜索就可以使用。上传操作命令如下：
```
$ npm i -g exp
$ exp publish
```

-----


react-native资料[https://www.w3ctech.com/topic/909]
[https://zhuanlan.zhihu.com/FrontendMagazine/19996445]
[https://zhuanlan.zhihu.com/p/31894354]
## 分析项目源码
- App.js
  - 继承了 React.Component（React UI的基础模块）
  - AppRegistry 定义了App的入口，并提供了根组件。
  
React-Native就提供了一套iOS原生的组件，这样就不用HTML5去模拟组件了。React-Native使用css来构建页面布局，使用Native iOS Components给我们提供强大的组件功能

-----

## React

- Image 如何设置src?
  <Image source={{uri: 'http://placehold.it/300x200'}} style={styles.image} />



