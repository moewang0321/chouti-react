import React, { Component } from 'react'
import moment from 'moment'
export default class DetailChildComment extends Component {
    render() {
        if (this.props.obj) {
            this.props.obj.forEach(value => {
                value.created_time = moment.duration(new Date().getTime() - value.created_time.toString().substr(0, 13), 'ms').locale('zh-cn').humanize() + '前'
                if (value.created_time === '几秒') {
                    value.created_time = '刚刚'
                }
            });
        }
        return (
            <ul className="comment-ul">
                {
                    this.props.obj.map((value) => {
                        return (
                            <li className={`comment-li ${value.childs && value.childs.length ? 'child' : 'no-child'}`} key={value.id}>
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

                                {value.childs && value.childs.length ? (
                                    <DetailChildComment obj={value.childs}></DetailChildComment>
                                ) : ''}
                            </li>

                        )
                    })
                }
            </ul>
        )
    }
}
