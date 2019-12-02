import React from 'react'
import Qs from 'query-string'
import store from '../../store'
import { getSinger, getHotMusic, getAlbum, getMv, getMusic } from '../../actions/SearchAcion'
import SearchCss from '../../assets/css/search.module.css'
import { Tabs, Badge } from 'antd-mobile';

const tabs = [
    { title: <Badge>主页</Badge> },
    { title: <Badge>专辑</Badge> },
    { title: <Badge>视频</Badge> }
];
class SingerDetail extends React.Component {
    // 页面加载显示歌手描述，歌手热门50首歌曲
    componentDidMount() {
        let keywords = Qs.parse(this.props.location.search)
        console.log(keywords)
        store.dispatch(getHotMusic(keywords.keywords))   //热歌50
        store.dispatch(getSinger(keywords.keywords))     //描述
        store.dispatch(getAlbum(keywords.keywords))       //专辑
        store.dispatch(getMv(keywords.keywords))       //Mv
    }
    // 回退
    jumpBack() {
        this.props.history.go(-1)
    }
    // 点击音乐播放
    searchMusic(id) {
        this.props.history.push('/playbar?id=' + id)
        localStorage.setItem("id", id)
        localStorage.setItem("status", "single")
    }
    // 点击Mv播放
    jumpMv(id, name, times) {
        this.props.history.push(`/singerMv?keywords=${id}&name=${name}&times=${times}`)
    }
    render() {
        console.log(store.getState())
        let { singerDec, singerMusic, singerAlbum, singerMv, music } = store.getState().SearchSingerReducer
        let musicUrl = music.length ? music[0].url : ''
        try {
            return (
                <div>
                    <img className={SearchCss.headerBack} src={require('../../assets/icons/left_search.png')} alt="" onClick={this.jumpBack.bind(this)} />
                    <div className={SearchCss.headerDiv} style={{ background: `url(${singerMusic.artist.img1v1Url})`, backgroundSize: '375px 300px' }}>
                        <h1 className={SearchCss.singerName}>{singerMusic.artist.name}</h1>
                        <h3 className={SearchCss.jianjie}>专辑：{singerMusic.artist.albumSize}</h3>
                        <h3 className={SearchCss.jianjie}>视频：{singerMusic.artist.musicSize}</h3>
                        <h3 className={SearchCss.jianjie}>简介：{singerDec}</h3>
                    </div>
                    <Tabs tabs={tabs}>
                        {/* 主页 */}
                        <div>
                            <div className={SearchCss.songNav}>
                                <img className={SearchCss.songNavIcon} src={require('../../assets/icons/open.png')} alt="" />
                                <p className={SearchCss.songNavP}>
                                    <b className={SearchCss.songNavPlay}>播放热门50</b>
                                </p>
                            </div>
                            {/* <audio controls autoPlay={true} src={musicUrl}></audio> */}
                            <ul className={SearchCss.songListUl}>
                                {singerMusic.hotSongs.map((item, index) => {
                                    return (
                                        <li className={SearchCss.songListLI} key={item.id} onClick={this.searchMusic.bind(this, item.id)}>
                                            <p className={SearchCss.songListP}>
                                                <span className={SearchCss.songListLeft}>{index + 1}</span>
                                                <span className={SearchCss.songListSpan}>{item.name}</span>
                                            </p>
                                            <span className={SearchCss.songListAr}>{singerMusic.artist.name}-{item.al.name}</span>
                                            <img className={SearchCss.songIconVideoPlay} src={require('../../assets/icons/videoplay1.png')} alt="" />
                                            <img className={SearchCss.songIconMeausonglist} src={require('../../assets/icons/meauSonglist.png')} alt="" />
                                        </li>
                                    )
                                })}
                            </ul>
                        </div>
                        {/* 专辑 */}
                        <div>
                            <p className={SearchCss.albumHeader}>
                                <span className={SearchCss.albumTime}>按发行时间排序</span>
                                <span className={SearchCss.albumOrder}>排序</span>
                            </p>
                            <ul>
                                {singerAlbum.map(item =>
                                    <li key={item.id} className={SearchCss.albumLi}>
                                        <img className={SearchCss.albumImg} src={item.blurPicUrl} alt="" />
                                        <span className={SearchCss.albumName} >{item.name} </span>
                                    </li>
                                )}
                            </ul>
                        </div>
                        {/* Mv */}
                        <div>
                            <h1 className={SearchCss.mv}>Mv</h1>
                            <ul>
                                {singerMv.map(item =>
                                    <li key={item.id} className={SearchCss.mvLi} onClick={this.jumpMv.bind(this, item.id, item.name, item.playCount)}>
                                        <span className={SearchCss.mvCount}>{item.playCount >= 10000 ? parseInt(item.playCount / 10000) + '万' : item.playCount}</span>
                                        <img className={SearchCss.mvImg} src={item.imgurl} alt="" />
                                        <div className={SearchCss.Pp}>
                                            <span className={SearchCss.mvName}>{item.name}</span>
                                            <div className={SearchCss.mvTime}>{item.publishTime}</div>
                                        </div>
                                    </li>
                                )}
                            </ul>
                        </div>
                    </Tabs>

                </div>
            )
        } catch (e) {
            return (
                <div>
                    <div className={SearchCss.songNav}>
                        <img className={SearchCss.songNavIcon} src={require('../../assets/icons/open.png')} alt="" />
                        <p className={SearchCss.songNavP}>
                            <b className={SearchCss.songNavPlay}>播放热门50</b>
                        </p>
                    </div>
                    <div>
                        <h2>基本信息</h2>
                        <p>昵称：</p>
                        <p></p>
                        <p></p>
                        <p>简介：{singerDec}</p>
                    </div>
                </div>
            )
        }
    }
}
export default SingerDetail