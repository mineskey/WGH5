import { View, Text } from '@tarojs/components'
import React, { Component } from 'react'
import { AtAvatar } from 'taro-ui'
export default class Me extends Component {
  constructor() {
    super(...arguments)
    this.state = {
      info: {},
    }
  }
  componentDidMount() {
    this.setState({
      info: { img: require('../../assets/img/head.jpg'), name: '潇潇雨澄', email: 'xxyc.@cc.com', lastTime: '1986-12-02 12:12:12' }
    })
  }
  render() {
    let { info } = this.state;
    return (
      <View className="me">
        <AtAvatar circle size='large' image={info.img}></AtAvatar>
        <Text>用户名：{info.name}</Text>
        <Text>邮箱：{info.email}</Text>
        <Text>最近登录：{info.lastTime}</Text>
      </View>
    )
  }
}