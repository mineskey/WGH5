import React, { Component } from 'react'
import { View, Text, Image } from '@tarojs/components'
import API, { PIC_URL } from '../../constants/api'
import "./list.less";
import Item from './item'
import Join from './join'
import Own from './own'
export default class List extends Component {
  constructor() {
    super(...arguments)
    this.state = {
      current: 0,
      currentBar: 0,
      books: [],
      tab: { type: 1 }
    }
  }
  componentDidMount() {
    let { tab } = this.props;
    this.setState({ tab: tab });
    //if (tab && tab.type == 1) {
    API.homeArticleNew({
      current: 1
    }).then((res) => {
      res.introductionList.map(item => {
        if (item.coverPhoto) item.coverPhoto = PIC_URL + item.coverPhoto;
      })
      this.setState({
        books: res.introductionList
      })
    })
    // }
  }
  render() {
    let { books, tab } = this.state;
    return (
      <View>{books.map((item, index) => {
        return (
          tab.type == 3 ?
            <Join key={index} item={item} /> : (
              tab.type == 4 ?
                <Own key={index} item={item} /> :
                <Item key={index} item={item} />
            )
        )
      })}
      </View>
    )
  }
}
