import React, { Fragment } from 'react'
import { Button, Tabs, Badge } from 'antd-mobile';
import { getSearchRes, getMusic } from "../../actions/SearchAcion"
import store from "../../store"
import SearchCss from '../../assets/css/search.module.css'
import Qs from 'query-string'

const tabs = [
    { title: <Badge>单曲</Badge> },
    { title: <Badge>视频</Badge> },
    { title: <Badge>歌手</Badge> },
    { title: <Badge>专辑</Badge> },
    { title: <Badge>歌单</Badge> },
    // { title: <Badge>主播电台</Badge> },
    { title: <Badge>用户</Badge> }
];
class Danqu extends React.Component {
    constructor() {
        super()
        this.state = {
            value: '',
            songs: [],
        }
    }
    // 回退
    jump_back() {
        this.props.history.push('/search')
    }
    // 接收传的值搜索
    componentDidMount() {
        let keywords = Qs.parse(this.props.location.search)
        // console.log(keywords)
        this.setState({
            value: keywords.keywords
        })
        store.dispatch(getSearchRes(keywords.keywords))
    }
    // 清空输入框
    clear() {
        this.setState({
            value: ''
        })
    }
    // 改变输入框值
    change(e) {
        this.setState({
            value: e.target.value
        })
    }
    //根据输入框值进行搜索 
    searchOne(e) {
        if (e.keyCode === 13) {
            store.dispatch(getSearchRes(this.state.value))
        }
    }
    // 点击歌曲播放
    getSingerMusic(id) {
        store.dispatch(getMusic(id))
    }
    // 点击歌手跳到歌手详情
    jumpDetail(id) {
        this.props.history.push('/singerDec?keywords=' + id)
    }
    // 点击歌单跳到歌单详情
    jumpgedan(id) {
        this.props.history.push('/songlist?id=' + id)
    }
    // 播放
    playsong(id) {
        this.props.history.push('/playbar?id=' + id)
        localStorage.setItem("id", id)
        localStorage.setItem("status", "single")
    }
    render() {
        console.log(store.getState())
        let { serachRes, searchVideo, searchSinger, searchAlbum, searchUser, searchLists, searchLRadios } = store.getState().SearchReducer
        let { music } = store.getState().SearchSingerReducer
        let { value, songs, sinerCome } = this.state
        let musicUrl = music.length ? music[0].url : ''
        let searchResult = songs.length ? songs : serachRes
        // console.log(searchLRadios.length, '------------') 

        let danqu = (<Fragment>
            <div className={SearchCss.single}>
                <img className={SearchCss.more} src={require('../../assets/icons/moreCheck.png')} alt="" />
                <span className={SearchCss.check}>多选</span>
                <Button type="ghost" inline size="small" className={SearchCss.btn}>
                    <img className={SearchCss.open} src={require('../../assets/icons/open.png')} alt="" />
                    <span className={SearchCss.all}>播放全部</span>
                </Button>
            </div>
            {/* 搜索列表 */}
            <ul className={SearchCss.lists}>
                {searchResult.map(item =>
                    <li className={SearchCss.lii} key={item.id} onClick={this.playsong.bind(this, item.id)}>
                        <p className={SearchCss.res_name} onClick={this.getSingerMusic.bind(this, item.id)}>{item.name}</p>
                        <p className={SearchCss.res_album}>
                            <span>{item.artists.map((artist, i) => <i key={i}>{artist.name}&nbsp;</i>)}</span>
                            <span>{item.album.name}</span></p>
                    </li>
                )}
            </ul>
        </Fragment>)

        let shipin = (<Fragment>
            <ul>
                {searchVideo.map(item =>
                    <li key={item.vid} className={SearchCss.mvLi}>
                        <span className={SearchCss.mvCount}>{item.playTime >= 200000 ? parseInt(item.playTime / 10000) + '万' : item.playTime}</span>
                        <img className={SearchCss.mvImg} src={item.coverUrl} alt="" />
                        <div className={SearchCss.Pp}>
                            <span className={SearchCss.mvName}>{item.title}</span>
                            <div className={SearchCss.mvTime}>by-{item.creator[0].userName}</div>
                        </div>
                    </li>
                )}
            </ul>
        </Fragment>)

        let geshou = (<Fragment>
            <ul>
                {searchSinger.map(item =>
                    <li key={item.id} className={SearchCss.singerLi} onClick={this.jumpDetail.bind(this, item.id)}>
                        <img className={SearchCss.singerImg} src={item.img1v1Url} alt="" />
                        <span className={SearchCss.singerSpan}>{item.name}</span>
                    </li>)}
            </ul>
        </Fragment>)

        let zhuanji = (<Fragment>
            <ul>
                {searchAlbum.map(item =>
                    <li key={item.id} className={SearchCss.albumLi}>
                        <img className={SearchCss.albumImg} src={item.blurPicUrl} alt="" />
                        <div className={SearchCss.albumP}>
                            <span className={SearchCss.albumP1}>{item.name}</span>
                            <div className={SearchCss.albumP2}>{item.artist.name} </div>
                        </div>
                    </li>)}
            </ul>
        </Fragment>)

        let gedan = (<Fragment>
            <ul>
                {searchLists.map(item =>
                    <li key={item.id} className={SearchCss.gedanLi} onClick={this.jumpgedan.bind(this, item.id)}>
                        <img className={SearchCss.gedanImg} src={item.coverImgUrl} alt="" />
                        <div className={SearchCss.gedanP}>
                            <div className={SearchCss.gedanP1}>{item.name}</div>
                            <div className={SearchCss.gedanP2}>
                                <span>{item.trackCount}首</span>
                                &nbsp;&nbsp;
                                <span>by</span>
                                &nbsp;&nbsp;
                                <span>{item.creator.nickname},</span>
                                &nbsp;
                                <span>播放{item.playCount >= 100000 ? parseInt(item.playCount / 10000) + '万' : item.playCount}次</span>
                            </div>
                        </div>
                    </li>)}
            </ul>
        </Fragment>)

        // let diantai = (<Fragment>
        //     <ul>
        //         {searchLRadios.map(item =>
        //             <li key={item.id} className={SearchCss.diantaiLi}>
        //                 <img className={SearchCss.diantaiImg} src={item.picUrl} alt="" />
        //                 <div className={SearchCss.diantaiP}>
        //                     <div className={SearchCss.diantaiP1}>{item.name}</div>
        //                     <div className={SearchCss.diantaiP2}>
        //                         <span>{item.dj.nickname}</span>
        //                     </div>
        //                 </div>
        //             </li>)}
        //     </ul>
        // </Fragment>)

        let yonghu = (<Fragment>
            <ul>
                {searchUser.map(item =>
                    <li key={item.userId} className={SearchCss.userLi}>
                        <img className={SearchCss.user_avaturl} src={item.avatarUrl} alt="" />
                        <span className={SearchCss.user_name}>{item.nickname}</span>
                        <Button type="ghost" size="small" className={SearchCss.user_guan} >+关注</Button>
                    </li>
                )}
            </ul>
        </Fragment>)
        return (
            <Fragment>
                <div>
                    <div className={SearchCss.search_bar}>
                        <img className={SearchCss.search_back} src={require('../../assets/icons/left_search.png')} alt="" onClick={this.jump_back.bind(this)} />
                        <input className={SearchCss.search_ipt} type="text" value={value} placeholder='请输入搜索内容' onChange={this.change.bind(this)} onKeyDown={this.searchOne.bind(this)} />
                        <img className={SearchCss.search_x} src={require('../../assets/icons/x.png')} alt="" onClick={this.clear.bind(this)} />
                    </div>
                    <Tabs tabs={tabs}>
                        {/* 单曲 */}
                        <div>
                            {serachRes.length ? danqu : `未找到与${value}相关的数据`}
                        </div>
                        <div>
                            {/* 视频 */}
                            {searchVideo.length ? shipin : `未找到与${value}相关的数据`}
                        </div>
                        <div>
                            {/* 歌手 */}
                            {searchSinger.length ? geshou : `未找到与${value}相关的数据`}
                        </div>
                        <div>
                            {/* 专辑 */}
                            {searchAlbum.length ? zhuanji : `未找到与${value}相关的数据`}
                        </div>
                        <div>
                            {/* 歌单 */}
                            {searchLists.length ? gedan : `未找到与${value}相关的数据`}
                        </div>
                        {/* <div>
                            电台
                            {searchLRadios.length ? diantai : `未找到与${value}相关的数据`}
                        </div> */}
                        <div>
                            {/* 用户 */}
                            {searchUser.length ? yonghu : `未找到与${value}相关的数据`}
                        </div>
                    </Tabs>
                    {/* <audio controls autoPlay src={musicUrl}></audio> */}
                </div>
            </Fragment>
        )
    }
}
export default Danqu