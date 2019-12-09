import styled from 'styled-components'
//展开菜单

const menuIco = styled.i `
        width: .16rem;
        height: .17rem;
        margin: 0 auto .1rem;
        display: block;
        background-image: url(https://m.chouti.com/static/image/m_icons.png);
        background-repeat: no-repeat;
        background-size: 16px 88px;
`

export const HeaderMenu = styled.ul `
        width: 100%;
        display: flex;
        justify-content: center;
        background: rgba(12,12,12,.95);
        box-shadow: -2px 2px 7px rgba(0,0,0,.4);
        position: absolute;
        z-index:99;
        top: .44rem;
`
export const HeaderMenuLi = styled.li `
        flex: 1;
        padding: .1rem 0;
        font-size: .12rem;
        border-right: 1px solid #000;
        box-shadow: inset 1px -1px 1px #2b2b2b;
`
export const HeaderMenuA = styled.a `
        display: block;
        width: 100%;
        height: 100%;
        color: #fff;
`

// export const HeaderMenuIco = styled(menuIco)
// `
//         width: .14 rem;
//         background-position: 0 0;
//         `

export const HeaderMenuIco = styled(menuIco)
`
        width: .14rem;
        height: ${props => props.height || '.17rem'};
        margin-top:${props => props.marginTop || 0};
        background-position: ${props => props.bcPosition || '0 0'};
    `