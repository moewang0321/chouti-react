import React, { Component } from 'react'

import Header from './DetailHeader'
import DetailItem from './DetailItem'

export default class Detail extends Component {

    loadItemInfo = () => {
        this.$child_item.loadingInfo()
    }

    componentDidMount() {
        this.loadItemInfo()
    }

    render() {
        return (
            <div style={{ background: '#fff' }}>
                <Header></Header>
                <div style={{ padding: '0 .1rem' }}>
                    <DetailItem
                        itemEvent={item => this.$child_item = item}
                    ></DetailItem>



                </div>
            </div>
        )
    }
}
