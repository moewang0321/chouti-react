import React, { Component } from 'react'

export default class LoadingComment extends Component {
    render() {
        return (
            <div className="comment-list">

                <div className="no-comment">
                    <p className="bold">
                        <img src="https://i.loli.net/2019/12/11/mjZ9rbKNUDi1Ig7.png" alt="" width="15px" />
                    </p>
                    <p>正在加载……</p>
                </div>
            </div>
        )
    }
}
