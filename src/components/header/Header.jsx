import React, { Component } from 'react'
import $ from 'jquery'
import {
    HeaderWrap,
    HeaderLeftWrap,
    HeaderLeftWrapIco,
    HeaderCenterWrap,
    HeaderCenterRefreshIco,
    HeaderRightWrap,
    HeaderRightWrapIco,
    HeaderRightImg
} from './styledHeader'

import {
    HeaderMenu,
    HeaderMenuLi,
    HeaderMenuA,
    HeaderMenuIco
} from './styledHeaderMenu'
import { Modal } from 'antd-mobile';
import { withRouter } from 'react-router-dom'
const alert = Modal.alert;
@withRouter
class Header extends Component {
    constructor() {
        super()
        this.state = {
            headerText: '热榜',
            isShow: false,
            subject: {
                hot: '热榜',
                news: '42区',
                pic: '图片',
                tec: '挨踢1024',
                ask: '你问我答',
                scoff: '段子'

            },
            uId: localStorage.getItem('uId') || ''
        }

    }

    // static getDerivedStateFromProps(props) {
    //     console.log(props.location.pathname)

    //     return null
    // }

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

    handleClick = (event) => {
        let text = $(event.currentTarget).children('a').children('span').html()
        let url = $(event.currentTarget).data('to')
        let dataUrl = ''
        if (url === '/hot') {
            dataUrl = '/link' + url
        } else {
            dataUrl = '/zone' + url
        }

        this.props.handleClickChange(dataUrl)
        this.props.history.push(url)
        this.setState({
            isShow: false,
            headerText: text
        })

    }
    handleClickRefresh = () => {
        this.props.handleClickRefresh()
        this.setState({
            isShow: false
        })
    }

    changeRoute = () => {
        if (this.state.uId) {
            alert('系统提示', '确定要退出登录吗', [
                { text: '取消', onPress: () => console.log('取消') },
                {
                    text: '确认', onPress: () => {
                        localStorage.setItem('uId', '')
                        this.setState({
                            uId: ''
                        })
                        this.forceUpdate();

                    }
                },
            ])
        } else {

            this.props.history.push('/login')
        }
    }

    getPath(props) {
        return props.location.pathname === '/' ? 'hot' : props.location.pathname.substr(1)
    }

    componentDidMount() {
        let url = this.getPath(this.props)
        console.log(url)
        this.setState({
            headerText: this.state.subject[url]
        })


    }

    render() {
        $('title').html(`抽屉新热榜-${this.state.headerText}`)
        return (
            <HeaderWrap>
                <HeaderLeftWrap
                    onClick={this.isShow_Click}
                >
                    <HeaderLeftWrapIco>
                    </HeaderLeftWrapIco>
                </HeaderLeftWrap>

                <HeaderCenterWrap
                    onClick={this.handleClickRefresh}
                >
                    {this.state.headerText}
                    <HeaderCenterRefreshIco>
                    </HeaderCenterRefreshIco>
                </HeaderCenterWrap>

                <HeaderRightWrap
                    onClick={this.changeRoute}
                >
                    {
                        this.state.uId ? (

                            <HeaderRightImg></HeaderRightImg>
                        ) : (
                                <HeaderRightWrapIco>
                                </HeaderRightWrapIco>

                            )
                    }
                </HeaderRightWrap>


                {this.state.isShow ? (

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
                            data-to="/news"
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
                ) : ''}


            </HeaderWrap>

        )
    }
}
export default Header