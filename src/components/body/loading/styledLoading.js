import styled from 'styled-components'

export const IndicatorWrapper = styled.div `
    padding: .16rem .18rem;
    top: 50%;
    left: 50%;
    position: fixed;
    transform: translate(-50%,-50%);
    border-radius: 5px;
    background: rgba(0,0,0,.7);
    color: #fff;
    box-sizing: border-box;
    text-align: center;
`
export const IndicatorText = styled.p `
    color: #fff;
    text-align: center;
    font-size: .16rem;
`