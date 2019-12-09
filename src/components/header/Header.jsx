import React, { Component } from 'react'

import {
    HeaderWrap,
    HeaderLeftWrap,
    HeaderLeftWrapIco,
    HeaderCenterWrap,
    HeaderCenterRefreshIco,
    HeaderRightWrap,
    HeaderRightWrapIco
} from './styledHeader'

import HeaderDropMenu from './HeaderMenu'

export default class Header extends Component {
    constructor() {
        super()
        this.state = {
            isShow: false,

        }

    }

    isShow_Click = () => {
        if (this.state.isShow) {
            this.setState({
                isShow: false
            })
        } else {
            this.setState({
                isShow: true
            })
        }
    }

    render() {
        return (
            <HeaderWrap>
                <HeaderLeftWrap
                    onClick={this.isShow_Click}
                >
                    <HeaderLeftWrapIco>
                    </HeaderLeftWrapIco>
                </HeaderLeftWrap>

                <HeaderCenterWrap>
                    热榜
                    <HeaderCenterRefreshIco>
                    </HeaderCenterRefreshIco>
                </HeaderCenterWrap>

                <HeaderRightWrap>
                    <HeaderRightWrapIco>
                    </HeaderRightWrapIco>
                </HeaderRightWrap>


                {this.state.isShow ? (
                    <HeaderDropMenu></HeaderDropMenu>
                ) : ''}


            </HeaderWrap>

        )
    }
}
