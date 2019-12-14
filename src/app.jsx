import '@tarojs/async-await'
import Taro, { Component } from '@tarojs/taro'
import { Provider } from '@tarojs/redux'
import 'taro-ui/dist/style/index.scss' // 全局引入一次即可

import Index from './pages/index'
import About from "./pages/about";

import configStore from './store'

import './app.less'

// 如果需要在 h5 环境中开启 React Devtools
// 取消以下注释：
// if (process.env.NODE_ENV !== 'production' && process.env.TARO_ENV === 'h5')  {
//   require('nerv-devtools')
// }

const store = configStore()

class App extends Component {
  componentDidMount() {}
  config = {
    pages: ["pages/index/index", "pages/about/index"],
    permission: {
      "scope.userLocation": {
        desc: "你的位置信息将用于小程序位置接口的效果展示"
      }
    },
    tabBar: {
      color: "#9d9ea2",
      selectedColor: "#000000",
      backgroundColor: "#ffffff",
      borderStyle: "black",
      list: [
        {
          pagePath: "pages/index/index",
          text: "主页",
          iconPath: "assects/images/home.png",
          selectedIconPath: "assects/images/home_active.png"
        },
        {
          pagePath: "pages/about/index",
          text: "我的",
          iconPath: "assects/images/wode.png",
          selectedIconPath: "assects/images/wode_active.png"
        }
      ]
    },
    window: {
      backgroundTextStyle: "light",
      navigationBarBackgroundColor: "#fff",
      navigationBarTitleText: "WeChat",
      navigationBarTextStyle: "black"
    }
  };

  componentDidShow() {}

  componentDidHide() {}

  componentDidCatchError() {}

  // 在 App 类中的 render() 函数没有实际作用
  // 请勿修改此函数
  render() {
    return (
      <Provider store={store}>
        <Index />
        <About />
      </Provider>
    );
  }
}

Taro.render(<App />, document.getElementById('app'))
