import Taro, { Component } from '@tarojs/taro'
import { View,Text } from '@tarojs/components'
import { connect } from '@tarojs/redux'
import { AtButton, AtCard, AtInput, AtInputNumber } from "taro-ui";

import { add, minus, asyncAdd } from "../../actions/counter";
import { computer } from "./computer";
import './index.less'


@connect(({ counter }) => ({
  counter
}), (dispatch) => ({
  add () {
    dispatch(add())
  },
  dec () {
    dispatch(minus())
  },
  asyncAdd () {
    dispatch(asyncAdd())
  }
}))
class Index extends Component {

    config = {
      navigationBarTitleText: '首页'
    }
  constructor(props) {
    super(props)
    this.state = { 
      inputData: {
        day: null, aror: null, principal: null 
      },
      outPut: 0
  }
  }
  componentWillReceiveProps (nextProps) {
    console.log(this.props, nextProps)
  }

  componentWillUnmount () { }

  componentDidShow () { }

  componentDidHide () {
    this.setState({
      inputData: {
        day: null, aror: null, principal: null
      },
      outPut: 0
    })
   }

  handleChange (key, val) {
    const inputData ={
      ...this.state.inputData,
      [key]: val&&Number(val)
    }
    this.setState({
      inputData
    })
  }

  handleCompute() {
    const inputData = this.state.inputData
    const params ={
      ...inputData,
      aror: inputData.aror / 100
    }
    console.log(computer)
    const outPut = computer(params)
    this.setState({ outPut })
  }

  render () {
    const { aror, day, principal} = this.state.inputData
    return (
      <View className='index'>
        <AtCard  title='您的收益：'>
          <Text style={{fontWeight:'bold'}}> {this.state.outPut}</Text>
        </AtCard>
        <AtInput
          name='value2'
          title='年化利率'
          type='digit'
          placeholder='请输入年化利率'
          value={aror}
          onChange={(val) => this.handleChange('aror', val)}
        >
          <Text>%</Text>
        </AtInput>
        <AtInput
          name='value2'
          title='本金'
          type='number'
          placeholder='请输入本金'
          value={principal}
          onChange={(val) => this.handleChange('principal', val)}
        > 
          <Text>元</Text>
        </AtInput>
          <AtInput
            name='value2'
            title='投资天数'
            type='number'
            width={200}
            placeholder='请输入投资天数'
            value={day}
          onChange={(val) => this.handleChange('day', val)}
          >
            <Text>天</Text>
          </AtInput>
        <View className='footer'>
          <AtButton size='small' type='primary' onClick={() =>this.handleCompute()}>
            开始计算
          </AtButton>
        </View>
      </View>
    );
  }
}

export default Index
