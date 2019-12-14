import React, { Component } from 'react'
import $ from 'jquery'
import { connect } from 'react-redux'
import { GETITEM, GETCOMMENT, EMPTY } from './action-types'
import Item from '../../components/body/Item'
import DetailComment from './DetailComment'
import Loading from '../../components/body/loading/Loading'
import { withRouter } from 'react-router-dom'
import {
    DownloadBox,
    DownloadBtn,
    DownloadImg
} from './styledDetail'
let id = ''

const mapState = (state) => {
    return {
        item: state.detail.item,
        comment: state.detail.comment
    }
}

const mapDispatch = (dispatch) => {
    return {
        loadItem() {
            dispatch({
                type: GETITEM,
                id
            })
        },
        loadComment() {
            dispatch({
                type: GETCOMMENT,
                id
            })
        },
        refresh() {
            dispatch({
                type: EMPTY
            })
        }
    }
}
@withRouter
class DetailItem extends Component {
    constructor(props) {
        super(props)
        this.props.itemEvent(this)
        this.state = {
            data: {},
            likeList: []
        }
        this.loadingInfo = function () {
            id = props.location.pathname.substr(6)
            this.props.refresh()
            this.props.loadItem()
            this.props.loadComment()
        }
    }

    likeChoose = (id) => {
        if (localStorage.getItem('likeList') && JSON.parse(localStorage.getItem('likeList')).length) {

            this.setState({
                likeList: [...JSON.parse(localStorage.getItem('likeList'))]
            })
        } else {
            this.setState({
                likeList: []
            })
        }
        setTimeout(() => {
            if (localStorage.getItem('uId')) {
                if (this.state.likeList.length) {
                    if (this.state.likeList.indexOf(id) === -1) {

                        let arr = this.state.likeList
                        arr.push(id)
                        this.setState({
                            likeList: [...arr]
                        }, () => {
                            localStorage.setItem('likeList', JSON.stringify(this.state.likeList))
                            console.log('添加state', this.state.likeList)
                        })
                    } else {
                        let arr = this.state.likeList
                        for (var i = 0; i < arr.length; i++) {

                            if (arr[i] === id) {
                                arr.splice(i, 1);
                            }

                        }
                        this.setState({
                            likeList: [...arr]
                        }, () => {
                            localStorage.setItem('likeList', JSON.stringify(this.state.likeList))
                            console.log('取消state', this.state.likeList)
                        })

                    }
                } else {
                    this.setState({
                        likeList: [id]
                    }, () => {
                        localStorage.setItem('likeList', JSON.stringify(this.state.likeList))
                        console.log('无缓存', this.state.likeList)
                    })
                }

            } else {
                this.props.history.push('/login')
            }

        }, 0);
    }

    componentDidMount() {
        if (localStorage.getItem('likeList') && JSON.parse(localStorage.getItem('likeList')).length) {

            this.setState({
                likeList: [...JSON.parse(localStorage.getItem('likeList'))]
            })
        } else {
            this.setState({
                likeList: []
            })
        }
    }

    render() {
        $('title').html(this.props.item.title)
        return (
            JSON.stringify(this.props.item) === '{}' ? (
                <Loading></Loading>
            ) : (
                    <>
                        <Item
                            likeChoose={this.likeChoose}
                            obj={this.props.item}
                            likeList={this.state.likeList}
                        ></Item>


                        <DetailComment comment={this.props.comment ? this.props.comment.commentList : []}></DetailComment>


                        <DownloadBox>
                            <DownloadBtn>
                                <DownloadImg />
                                打开客户端发表评论
                            </DownloadBtn>
                        </DownloadBox>
                    </>

                )
        )
    }
}

export default connect(mapState, mapDispatch)(DetailItem)