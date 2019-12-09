import React, { Component } from 'react'

import Footer from './Footer'
import Item from './Item'

export default class content extends Component {
    render() {
        return (
            <div style={{ padding: '0.1rem' }}>
                <Item></Item>
                <Footer></Footer>
            </div>
        )
    }
}
