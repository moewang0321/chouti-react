import React, { Component } from 'react'
import {
    Header,
    HeaderLeft,
    HeaderRight,
    HeaderMiddle,
    HeaderBackIco,
    HeaderRefreshIco
} from './styledDetail'
import { withRouter } from 'react-router-dom'

@withRouter
class DetailHeader extends Component {

    backClick = () => {
        this.props.history.goBack()
    }

    render() {
        return (
            <div>
                <Header>
                    <HeaderLeft
                        onClick={this.backClick}
                    >
                        <HeaderBackIco></HeaderBackIco>
                    </HeaderLeft>
                    <HeaderMiddle>评论</HeaderMiddle>
                    <HeaderRight>
                        <HeaderRefreshIco></HeaderRefreshIco>
                    </HeaderRight>
                </Header>
            </div>
        )
    }
}
export default DetailHeader