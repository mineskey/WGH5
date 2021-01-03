import { View, Text } from '@tarojs/components'
import React, { Component } from 'react'
import List from '../msg/list'
export default class AtMe extends Component {
    constructor() {
        super(...arguments)
        this.state = {
        }
    }
    render() {
        return (
            <View>
                <View className="atme-title">
                    <Text className="outline">最新动态</Text>
                    <Text>@我的回复</Text>
                </View>
                <List />
            </View>
        )
    }
}