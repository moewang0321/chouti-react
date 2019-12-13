import React, { Component } from 'react'
import { LoadBtn, LoadMoreBtn } from './styledMoreBtn'

export default class MoreBtn extends Component {

    constructor(props) {
        super(props)
        this.state = {
            length: 0
        }
    }

    static getDerivedStateFromProps(props, state) {
        return null
    }

    handleClick = () => {
        // console.log(this.props.isLoading)
        this.props.handleClickMore()
        this.setState({
            length: this.props.length
        })
    }

    render() {
        console.log(this.props.length, this.state.length)
        return (
            <div className="load-more">
                <LoadBtn>
                    <LoadMoreBtn
                        onClick={this.handleClick}
                    >
                        {
                            this.props.length === this.state.length ? (
                                <>
                                    <i className="loading-icon"></i>正在加载
                                </>
                            ) : '加载更多'
                        }
                    </LoadMoreBtn>
                </LoadBtn>
            </div>
        )
    }
}


