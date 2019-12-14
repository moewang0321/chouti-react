import React, { Component } from 'react'
import $ from 'jquery'
import {
    FooterWrap,
    FooterOps,
    Footertext,
    FootertextNor,
    Line,
    BackTopIco,
    FooterCpys,
    FooterCpysButton
} from './styledFooter'
export default class Footer extends Component {
    topClick = () => {
        var T = $(window).scrollTop();
        var t = setInterval(function () {
            if (T < 0) {
                clearInterval(t);
            } else {
                T -= 350;
                $(window).scrollTop(T);
            }
        }, 13);
    }
    render() {
        return (
            <FooterWrap>

                <FooterOps>
                    <FootertextNor>手机版</FootertextNor>
                    <Line>丨</Line>
                    <Footertext>电脑版</Footertext>
                    <Footertext
                        onClick={this.topClick}
                    >
                        <BackTopIco></BackTopIco>
                        回顶部
                    </Footertext>

                </FooterOps>

                <FooterCpys>
                    <FooterCpysButton>下载客户端</FooterCpysButton>
                </FooterCpys>

            </FooterWrap>
        )
    }
}
