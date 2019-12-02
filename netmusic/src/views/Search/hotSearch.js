import React, { Fragment } from 'react'
import { Search_hot, Search_about } from '../../api/SearchApi'
import SearchCss from '../../assets/css/search.module.css'
import { Badge, Modal } from 'antd-mobile';
import store from '../../store'
import Pao from './tan';

const alert = Modal.alert;
class Hot extends React.Component {
    constructor() {
        super()
        this.state = {
            hots: [],
            value: '',
            historyData: [],
            result: [],
            flag: false
        }
    }
    // 回退
    jumpBack() {
        this.props.history.push("/found/discover")
    }
    //输入值变化视图变化,并显示模糊搜索数据
    change(e) {
        this.setState({
            value: e.target.value
        })
        setTimeout(() => {
            if (this.state.value !== '') {
                console.log(1)
                this.setState({
                    flag: true
                })
                Search_about(this.refs.input1.value)
                    .then(res => {
                        // console.log(res)
                        this.setState({
                            result: res.result.allMatch
                        })
                    })
            } else {
                this.setState({
                    flag: false
                })
            }
        }, 200)
    }
    // 页面加载显示热搜榜
    componentDidMount() {
        if (localStorage.getItem("data")) {
            this.setState({
                historyData: JSON.parse(localStorage.getItem("data"))
            })
        }
        Search_hot()
            .then(res => {
                console.log(res)
                if (res.code === 200) {
                    this.setState({
                        hots: res.data
                    })
                }
            })
    }
    // 搜索回车时跳转搜索页面
    searchRes(e) {
        // console.log(e.keyCode)
        if (e.keyCode === 13) {
            this.props.history.push('/searchres?keywords=' + this.state.value)
            // 搜索内容不在历史记录
            if (this.state.historyData.indexOf(this.state.value) === -1) {
                this.setState({
                    // 添加到历史记录中
                    historyData: this.state.historyData.unshift(this.state.value)
                })
                setTimeout(() => {
                    localStorage.setItem("data", JSON.stringify(this.state.historyData))
                }, 20)
            }
        }
    }
    // 点击热搜榜名字搜索
    jump_search(name) {
        this.props.history.push('/searchres?keywords=' + name)
        //存储数据
        if (this.state.historyData.indexOf(name) === -1) {
            this.setState({
                historyData: this.state.historyData.unshift(name)
            })
            setTimeout(() => {
                localStorage.setItem("data", JSON.stringify(this.state.historyData))
            }, 20)
        }
    }
    // 点击右上角图标跳转歌手列表
    jump_singer() {
        this.props.history.push('/singer')
    }
    // 清除历史记录
    clear() {
        alert('', '确定清空全部历史记录', [
            { text: '取消', onPress: () => console.log('cancel'), style: 'default' },
            {
                text: '清空', onPress: () => {
                    this.setState({
                        historyData: []
                    })
                    localStorage.removeItem('data')
                }
            }
        ]);
    }
    // 历史记录跳转
    jump(name) {
        this.props.history.push('/searchres?keywords=' + name)
    }
    render() {
        let { hots, value, result } = this.state
        // console.log(this.props)
        let test = (
            <Fragment>
                <Badge text="HOT" style={{
                    marginLeft: 12,
                    padding: '0 3px',
                    backgroundColor: '#fff',
                    borderRadius: 2,
                    color: '#f19736',
                    border: '1px solid #f19736'
                }} />
            </Fragment>
        )
        let data = this.state.historyData
        let history_data = (<Fragment>
            <div className={SearchCss.search_history}>
                <p className={SearchCss.poo}>
                    <span className={SearchCss.spann}>历史记录</span>
                    <img className={SearchCss.imger} src={require("../../assets/icons/del_history.png")} alt="" onClick={this.clear.bind(this)} />
                </p>
                <ul className={SearchCss.ull}>
                    {data.map((item, index) => <li key={index} className={SearchCss.spaner} onClick={this.jump.bind(this, item)}>{item}</li>)}
                </ul>
            </div>
        </Fragment>)

        return (
            <Fragment>
                <div className={SearchCss.search_bar}>
                    <img className={SearchCss.search_back} src={require('../../assets/icons/left_search.png')} alt="" onClick={this.jumpBack.bind(this)} />
                    <input className={SearchCss.search_ipt} ref="input1" type="text" value={value} onChange={this.change.bind(this)} placeholder='请输入搜索内容' onKeyDown={this.searchRes.bind(this)} />
                    <img className={SearchCss.search_people} src={require('../../assets/icons/people_search.png')} alt="" onClick={this.jump_singer.bind(this)} />
                </div>
                {/* 模糊搜索 */}
                <Pao flag={this.state.flag} result={result} value={value} history={this.props.history}></Pao>
                {/* 历史记录 */}
                {data.length ? history_data : ''}
                <h2 style={{ marginLeft: '20px', fontSize: '20px', margin: '20px auto', paddingLeft: '20px' }}>热搜榜</h2>
                {/* 热搜榜 */}
                <div className={SearchCss.search_hot}>
                    <ul>
                        {hots.map((item, index) => <li className={SearchCss.searchli} key={index} onClick={this.jump_search.bind(this, item.searchWord)}>
                            <p>
                                <span className={SearchCss.left}>{index + 1}</span>
                                <b>{item.searchWord}{index <= 2 ? test : ''}</b>
                                <span className={SearchCss.right}>{item.score}</span>
                            </p>
                            <span className={SearchCss.bottom}>{item.content}</span>
                        </li>
                        )}
                    </ul>
                </div>
            </Fragment>
        )
    }
}
export default Hot