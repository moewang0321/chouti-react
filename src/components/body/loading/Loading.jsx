import React, { Component } from 'react'
import { IndicatorWrapper, IndicatorText } from './styledLoading'
export default class Loading extends Component {



    render() {
        return (
            <IndicatorWrapper>
                <img src="https://i.loli.net/2019/12/11/mjZ9rbKNUDi1Ig7.png" alt="" width="39px" />
                <IndicatorText>
                    加载中…
                </IndicatorText>

            </IndicatorWrapper>
        )
    }
}
