import React, { Component } from "react";
import { View, Text, Image } from "@tarojs/components";
import { AtIcon } from "taro-ui";
import "./item.less";
export default class Item extends Component {
  constructor() {
    super(...arguments);
    this.state = {
      item: {},
    };
  }
  handleClick() {
    console.log('click..')
}
  render() {
    let { item } = this.props;
    return (
      <View className="topic">
        <Image className="head_img" src={require('../../assets/img/head.jpg')} />
        <View className="at-article__p">YOngDE</View>
        <View className="at-article__p clear">{item.msg}</View>
        <View className="row">
          <View className='at-article__info'>
            <AtIcon value="clock"></AtIcon>
            2017-05-07
          </View>
          <View className="btn">
            <Text className='btn-reply' onClick={this.handleClick.bind(this)}>回复</Text>
          </View>
        </View>
      </View>
    );
  }
}
