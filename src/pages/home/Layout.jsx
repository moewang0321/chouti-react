import React, { Component } from 'react';
import { Switch, Route, Redirect } from 'react-router-dom'
import $ from 'jquery'
import Header from '../../components/header/Header'
import { Content } from './index'

class Layout extends Component {

    componentRefresh = () => {
        this.$child_content.upDateThis()
    }

    componentRouteChange = (url) => {
        this.$child_content.changeRouterData(url)
    }

    render() {
        $('html').css({
            'background': '#f5f5f5'
        })
        $('body').css({
            'background': ''
        })
        return (
            <div>
                <Header
                    handleClickRefresh={this.componentRefresh}
                    handleClickChange={this.componentRouteChange}
                ></Header>
                <Switch>
                    <Route
                        path="/hot"
                        render={() => (
                            <Content contentEvent={content => this.$child_content = content} url="/all/hot" ></Content>

                        )}
                    />
                    <Route
                        path="/news"
                        render={() => (
                            <Content contentEvent={content => this.$child_content = content} url="/news" ></Content>

                        )}
                    />
                    <Route
                        path="/scoff"
                        render={() => (
                            <Content contentEvent={content => this.$child_content = content} url="/scoff" ></Content>

                        )}
                    />
                    <Route
                        path="/pic"
                        render={() => (
                            <Content contentEvent={content => this.$child_content = content} url="/pic" ></Content>

                        )}
                    />
                    <Route
                        path="/tec"
                        render={() => (
                            <Content contentEvent={content => this.$child_content = content} url="/tec" ></Content>

                        )}
                    />
                    <Route
                        path="/ask"
                        render={() => (
                            <Content contentEvent={content => this.$child_content = content} url="/ask" ></Content>

                        )}
                    />
                    <Redirect
                        from="/"
                        to="/hot"
                    />
                </Switch>
            </div>
        );
    }
}

export default Layout;