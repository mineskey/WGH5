import React, { Component } from 'react'
import { View, Text, Image, MovableArea } from '@tarojs/components'
import API, { PIC_URL } from '../../constants/api'
import 'taro-ui/dist/style/index.scss'
import Item from './item'
export default class List extends Component {
  constructor() {
    super(...arguments)
    this.state = {
      current: 0,
      currentBar: 0,
      books: []
    }
  }
  componentDidMount() {
    let { tab } = this.props;
    if (tab && tab.type == 1) {
      API.homeArticleNew({
        current: 1
      }).then((res) => {
        console.log(res.introductionList)
        res.introductionList.map(item => {
          if (item.coverPhoto) item.coverPhoto = PIC_URL + item.coverPhoto;
        })
        this.setState({
          books: res.introductionList
        })
      })
    }
  }
  render() {
    let { books } = this.state;
    return (
      <View>{books.map((item, index) => {
        return (<Item key={index} item={item} />)
      })}
      </View>
    )
  }
}
