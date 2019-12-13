import React, { Component } from 'react'
import $ from 'jquery'
import {
    HeaderMenu,
    HeaderMenuLi,
    HeaderMenuA,
    HeaderMenuIco
} from './styledHeaderMenu'
import { withRouter } from 'react-router-dom'

@withRouter
class HeaderDropMenu extends Component {

    constructor(props) {
        super(props)
        this.state = {

        }
    }

    handleClick = (event) => {
        // console.log(this.props)
        let text = $(event.currentTarget).children('a').children('span').html()
        let url = $(event.currentTarget).children('a').children('span').data('to')
        this.props.onChooseClick()
        this.props.history.push(url)
    }

    render() {
        return (

            <HeaderMenu>
                <HeaderMenuLi
                    onClick={this.handleClick}
                    data-to="/hot"
                >
                    <HeaderMenuA>
                        <HeaderMenuIco
                            bcPosition="0 0"

                        ></HeaderMenuIco>
                        <span>热榜</span>
                    </HeaderMenuA>
                </HeaderMenuLi>
                <HeaderMenuLi
                    onClick={this.handleClick}
                >
                    <HeaderMenuA>
                        <HeaderMenuIco
                            bcPosition="0 -18px"
                            height=".16rem"
                            marginTop=".01rem"
                        ></HeaderMenuIco>
                        <span>42区</span>
                    </HeaderMenuA>
                </HeaderMenuLi>
                <HeaderMenuLi
                    onClick={this.handleClick}
                    data-to="/scoff"
                >
                    <HeaderMenuA>
                        <HeaderMenuIco
                            bcPosition="0 -34px"
                            height=".12rem"
                            marginTop=".05rem"
                        ></HeaderMenuIco>
                        <span>段子</span>
                    </HeaderMenuA>
                </HeaderMenuLi>
                <HeaderMenuLi
                    onClick={this.handleClick}
                    data-to="/pic"
                >
                    <HeaderMenuA>
                        <HeaderMenuIco
                            bcPosition="0 -47px"
                            height=".13rem"
                            marginTop=".04rem"
                        ></HeaderMenuIco>
                        <span>图片</span>
                    </HeaderMenuA>
                </HeaderMenuLi>
                <HeaderMenuLi
                    onClick={this.handleClick}
                    data-to="/tec"
                >
                    <HeaderMenuA>
                        <HeaderMenuIco
                            bcPosition="0 -60px"
                            height=".14rem"
                            marginTop=".03rem"
                        ></HeaderMenuIco>
                        <span>挨踢1024</span>
                    </HeaderMenuA>
                </HeaderMenuLi>
                <HeaderMenuLi
                    onClick={this.handleClick}
                    data-to="/ask"
                >
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
export default HeaderDropMenu