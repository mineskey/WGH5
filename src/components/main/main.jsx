import React, { Component } from 'react'
import { AtTabs, AtTabsPane } from 'taro-ui'
import List from '../article/list'
export default class Main extends Component {
  constructor() {
    super(...arguments)
    this.state = {
      current: 0,
      tabList: [{ title: '推荐', type: 1 }, { title: '最新发布', type: 2 }]
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