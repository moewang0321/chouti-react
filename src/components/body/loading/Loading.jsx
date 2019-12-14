import React, { Component } from 'react'
import { IndicatorWrapper, IndicatorText } from './styledLoading'
export default class Loading extends Component {



    render() {
        return (
            <IndicatorWrapper>
                <div className="loadingio-spinner-rolling-oj98v172vuj">
                    <div className="loadingio-spinner-rolling-yt4bf8r6cuq">
                        <div className="ldio-p5i29xcxacf">
                            <div></div>
                        </div>
                    </div>
                </div>
                <IndicatorText>
                    加载中…
                </IndicatorText>

            </IndicatorWrapper>
        )
    }
}

