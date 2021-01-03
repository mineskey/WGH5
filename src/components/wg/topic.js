import React, { Component } from "react";
import { View, Text, Image } from "@tarojs/components";
import { AtIcon } from "taro-ui";
import "./item.less";
export default class Topic extends Component {
  constructor() {
    super(...arguments);
    this.state = {
      item: {},
    };
  }
  handleClick(value) {
    console.log('click...'+value)
  }
  render() {
    let { item } = this.props;
    return (
      <View className="topic">
        <Image className="head_img" src={require('../../assets/img/head.jpg')} />
        <View className="at-article__h3">{item.title}</View>
        <View className="at-article__p clear">{item.msg}</View>
        <View className="btn">
            <AtIcon value="trash" onClick={this.handleClick.bind(this,1)} color='#666'></AtIcon>
            <AtIcon value="file-generic" onClick={this.handleClick.bind(this,2)} color='#666'></AtIcon>
            <AtIcon value="lock" onClick={this.handleClick.bind(this,3)} color='#666'></AtIcon>
        </View>
      </View>
    );
  }
}
