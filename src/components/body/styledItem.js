import styled from 'styled-components'
import border from '../styled/border'

//border: 1px solid #e0e0e0;

//border-radius: .05rem;

const itemIcon = styled.i `
    width: .17rem;
    height: .16rem;
    display: inline-block;
    background: url(https://m.chouti.com/static/image/icons.png) no-repeat;
    background-size: 20px 225px;
`

export const ItemBox = border(
    styled.div `
        width: 100%;
        background: #fbfbfb;
        margin-top: .1rem;
        box-shadow: 0 1px 2px 0 rgba(0,0,0,.15);
    `
)
//信息部分
export const ItemInfo = styled.a.attrs((props) => ({
    href: props.href
}))
`
    padding: .1rem .08rem;
    display: flex;

`
export const LinkDetail = styled.div `
        flex: 1;
`

export const LinkTitle = styled.span `
    font-size: .16rem;
    color: #444;
`

export const LinkAuthor = styled.div `
    color: #989898;
    font-size: .12rem;
    span{
        margin: 0.05rem;
    }
`

export const LinkMatching = styled.div `
    width: .75rem;
    height: .75rem;
    background:#ccc;
    margin-left: .08rem;
    img{
        width: 100%;
        height: 100%;
    }
`

//底部
export const LinkOperate = styled.div `
    width: 100%;
    height: .33rem;
    border-top: 1px solid #e0e0e0;
    display: flex;
`

export const OperateItem = styled.div `
    display: flex;
    flex: 1;
    justify-content: center;
    align-items: center;
    position: relative;
`

export const RecommendItemIcon = styled(itemIcon)
`
    background-position: ${props => props.bcPosition || '0 0'};
    height: ${props => props.height || ''};
`