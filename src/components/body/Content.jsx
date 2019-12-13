import React, { Component } from 'react'
import Footer from './Footer'
import Item from './Item'
import Loading from './loading/Loading'
import MoreBtn from './moreButton/MoreBtn'
import { connect } from 'react-redux'

import { GETLIST, REFRESH } from '../../pages/home/action-types'
import { withRouter } from 'react-router-dom'

let paramsValue = 0
let url = '/link/hot'
let params = 'afterTime'
const mapState = (state) => {
    return {
        list: state.home.list
    }
}

const mapDispatch = (dispatch) => {
    return {
        loadData() {
            dispatch({
                type: GETLIST,
                url: '/api/m' + url,
                paramsValue,
                params
            })
        },
        refresh() {
            dispatch({
                type: REFRESH
            })
        }

    }
}
@withRouter
class content extends Component {

    constructor(props) {
        super(props)
        this.props.contentEvent(this)
        this.state = {
            list: [],
            length: 0,
            isLoading: false
        }
        this.upDateThis = function () {
            console.log('刷新!')
            this.props.refresh()
            this.props.loadData()
        }

        this.changeRouterData = function (aaa) {
            url = aaa
            if (url === '/link/hot') {

                params = 'afterTime'
            } else {

                params = 'afterScore'
            }
            console.log('跳转路由！')
            this.props.refresh()
            this.props.loadData()

        }
    }

    handleClick = () => {
        console.log('加载更多！')
        if (url === '/link/hot') {
            paramsValue = this.props.list[this.props.list.length - 1].time_into_pool
            params = 'afterTime'
        } else {
            paramsValue = this.props.list[this.props.list.length - 1].score
            params = 'afterScore'
        }
        this.setState({
            isLoading: true
        })
        this.props.loadData()
    }

    resetIsLoading = () => {
        this.setState({
            isLoading: false
        })
    }

    static getDerivedStateFromProps(props, state) {
        // url = props.location.pathname
        // if (url === '/hot') {
        //     url = '/link' + url
        // } else {
        //     url = '/zone' + url
        // }
        // props.loadData()
        return {
            length: props.list.length
        }
    }

    async componentDidMount() {
        url = this.props.location.pathname

        if (url === '/hot') {
            url = '/link' + url
            params = 'afterTime'
        } else {
            url = '/zone' + url
            params = 'afterScore'
        }
        this.props.refresh()
        this.props.loadData()
    }

    render() {
        return (

            <div className="link-content">
                {this.props.list.length ? (
                    <div className="link-con">
                        <div className="list-wrap">
                            {
                                this.props.list.map((value) => {
                                    return (
                                        < Item key={value.id} obj={value} url={url}></Item>
                                    )

                                })
                            }
                            <MoreBtn
                                handleClickMore={this.handleClick}
                                length={this.state.length}
                            >
                            </MoreBtn>


                        </div >
                        <Footer></Footer>

                    </div>
                ) : (
                        <Loading></Loading>
                    )}

            </div>
        )
    }
}

export default connect(mapState, mapDispatch)(content)
