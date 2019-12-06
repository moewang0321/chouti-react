import styled from 'styled-components'

const Ico = styled.i `
        display: inline-block;
        background-image: url(https://m.chouti.com/static/image/icons.png);
        background-repeat: no-repeat;
        background-size: 20px 225px;
`

const menuIco = styled.i `
        width: .16rem;
        height: .17rem;
        margin: 0 auto .1rem;
        display: block;
        background-image: url(https://m.chouti.com/static/image/m_icons.png);
        background-repeat: no-repeat;
        background-size: 16px 88px;
`


export const HeaderWrap = styled.div `
        position: relative;
        height: .44rem;
        color: #fff;
        text-align: center;
        background: url(https://m.chouti.com/static/image/tab.png) repeat-x 0 0;
        display: flex;
        justify-content: space-between;
`
//左部菜单栏展开
export const HeaderLeftWrap = styled.div `
        width: .44rem;
        height: 100% ;
`

export const HeaderLeftWrapIco = styled(Ico)
`
        width: .18rem;
        height: .17rem;
        margin: .13rem 0;
        
`

//中部 标题 刷新按钮
export const HeaderCenterWrap = styled.div `
        color: #f0f0f0;
        font-size: .2rem;
        display: flex;
        flex: 1;
        align-items: center;
        justify-content: center;
`

export const HeaderCenterRefreshIco = styled(Ico)
`
        width: .16rem;
        height: .17rem;
        margin-left: .08rem;
        background-position: 0 -128px;
`

//右部 未登录状态
export const HeaderRightWrap = styled.div `
        width: .44rem;
        height: 100%;
`
export const HeaderRightWrapIco = styled(Ico)
`
        width: .18rem;
        height: .19rem;
        background-position: 0 -18px;
        margin: .12rem 0;
`

//展开菜单

export const HeaderMenu = styled.ul `
        width: 100%;
        display: flex;
        justify-content: center;
        background: rgba(12,12,12,.95);
        box-shadow: -2px 2px 7px rgba(0,0,0,.4);
        position: absolute;
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

export const HeaderMenuIco = styled(menuIco)
`
        width: .14 rem;
        background-position: 0 0;
`