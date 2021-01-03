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
  render() {
    let { item } = this.props;
    return (
      <View className="msgItem">
        <Image className="msgImg" src={require('../../assets/img/head.jpg')} />
        <View className="msgDes">
          <Text className="msg_content">{item.msg}</Text>
          <View className="row">
            <Text className="msg_title">{item.article}</Text>
            <View className="msg_time">
              <AtIcon value="clock"></AtIcon>
              <Text>回复</Text>
            </View>
          </View>
        </View>
      </View>
    );
  }
}
