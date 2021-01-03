import React, { Component } from 'react'
import { View, Text, Image } from '@tarojs/components'
import API, { PIC_URL } from '../../constants/api'
import Topic from './topic'
import Item from './item'

export default class List extends Component {
  constructor() {
    super(...arguments)
    this.state = {
      current: 0,
      currentBar: 0,
      topic: {},
      item:[]
    }
  }
  componentDidMount() {
    this.setState({
      topic:{title:'第一章',msg:'是因为其父元素不够宽造'},
      item: [{title:'一千零一夜',msg:'逃得德法尔大额...'},{title:'一千零一夜',msg:'最后发现是因为其父元素不够宽造成的。父元素原来我设置的内容比较长，所以内容自动撑大了，不需要设置宽度。当内容变少的时候，宽度自动收缩，导致这个元素的宽度不够。虽然也是两端对齐，但是因为宽度不够'}]
    })
  }
  render() {
    let { topic,item } = this.state;
    return (
      <View>
        <Topic item={topic} />
        {item.map((item, index) => {
          return (<Item key={index} item={item} />)
        })}
      </View>
    )
  }
}
