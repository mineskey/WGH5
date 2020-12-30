import React, { Component } from 'react'
import { AtTabs, AtTabsPane } from 'taro-ui'
import List from '../article/list'
import 'taro-ui/dist/style/index.scss'
export default class Me extends Component {
  constructor() {
    super(...arguments)
    this.state = {
      current: 0,
      tabList: [{ title: '参与作品', type: 3 }, { title: '我的作品', type: 4 }]
    }
  }
  handleClick(value) {
    this.setState({
      current: value
    })
  }
  render() {
    let { tabList } = this.state;
    return (
      <AtTabs
        current={this.state.current}
        scroll
        tabList={tabList}
        onClick={this.handleClick.bind(this)}>

        {
          tabList.map((item, index) => {
            return (
              <AtTabsPane key={index} current={this.state.current} index={index}>
                <List tab={item} />
              </AtTabsPane>
            )
          })
        }
      </AtTabs>
    )
  }
}