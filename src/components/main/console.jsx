import { View, Text } from '@tarojs/components'
import React, { Component } from 'react'
import { $ } from '@tarojs/extend'
import { AtTabs, AtTabsPane, AtDrawer, AtFab, AtNavBar, AtInput, AtTextarea } from 'taro-ui'
import List from '../article/list'
export default class Console extends Component {
    constructor() {
        super(...arguments)
        this.state = {
            showEdit: true,
            current: 1,
            tabList: [{ title: '参与作品', type: 3 }, { title: '我的作品', type: 4 }]
        }
    }
    componentDidMount() {
        if (this.state.current == 1) {
            var title = $(".edit-title");
            title.on('click', function () {
                console.log(123)
            });
            title.find('.at-textarea__textarea').attr('style', "height:expression((this.scrollHeight>150)?'150px':(this.scrollHeight+5)+'px');overflow:auto;");
        }
    }
    handleClick(value) {
        this.setState({
            current: value
        })
    }
    handleEditClick(value) {
        this.setState({
            showEdit: value
        })
    }
    handleChange() {

    }
    render() {
        let { tabList, current, showEdit } = this.state;
        return (
            <View>
                <AtTabs
                    current={current}
                    scroll
                    tabList={tabList}
                    onClick={this.handleClick.bind(this)}>
                    {
                        tabList.map((item, index) => {
                            return (
                                <AtTabsPane key={index} current={current} index={index}>
                                    <List tab={item} />
                                </AtTabsPane>
                            )
                        })
                    }
                </AtTabs>
                {
                    current == 1 ?
                        <AtFab onClick={this.handleEditClick.bind(this, true)} size='small' color='#ff551a' className={"fixed-right-bottom"}>
                            <Text className='at-fab__icon at-icon at-icon-edit'></Text>
                        </AtFab>
                        : ""
                }
                {
                    current == 1 ?
                        <AtDrawer
                            show={showEdit} width='100%'
                            onClose={this.handleEditClick.bind(this, false)}
                            mask>
                            <AtNavBar
                                onClickLeftIcon={this.handleEditClick.bind(this, false)}
                                className='icon-full'
                                title=''
                                rightText="提交"
                                leftIconType='chevron-left'
                                rightSecondIconType="iconfont icon-tijiao"
                            />
                            <View className="edit-content">
                                <AtTextarea
                                    className='edit-title'
                                    value={this.state.value}
                                    onChange={this.handleChange.bind(this)}
                                    maxLength={52} onPropertychange="this.style.posHeight=this.scrollHeight"
                                    placeholder='标题...'
                                />
                                <AtTextarea
                                    value={this.state.value}
                                    onChange={this.handleChange.bind(this)}
                                    maxLength={200}
                                    placeholder='简介...'
                                />
                            </View>
                        </AtDrawer>
                        : ""
                }
            </View>
        )
    }
}