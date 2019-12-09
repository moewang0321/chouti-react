import styled from 'styled-components'

const Ico = styled.i `
        display: inline-block;
        background-image: url(https://m.chouti.com/static/image/icons.png);
        background-repeat: no-repeat;
        background-size: 20px 225px;
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