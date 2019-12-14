import React, { Component } from 'react'
import moment from 'moment'

import DetailChildComment from './DetailChildComment'
import NoComment from './NoComment'
import LoadingComment from './LoadingComment'
export default class DetailComment extends Component {

    constructor() {
        super()
        this.state = {
            commentList: []
        }
    }


    render() {
        // console.log('评论', this.props.comment)
        if (this.props.comment) {
            this.props.comment.forEach(value => {
                value.created_time = moment.duration(new Date().getTime() - value.created_time.toString().substr(0, 13), 'ms').locale('zh-cn').humanize() + '前'
                if (value.created_time === '几秒') {
                    value.created_time = '刚刚'
                }
            });
        }
        return (
            // <div></div>
            <ul className="comment-ul">
                {this.props.comment ? this.props.comment.length ? (
                    this.props.comment.map((value) => {
                        return (
                            <li
                                className={`comment-li comment-depth-0 ${value.childs ? 'child' : 'no-child'}`}
                                key={value.id}>
                                <div className="comment-content-con">
                                    <div className="comment-avatar">
                                        <img src={value.user.img_url} alt="" />
                                    </div>
                                    <div className="comment-item-content">
                                        <div className="comment-author-con">
                                            <span className="author">{value.user.nick}</span>
                                            <span className="time">{value.created_time}</span>
                                        </div>
                                        <div className="comment-content">
                                            <span >{value.content}</span>

                                        </div>

                                    </div>
                                </div>
                                {value.childs ? (


                                    <DetailChildComment obj={value.childs} />

                                ) : ''}
                            </li>
                        )
                    })
                ) : (
                        <NoComment></NoComment>
                    ) : <LoadingComment></LoadingComment>}
            </ul >
        )
    }
}
