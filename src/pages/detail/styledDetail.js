import styled from 'styled-components'

const ico = styled.i`
    display: inline-block;
    background-image: url(https://m.chouti.com/static/image/icons.png);
    background-repeat: no-repeat;
    background-size: 20px 225px;
`

export const Header = styled.div`
        position: relative;
        height: .44rem;
        color: #fff;
        text-align: center;
        background: url(https://m.chouti.com/static/image/tab.png) repeat-x 0 0;
        display: flex;
        justify-content: space-between;
`

export const HeaderLeft = styled.div`
    width: .44rem;
    height: 100%;
`

export const HeaderRight = styled.div`
    width: .44rem;
    height: 100%;
`

export const HeaderMiddle = styled.div`
    color: #f0f0f0;
    font-size: .2rem;
    display: -webkit-box;
    display: -ms-flexbox;
    display: flex;
    flex: 1;
    align-items: center;
    justify-content: center;
`

export const HeaderBackIco = styled(ico)
    `
    width: .2rem;
    height: .12rem;
    background-position: 0 -145px;
    margin: .16rem 0;

`

export const HeaderRefreshIco = styled(ico)
    `
    width: .16rem;
    height: .17rem;
    margin-top: .13rem;
    background-position: 0 -128px;
`

export const DownloadBox = styled.div`
    padding: .2rem 0;
`
export const DownloadBtn = styled.a`
    width: 100%;
    height: .4rem;
    line-height: .4rem;
    display: block;
    text-align: center;
    border-radius: 6px;
    font-size: .13rem;
    background: #666;
    color: #fff;
`

export const DownloadImg = styled.img.attrs((props) => ({
    src: 'https://m.chouti.com/static/image/m-down-btn.png'
}))`
    margin-right: .1rem;
    vertical-align: sub;
`