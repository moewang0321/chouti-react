import React, { Component } from 'react';

import Header from '../../components/header/Header'
import { Content } from './index'

class Layout extends Component {
    render() {
        return (
            <>
                <Header></Header>
                <Content></Content>

            </>
        );
    }
}

export default Layout;