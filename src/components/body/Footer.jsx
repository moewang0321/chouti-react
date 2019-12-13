import React, { Component } from 'react'
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
    render() {
        return (
            <FooterWrap>

                <FooterOps>
                    <FootertextNor>手机版</FootertextNor>
                    <Line>丨</Line>
                    <Footertext>电脑版</Footertext>
                    <Footertext>
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
