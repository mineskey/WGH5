import React, { Component } from 'react'
import { View } from '@tarojs/components'
import { AtTabBar, AtSearchBar } from 'taro-ui'
import Main from '../../components/main/main'
import AtMe from '../../components/main/atMe'
import Console from '../../components/main/console'
import Me from '../../components/main/me'
import 'taro-ui/dist/style/index.scss'
import './index.less'

export default class Index extends Component {
  constructor() {
    super(...arguments)
    this.state = {
      current: 1,
      currentBar: 2,
      search: ''
    }
  }

  componentWillMount() { }

  componentDidMount() { }

  componentWillUnmount() { }

  componentDidShow() { }

  componentDidHide() { }
  handleClick(value) {
    console.log(value)
    this.setState({
      current: value
    })
  }
  handleTabBarClick(value) {
    this.setState({
      currentBar: value
    })
  }
  onChange(value) {
    this.setState({
      search: value
    })
  }
  onActionClick() {
    console.log(this.state.search)
    console.log('开始搜索')
  }
  render() {
    let { currentBar } = this.state;
    return (
      <View className='index'>
        {
          currentBar == 0 || currentBar == 2 ?
            <AtSearchBar
              fixed
              actionName='搜一下'
              value={this.state.search}
              onChange={this.onChange.bind(this)}
              onActionClick={this.onActionClick.bind(this)} /> : ''
        }
        <View className={currentBar == 1 || currentBar == 3 ? 'content-top' : 'content'}>
          {currentBar == 0 ? <Main /> : ""}
          {currentBar == 1 ? <AtMe /> : ""}
          {currentBar == 2 ? <Console /> : ""}
          {currentBar == 3 ? <Me /> : ""}
        </View>
        <AtTabBar
          fixed
          tabList={[
            { title: '首页', iconType: 'iconfont icon-shouye' },
            { title: '动态', iconType: 'message' },
            { title: '管理', iconType: 'iconfont icon-translate' },
            { title: '我的', iconType: 'iconfont icon-personoutline' }
          ]}
          className='padding-none'
          onClick={this.handleTabBarClick.bind(this)}
          current={this.state.currentBar}
        />
      </View>
    )
  }
}
