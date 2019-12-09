import React, { Component } from 'react'

import {
    HeaderMenu,
    HeaderMenuLi,
    HeaderMenuA,
    HeaderMenuIco
} from './styledHeaderMenu'

export default class HeaderDropMenu extends Component {



    render() {
        return (

            <HeaderMenu>
                <HeaderMenuLi>
                    <HeaderMenuA>
                        <HeaderMenuIco
                            bcPosition="0 0"

                        ></HeaderMenuIco>
                        <span>热榜</span>
                    </HeaderMenuA>
                </HeaderMenuLi>
                <HeaderMenuLi>
                    <HeaderMenuA>
                        <HeaderMenuIco
                            bcPosition="0 -18px"
                            height=".16rem"
                            marginTop=".01rem"
                        ></HeaderMenuIco>
                        <span>42区</span>
                    </HeaderMenuA>
                </HeaderMenuLi>
                <HeaderMenuLi>
                    <HeaderMenuA>
                        <HeaderMenuIco
                            bcPosition="0 -34px"
                            height=".12rem"
                            marginTop=".05rem"
                        ></HeaderMenuIco>
                        <span>段子</span>
                    </HeaderMenuA>
                </HeaderMenuLi>
                <HeaderMenuLi>
                    <HeaderMenuA>
                        <HeaderMenuIco
                            bcPosition="0 -47px"
                            height=".13rem"
                            marginTop=".04rem"
                        ></HeaderMenuIco>
                        <span>图片</span>
                    </HeaderMenuA>
                </HeaderMenuLi>
                <HeaderMenuLi>
                    <HeaderMenuA>
                        <HeaderMenuIco
                            bcPosition="0 -60px"
                            height=".14rem"
                            marginTop=".03rem"
                        ></HeaderMenuIco>
                        <span>挨踢1024</span>
                    </HeaderMenuA>
                </HeaderMenuLi>
                <HeaderMenuLi>
                    <HeaderMenuA>
                        <HeaderMenuIco
                            bcPosition="0 -75px"
                            height=".14rem"
                            marginTop=".03rem"

                        ></HeaderMenuIco>
                        <span>你问我答</span>
                    </HeaderMenuA>
                </HeaderMenuLi>
            </HeaderMenu>


        )
    }
}
