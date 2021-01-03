import React, { Component } from 'react'
import Taro from '@tarojs/taro'
import { $ } from '@tarojs/extend'
import { View, Text, Image } from '@tarojs/components'
import { AtDrawer, AtButton, AtTextarea, AtIcon, AtList, AtListItem, AtNavBar, AtFab } from 'taro-ui'
import List from '../../components/wg/list'
import 'taro-ui/dist/style/index.scss'
import './index.less'
export default class Index extends Component {
    constructor() {
        super(...arguments)
        this.state = {
            value: '',
            show: false,
            showAtFab: false,
            current: 1,
            currentBar: 2,
            search: ''
        }
    }

    componentWillMount() {
        var Win = $(window);
        var Doc = $(document);
        console.log(Win)
        var self = this;
        Win.scroll(function () {
            console.log('scroll');
            self.setState({
                showAtFab: false
            })
        });
    }

    componentDidMount() { }

    componentWillUnmount() { }

    componentDidShow() { }

    componentDidHide() { }
    handleClick(value) {
        this.setState({
            show: value
        })
    }
    handleVatFabClick(value) {
        this.setState({
            showAtFab: value,
            show: false
        })
    }
    onChange(value) {
        this.setState({
            search: value
        })
    }
    handleChange(value) {
        this.setState({
            value
        })
    }
    onActionClick() {
        console.log(this.state.search)
        console.log('开始搜索')
    }
    goHome() {
        Taro.navigateTo({ url: '/pages/index/index' })
    }
    render() {
        let { show, showAtFab } = this.state;
        return (
            <View>
                <View className='v-at-fab' onClick={this.handleVatFabClick.bind(this, !showAtFab)}></View>
                <View className={"nav-reply " + (showAtFab ? "" : "hide")}>
                    <AtTextarea
                        value={this.state.value}
                        onChange={this.handleChange.bind(this)}
                        maxLength={200}
                        placeholder='输入内容回复...'
                    />
                    <Text className='sub-reply'>发送</Text>
                </View>
                <AtNavBar fixed
                    className='nav-dense'
                    onClickLeftIcon={this.handleClick.bind(this, true)}
                    title='这是一级标题这是一级标题'
                    leftIconType='bullet-list'
                />
                <View className='content'>
                    <List />
                </View>
                <AtDrawer
                    show={show} width='90%'
                    onClose={this.handleClick.bind(this, false)}
                    mask>
                    <AtNavBar
                        onClickLeftIcon={this.handleClick.bind(this, false)}
                        title='目录'
                        leftIconType='arrow-left'
                        rightFirstIconType="iconfont icon-shouye"
                        onClickRgIconSt={this.goHome}
                    />
                    <AtList>
                        <AtListItem title='标题文字' arrow='right' />
                        <AtListItem title='标题文字标题文字标题文字标题文字标题文字' />
                    </AtList>
                </AtDrawer>


            </View>
        )
    }
}
