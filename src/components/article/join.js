import React, { Component } from "react";
import { View, Text, Image } from "@tarojs/components";
import { AtIcon } from "taro-ui";
import "./item.less";
export default class Join extends Component {
  constructor() {
    super(...arguments);
    this.state = {
      item: {},
    };
  }
  render() {
    let { item } = this.props;
    return (
      <View className="bookItem">
        <Image className="bookImg" src={item.coverPhoto} />
        <View className="bookDes">
          <Text className="update_title">{item.title}</Text>
          <Text className="update_content">{item.content}</Text>
          <View className="update_time">
            <AtIcon value="clock"></AtIcon>
            <Text>{item.userName}</Text>
          </View>
        </View>
      </View>
    );
  }
}
