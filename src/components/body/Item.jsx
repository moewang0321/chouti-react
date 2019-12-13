import React, { Component } from 'react'
import $ from 'jquery'
import moment from 'moment'
import "moment/locale/zh-cn"
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
import { withRouter } from 'react-router-dom'
@withRouter
class Item extends Component {
    constructor() {
        super()
        this.state = {
            info: {},
            id: '',
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


    commentClick = (e) => {
        let rou = $(e.currentTarget).data('to')
        this.props.history.push(rou)
    }

    componentDidMount() {

        let timeNow = new Date().getTime()
        let timeStr = moment.duration(timeNow - this.props.obj.time_into_pool.toString().substr(0, 13), 'ms')
        timeStr = timeStr.locale('zh-cn').humanize() + '前'
        if (timeStr === '几秒') {
            timeStr = '刚刚'
        }

        this.setState({
            info: this.props.obj,
            id: this.props.obj.id,
            title: this.props.obj.title,
            img_url: this.props.obj.img_url + '?imageView2/1/w/150/h/150/interlace/1',
            author: this.props.obj.submitted_user,
            time: timeStr,
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
                            <span className="time-update">{this.state.time} {this.props.url === '/all/hot' ? ('入热榜') : ('发布')}</span>
                            <span className="category-name">{this.state.subject_now}</span>
                        </LinkAuthor>
                    </LinkDetail>
                    {
                        this.props.obj.img_url ? (
                            <LinkMatching>
                                <img alt="" className="link-img" src={this.state.img_url} ></img>
                            </LinkMatching>
                        ) : ''
                    }

                </ItemInfo>

                <LinkOperate>
                    <OperateItem>
                        <RecommendItemIcon
                            bcPosition="0 -38px"
                        ></RecommendItemIcon>

                        <span className="operate-num">{this.state.ups}</span>
                    </OperateItem>
                    <OperateItem
                        onClick={this.commentClick}
                        data-to={`/link/${this.state.id}`}
                    >

                        <RecommendItemIcon
                            bcPosition="0 -70px"
                        ></RecommendItemIcon>
                        <span className="operate-num">{this.state.comments_count}</span>
                    </OperateItem>
                    <OperateItem>

                        <RecommendItemIcon
                            bcPosition="0 -102px"
                            height=".13rem"
                        ></RecommendItemIcon>
                    </OperateItem>
                </LinkOperate>

            </ItemBox >

        )
    }
}
export default Item