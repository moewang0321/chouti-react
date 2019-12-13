import React, { Component } from 'react'

export default class NoComment extends Component {
    render() {
        return (
            <div className="comment-list">

                <div className="no-comment">
                    <p className="bold">还没有评论哦！</p>
                    <p>赶紧当第一个评论者吧！</p>
                </div>
            </div>
        )
    }
}
