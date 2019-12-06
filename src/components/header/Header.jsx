import React, { Component } from 'react'

import {
    HeaderWrap,
    HeaderLeftWrap,
    HeaderLeftWrapIco,
    HeaderCenterWrap,
    HeaderCenterRefreshIco,
    HeaderRightWrap,
    HeaderRightWrapIco,
    HeaderMenu,
    HeaderMenuLi,
    HeaderMenuA,
    HeaderMenuIco
} from './styledHeader'

export default class Header extends Component {
    render() {
        return (
            <HeaderWrap>
                <HeaderLeftWrap>
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
                <HeaderMenu>
                    <HeaderMenuLi>
                        <HeaderMenuA>
                            <HeaderMenuIco></HeaderMenuIco>
                            <span>热榜</span>
                        </HeaderMenuA>
                    </HeaderMenuLi>
                    <HeaderMenuLi>
                        <HeaderMenuA>
                            <HeaderMenuIco></HeaderMenuIco>
                            <span>热榜</span>
                        </HeaderMenuA>
                    </HeaderMenuLi>
                    <HeaderMenuLi>
                        <HeaderMenuA>
                            <HeaderMenuIco></HeaderMenuIco>
                            <span>热榜</span>
                        </HeaderMenuA>
                    </HeaderMenuLi>
                    <HeaderMenuLi>
                        <HeaderMenuA>
                            <HeaderMenuIco></HeaderMenuIco>
                            <span>热榜</span>
                        </HeaderMenuA>
                    </HeaderMenuLi>
                    <HeaderMenuLi>
                        <HeaderMenuA>
                            <HeaderMenuIco></HeaderMenuIco>
                            <span>热榜</span>
                        </HeaderMenuA>
                    </HeaderMenuLi>
                    <HeaderMenuLi>
                        <HeaderMenuA>
                            <HeaderMenuIco></HeaderMenuIco>
                            <span>热榜</span>
                        </HeaderMenuA>
                    </HeaderMenuLi>
                </HeaderMenu>

            </HeaderWrap>

        )
    }
}
