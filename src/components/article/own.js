import React, { Component } from "react";
import Taro from '@tarojs/taro'
import { View, Text, Image} from "@tarojs/components";
import { AtIcon, AtTag , AtButton} from "taro-ui";
import "./item.less";
export default class Own extends Component {
  constructor() {
    super(...arguments);
    this.state = {
      item: {},
      open:false,
    };
  }
  handleClick(){
    this.setState({open:true});
    Taro.showActionSheet({
      itemList: ['发布游戏', '结束报名', '作品设置','结束游戏','删除']
    }).then(res => console.log(res.errMsg, res))
      .catch(err => console.log(err.errMsg))
  }
  handleCZ(){
    Taro.navigateTo({
      url: '/pages/wg/index'
    })
  }
  render() {
    let { item,open } = this.props;
    return (
      <View className="bookItem">
        <Image className="bookImg" src={item.coverPhoto} />
        <View className="bookDes">
          <View className="row">
            <Text className="update_title">{item.title}</Text>
            <AtTag type='primary' active={false} size="small" circle>等待发布</AtTag>
          </View>
          <Text className="update_content">{item.content}</Text>
          <View className="at-btn">
            <AtButton type='primary' circle size='small'>报名格式</AtButton>
            <AtButton type='primary' circle size='small'>报名审核</AtButton>
            <AtButton type='primary' circle size='small' onClick={this.handleCZ.bind(this)}>去创作</AtButton>
            <AtIcon value='filter' size='30' color='#999' onClick={this.handleClick.bind(this)}></AtIcon>
          </View>
        </View>
      </View>
    );
  }
}
