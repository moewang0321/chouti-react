import styled from 'styled-components'

export const FooterWrap = styled.div `
    text-align:center
`
export const Footertext = styled.a `
    color: #5d7eab;
    font-size: .13rem;
`

export const FootertextNor = styled(Footertext)
`
    color:#666
`

export const FooterOps = styled.div `
    height: .3rem;
`
export const Line = styled.span `
    font-size: .16rem;
    color: #8c8c8c;
    padding: 0 .18rem;
`

export const BackTopIco = styled.i `   
    width: .17rem;
    height: .17rem;
    display: inline-block;
    background: url(https://m.chouti.com/static/image/top.png);
    background-size: cover;
    vertical-align: sub;
    margin: 0 .05rem;
`

export const FooterCpys = styled.div `
    margin-top: .22rem;
`

export const FooterCpysButton = styled.button `
    width: 100%;
    height: .4rem;
    line-height: .4rem;
    font-size: .16rem;
    color: #fff;
    border-radius: 6px;
    background: #3365c9;
`