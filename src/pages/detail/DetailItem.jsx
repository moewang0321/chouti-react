import React, { Component } from 'react'
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
            data: {}
        }
        this.loadingInfo = function () {
            id = props.location.pathname.substr(6)
            this.props.refresh()
            this.props.loadItem()
            this.props.loadComment()
        }
    }



    render() {
        return (
            JSON.stringify(this.props.item) === '{}' ? (
                <Loading></Loading>
            ) : (
                    <>
                        <Item obj={this.props.item}></Item>


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