import React from 'react'
import { Button } from 'antd-mobile';
import { Singer_hot, Singer_love } from '../../api/SearchApi'
import SearchCss from '../../assets/css/search.module.css'

class SingerList extends React.Component {
    constructor() {
        super()
        this.state = {
            lists: [],
            flag: false
        }
    }
    // 页面加载显示热门歌手
    componentDidMount() {
        Singer_hot()
            .then(res => {
                console.log(res)
                this.setState({
                    lists: res.artists
                })
            })
    }
    // 回退
    jump_back() {
        this.props.history.go(-1)
    }
    // 点击歌手跳转至歌手详情
    singerDetail(id) {
        this.props.history.push('/singerDec?keywords=' + id)
    }
    // 关注歌手
    guanzhu(id, e) {
        e.stopPropagation()
        // Singer_love(id)
        //     .then(res => {
        //         console.log(res)
        //         this.setState({
        //             flag: !this.state
        //         })
        //     })
    }
    render() {
        let { lists, flag } = this.state
        return (
            <div className={SearchCss.singer}>
                <div>
                    <h2>
                        <img className={SearchCss.left} src={require("../../assets/icons/left_search.png")} alt="" onClick={this.jump_back.bind(this)} />
                        <span className={SearchCss.span}>歌手分类</span>
                    </h2>
                </div>
                <div className={SearchCss.singer_lists}>
                    <p>热门歌手</p>
                    <ul>
                        {lists.map(item =>
                            <li key={item.img1v1Id} onClick={this.singerDetail.bind(this, item.id)}>
                                <img className={SearchCss.singer_avaturl} src={item.img1v1Url} alt="" />
                                <span className={SearchCss.singer_name}>{item.name}</span>
                                <Button type="ghost" size="small" className={SearchCss.singer_guan} onClick={this.guanzhu.bind(this, item.id)}>{flag ? '已关注' : '+关注'}</Button>
                            </li>
                        )}
                    </ul>
                </div>
            </div>
        )
    }
}
export default SingerList