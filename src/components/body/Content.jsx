import React, { Component } from 'react'
import Footer from './Footer'
import Item from './Item'
import Loading from './loading/Loading'
import { connect } from 'react-redux'

import { GETLIST } from '../../pages/home/action-types'
const mapState = (state) => {
    return {
        list: state.home.list
    }
}

const mapDispatch = (dispatch) => {
    return {
        loadData() {
            dispatch({
                type: GETLIST
            })
        }
    }
}
class content extends Component {

    constructor() {
        super()
        this.state = {
            list: []
        }
    }

    async componentDidMount() {
        // const _this = this
        this.props.loadData(GETLIST)
    }

    render() {
        return (
            <div style={{ padding: '0.1rem' }}>
                <div className="link-con">
                    {this.props.list.length ? (
                        <div className="list-wrap">
                            {
                                this.props.list.map((value) => {
                                    return (
                                        < Item key={value.id} obj={value}></Item>
                                    )

                                })
                            }
                            <Footer></Footer>

                        </div >
                    ) : (
                            <Loading></Loading>
                        )}

                </div>
            </div>
        )
    }
}

export default connect(mapState, mapDispatch)(content)
