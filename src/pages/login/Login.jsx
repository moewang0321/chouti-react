import React, { Component } from 'react'
import $ from 'jquery'
import { Header, HeaderLeft, BackIco, Title } from './styledLogin'
import { withRouter } from 'react-router-dom'
import { Toast } from 'antd-mobile';
let defaultUser = 'abc'
let defaultTel = '123'
let defaultPwd = 'wwwwww'

@withRouter
class Login extends Component {
        constructor() {
                super()
                this.state = {
                        logWay: 'tel-form'
                }
        }
        successToast() {
                Toast.success('登录成功', 1, () => {
                        localStorage.setItem('uId', 'a1j23hn6j3mfh2-c')
                        setTimeout(() => {
                                this.props.history.push('/hot')
                        }, 2);
                });

        }
        failToast(error) {
                Toast.fail(error, 1, () => {

                        $('input').val('')
                });
        }
        changeLogWay = (e) => {
                $(e.currentTarget).addClass('active').siblings().removeClass('active')
                let form = $(e.currentTarget).data('to')
                // console.log($(e.currentTarget).data('to'))
                this.setState({
                        logWay: $(e.currentTarget).data('to')
                })
                $(`.${form}`).css('display', 'block')
                $(`.${form}`).siblings('.login-form').css('display', 'none')
        }

        backClick = () => {
                this.props.history.goBack()
        }


        handleClick = () => {
                if (this.state.logWay === 'tel-form') {
                        let password = $('.pwd-input').val()
                        let tel = $('.tel-input').eq(0).val()
                        if (tel) {
                                (tel === defaultTel && password === defaultPwd) ? this.successToast() : this.failToast('登录失败')
                        } else {
                                this.failToast('用户名密码不能为空')
                        }
                } else if (this.state.logWay === 'user-form') {
                        let user = $('.user-input').val()
                        let password = $('.pwd-input').eq(1).val()
                        if (user) {
                                (user === defaultUser && password === defaultPwd) ? this.successToast() : this.failToast('登录失败')
                        } else {
                                this.failToast('用户名密码不能为空')
                        }

                }
        }

