import styled from 'styled-components'

export const IndicatorWrapper = styled.div `
    padding: .2rem;
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

export const SpinnerSnake = styled.div `
    animation: spinner-rotate .8s linear infinite;
    border-radius: 50%;
    border: 4px solid #ccc;
    border-right-color: transparent;
    height: 24px;
    width: 24px;
    margin: 0 auto;
`