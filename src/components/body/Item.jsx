import React, { Component } from 'react'
import {
    ItemBox,
    ItemInfo,
    LinkDetail,
    LinkTitle,
    LinkAuthor,
    LinkMatching,
    LinkOperate,
    OperateItem,
    RecommendItemIcon

} from './styledItem'
export default class Item extends Component {
    render() {
        return (
            <ItemBox
                width="1px"
                color="#e0e0e0"
                radius={0.05}
            >
                <ItemInfo>
                    <LinkDetail>
                        <LinkTitle>
                            
                        【日本“美魔女大赛”，52岁美女夺冠】日本举办第十届“国民美魔女大赛”，“美魔女”指内在与外在都绽放光芒的35岁以上女性。此次参赛者平均年龄为44岁，年龄最小的是一位39岁的单亲妈妈。最终52岁的坂村熏从中脱颖而出，这个颜值身材也是很让人羡慕了。
                        
                        </LinkTitle>

                        <LinkAuthor>
                            <span className="author-name">前美术课代表</span>
                            <span className="time-update">刚刚入热榜</span> 
                            <span className="category-name">42区</span> 
                        </LinkAuthor>
                    </LinkDetail>

                    <LinkMatching>
                        <img alt="" className="link-img" data-src="//img3.chouti.com/CHOUTI_20191207/EF3180286BF64C8AB99EA25769526DA8_W434H434.jpeg?imageView2/1/w/150/h/150/interlace/1" src="https://img3.chouti.com/CHOUTI_20191207/EF3180286BF64C8AB99EA25769526DA8_W434H434.jpeg?imageView2/1/w/150/h/150/interlace/1" lazy="loaded"></img>
                    </LinkMatching>
                </ItemInfo>

                <LinkOperate>
                    <OperateItem>
                        <RecommendItemIcon
                            bcPosition="0 -38px"
                        ></RecommendItemIcon>

                        <span className="operate-num">6</span>
                    </OperateItem>
                    <OperateItem>
                        
                        <RecommendItemIcon
                            bcPosition="0 -70px"
                        ></RecommendItemIcon>
                        <span className="operate-num">3</span>
                    </OperateItem>
                    <OperateItem>
                        
                        <RecommendItemIcon
                            bcPosition="0 -102px"
                            height=".13rem"
                        ></RecommendItemIcon>
                    </OperateItem>
                </LinkOperate>
                
            </ItemBox>
        )
    }
}