        render() {
                $('title').html('登录')
                $('html').css({
                        'background': '#fff'
                })
                $('body').css({
                        'background': '#fff'
                })
                return (
                        <div className="login" >
                                <Header>
                                        <HeaderLeft onClick={this.backClick}>
                                                <BackIco></BackIco>
                                        </HeaderLeft>

                                        <Title>登录</Title>
                                </Header>

                                <div className="login-content">
                                        <ul className="tab">
                                                <li
                                                        className="tab-li active"
                                                        onClick={this.changeLogWay}
                                                        data-to="tel-form"
                                                >
                                                        手机号登录
                        </li>
                                                <li
                                                        className="tab-li"
                                                        onClick={this.changeLogWay}
                                                        data-to="user-form"
                                                >
                                                        用户名登录
                        </li>
                                        </ul>

                                        <div className="login-form tel-form">
                                                <div className="input-item" ><select className="area-code select-code"><option value="86">
                                                        中国(+86)
                        </option><option value="355">
                                                                阿尔巴尼亚(+355)
                        </option><option value="213">
                                                                阿尔及利亚(+213)
                        </option><option value="93">
                                                                阿富汗(+93)
                        </option><option value="54">
                                                                阿根廷(+54)
                        </option><option value="353">
                                                                爱尔兰(+353)
                        </option><option value="20">
                                                                埃及(+20)
                        </option><option value="1907">
                                                                阿拉斯加(+1907)
                        </option><option value="968">
                                                                阿曼(+968)
                        </option><option value="1809">
                                                                安圭拉岛(+1809)
                        </option><option value="61">
                                                                澳大利亚(+61)
                        </option><option value="43">
                                                                奥地利(+43)
                        </option><option value="853">
                                                                澳门(+853)
                        </option><option value="1809">
                                                                巴巴多斯(+1809)
                        </option><option value="1809">
                                                                巴哈马(+1809)
                        </option><option value="92">
                                                                巴基斯坦(+92)
                        </option><option value="595">
                                                                巴拉圭(+595)
                        </option><option value="973">
                                                                巴林(+973)
                        </option><option value="507">
                                                                巴拿马(+507)
                        </option><option value="55">
                                                                巴西(+55)
                        </option><option value="32">
                                                                比利时(+32)
                        </option><option value="51">
                                                                秘鲁(+51)
                        </option><option value="354">
                                                                冰岛(+354)
                        </option><option value="1809">
                                                                波多黎各(+1809)
                        </option><option value="48">
                                                                波兰(+48)
                        </option><option value="591">
                                                                玻利维亚(+591)
                        </option><option value="501">
                                                                伯利兹(+501)
                        </option><option value="975">
                                                                不丹(+975)
                        </option><option value="226">
                                                                布基拉法索(+226)
                        </option><option value="850">
                                                                朝鲜(+850)
                        </option><option value="45">
                                                                丹麦(+45)
                        </option><option value="49">
                                                                德国(+49)
                        </option><option value="684">
                                                                东萨摩亚(+684)
                        </option><option value="593">
                                                                厄瓜多尔(+593)
                        </option><option value="7">
                                                                俄罗斯(+7)
                        </option><option value="33">
                                                                法国(+33)
                        </option><option value="298">
                                                                法罗群岛(+298)
                        </option><option value="396">
                                                                梵蒂冈(+396)
                        </option><option value="594">
                                                                法属圭亚那(+594)
                        </option><option value="679">
                                                                斐济(+679)
                        </option><option value="63">
                                                                菲律宾(+63)
                        </option><option value="500">
                                                                福克兰群岛(+500)
                        </option><option value="220">
                                                                冈比亚(+220)
                        </option><option value="299">
                                                                格陵兰岛(+299)
                        </option><option value="57">
                                                                哥伦比亚(+57)
                        </option><option value="506">
                                                                哥斯达黎加(+506)
                        </option><option value="671">
                                                                关岛(+671)
                        </option><option value="53">
                                                                古巴(+53)
                        </option><option value="592">
                                                                圭亚那(+592)
                        </option><option value="509">
                                                                海地(+509)
                        </option><option value="82">
                                                                韩国(+82)
                        </option><option value="31">
                                                                荷兰(+31)
                        </option><option value="504">
                                                                洪都拉斯(+504)
                        </option><option value="233">
                                                                加纳(+233)
                        </option><option value="1">
                                                                加拿大(+1)
                        </option><option value="855">
                                                                柬埔寨(+855)
                        </option><option value="686">
                                                                基里巴斯(+686)
                        </option><option value="224">
                                                                几内亚(+224)
                        </option><option value="974">
                                                                卡塔尔(+974)
                        </option><option value="682">
                                                                科克群岛(+682)
                        </option><option value="6722">
                                                                科科斯岛(+6722)
                        </option><option value="225">
                                                                科特迪瓦(+225)
                        </option><option value="965">
                                                                科威特(+965)
                        </option><option value="856">
                                                                老挝(+856)
                        </option><option value="961">
                                                                黎巴嫩(+961)
                        </option><option value="218">
                                                                利比亚(+218)
                        </option><option value="4175">
                                                                列支敦士登(+4175)
                        </option><option value="40">
                                                                罗马尼亚(+40)
                        </option><option value="352">
                                                                卢森堡(+352)
                        </option><option value="960">
                                                                马尔代夫(+960)
                        </option><option value="60">
                                                                马来西亚 (+60)
                        </option><option value="223">
                                                                马里(+223)
                        </option><option value="222">
                                                                毛里塔尼亚(+222)
                        </option><option value="596">
                                                                马提尼克(+596)
                        </option><option value="1">
                                                                美国(+1)
                        </option><option value="976">
                                                                蒙古(+976)
                        </option><option value="880">
                                                                孟加拉国(+880)
                        </option><option value="95">
                                                                缅甸(+95)
                        </option><option value="210">
                                                                摩洛哥(+210)
                        </option><option value="52">
                                                                墨西哥(+52)
                        </option><option value="338">
                                                                南斯拉夫(+338)
                        </option><option value="674">
                                                                瑙鲁(+674)
                        </option><option value="977">
                                                                尼泊尔(+977)
                        </option><option value="505">
                                                                尼加拉瓜(+505)
                        </option><option value="234">
                                                                尼日利亚(+234)
                        </option><option value="683">
                                                                纽埃岛(+683)
                        </option><option value="6723">
                                                                诺福克岛(+6723)
                        </option><option value="47">
                                                                挪威(+47)
                        </option><option value="351">
                                                                葡萄牙(+351)
                        </option><option value="81">
                                                                日本(+81)
                        </option><option value="46">
                                                                瑞典(+46)
                        </option><option value="41">
                                                                瑞士(+41)
                        </option><option value="503">
                                                                萨尔瓦多(+503)
                        </option><option value="221">
                                                                塞内加尔(+221)
                        </option><option value="966">
                                                                沙特阿拉伯(+966)
                        </option><option value="6724">
                                                                圣诞岛(+6724)
                        </option><option value="1809">
                                                                圣卢西亚(+1809)
                        </option><option value="223">
                                                                圣马力诺(+223)
                        </option><option value="94">
                                                                斯里兰卡 (+94)
                        </option><option value="597">
                                                                苏里南(+597)
                        </option><option value="677">
                                                                所罗门群岛(+677)
                        </option><option value="66">
                                                                泰国(+66)
                        </option><option value="886">
                                                                台湾(+886)
                        </option><option value="676">
                                                                汤加(+676)
                        </option><option value="90">
                                                                土耳其(+90)
                        </option><option value="216">
                                                                突尼斯(+216)
                        </option><option value="688">
                                                                图瓦卢(+688)
                        </option><option value="678">
                                                                瓦努阿图(+678)
                        </option><option value="502">
                                                                危地马拉(+502)
                        </option><option value="1809">
                                                                维尔京群岛(+1809)
                        </option><option value="1808">
                                                                威克岛(+1808)
                        </option><option value="58">
                                                                委内瑞拉(+58)
                        </option><option value="673">
                                                                文莱(+673)
                        </option><option value="852">
                                                                香港(+852)
                        </option><option value="1808">
                                                                夏威夷(+1808)
                        </option><option value="34">
                                                                西班牙(+34)
                        </option><option value="30">
                                                                希腊(+30)
                        </option><option value="65">
                                                                新加坡(+65)
                        </option><option value="64">
                                                                新西兰(+64)
                        </option><option value="685">
                                                                西萨摩亚(+685)
                        </option><option value="963">
                                                                叙利亚(+963)
                        </option><option value="1809">
                                                                牙买加(+1809)
                        </option><option value="39">
                                                                意大利(+39)
                        </option><option value="964">
                                                                伊拉克(+964)
                        </option><option value="98">
                                                                伊朗(+98)
                        </option><option value="91">
                                                                印度(+91)
                        </option><option value="62">
                                                                印度尼西亚(+62)
                        </option><option value="44">
                                                                英国(+44)
                        </option><option value="972">
                                                                以色列(+972)
                        </option><option value="962">
                                                                约旦(+962)
                        </option><option value="84">
                                                                越南(+84)
                        </option><option value="350">
                                                                直布罗陀(+350)
                        </option><option value="56">
                                                                智利(+56)
                        </option><option value="1808">
                                                                中途岛(+1808)
                        </option></select>
                                                        <div className="icon-box code"><i className="icon arrow-icon"></i></div></div>
                                                <div className="input-item">
                                                        <input autoComplete="off" type="tel" placeholder="手机号" className="tel-input" />
                                                </div>
                                                <div className="input-item">
                                                        <input autoComplete="off" type="password" placeholder="密码" className="pwd-input" />
                                                        <div className="icon-box eyes">
                                                                <i className="icon eyes-icon"></i>
                                                        </div>
                                                </div>
                                        </div>

                                        <div className="login-form user-form" style={{ display: 'none' }}>
                                                <div className="input-item">
                                                        <input autoComplete="off" type="text" placeholder="用户名" className="user-input" />
                                                </div>
                                                <div className="input-item">
                                                        <input autoComplete="off" type="password" placeholder="密码" className="pwd-input" />
                                                        <div className="icon-box eyes">
                                                                <i className="icon eyes-icon"></i>
                                                        </div>
                                                </div>
                                        </div>


                                        <div className="login-bottom" onClick={this.handleClick}>
                                                <button className="login-btn">登录</button>
                                        </div>
                                </div>

                        </div >
                )
        }
}
export default Login