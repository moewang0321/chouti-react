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
    constructor() {
        super()
        this.state = {
            info: {},
            title: '',
            img_url: '',
            author: {},
            time: '',
            subject: {
                1: '42区',
                4: '图片',
                100: '挨踢1024',
                151: '你问我答',
                177: '视频'

            },
            subject_now: '',
            ups: '',
            comments_count: '',
            url: ''
        }
    }

    componentDidMount() {
        this.setState({
            info: this.props.obj,
            title: this.props.obj.title,
            img_url: this.props.obj.img_url,
            author: this.props.obj.submitted_user,
            time: this.props.obj.action_time,
            subject_now: this.state.subject[this.props.obj.subject_id],
            ups: this.props.obj.ups,
            comments_count: this.props.obj.comments_count,
            url: this.props.obj.url

        })




    }

    render() {
        return (
            <ItemBox
                width="1px"
                color="#e0e0e0"
                radius={0.05}
            >
                <ItemInfo href={this.state.url}>
                    <LinkDetail>
                        <LinkTitle>

                            {this.state.title}

                        </LinkTitle>

                        <LinkAuthor>
                            <span className="author-name">{this.state.author.nick}</span>
                            <span className="time-update">刚刚入热榜</span>
                            <span className="category-name">{this.state.subject_now}</span>
                        </LinkAuthor>
                    </LinkDetail>

                    <LinkMatching>
                        <img alt="" className="link-img" src={this.state.img_url} ></img>
                    </LinkMatching>
                </ItemInfo>

                <LinkOperate>
                    <OperateItem>
                        <RecommendItemIcon
                            bcPosition="0 -38px"
                        ></RecommendItemIcon>

                        <span className="operate-num">{this.state.ups}</span>
                    </OperateItem>
                    <OperateItem>

                        <RecommendItemIcon
                            bcPosition="0 -70px"
                        ></RecommendItemIcon>
                        <span className="operate-num">{this.state.comment_count}</span>
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
