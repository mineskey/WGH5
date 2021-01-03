import React, { Component } from 'react'
import { View, Text, Image } from '@tarojs/components'
import API, { PIC_URL } from '../../constants/api'
import 'taro-ui/dist/style/index.scss'
import Item from './item'
export default class List extends Component {
  constructor() {
    super(...arguments)
    this.state = {
      current: 0,
      currentBar: 0,
      atMe: []
    }
  }
  componentDidMount() {
    this.setState({
      atMe: [{article:'一千零一夜',msg:'逃得德法尔大额...'},{article:'一千零一夜',msg:'最后发现是因为其父元素不够宽造成的。父元素原来我设置的内容比较长，所以内容自动撑大了，不需要设置宽度。当内容变少的时候，宽度自动收缩，导致这个元素的宽度不够。虽然也是两端对齐，但是因为宽度不够'}]
    })
  }
  render() {
    let { atMe } = this.state;
    return (
      <View>{atMe.map((item, index) => {
        return (<Item key={index} item={item} />)
      })}
      </View>
    )
  }
}
