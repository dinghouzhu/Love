import React, { Fragment } from "react"
import { Grid } from 'antd-mobile';
import { getRecommendList } from "../../api/discover"
import discoverCss from "../../assets/css/discover.module.css"

class RecommendSongList extends React.Component {
    constructor() {
        super()
        this.state = {
            RecommendList: []
        }
    }
    componentDidMount() {
        getRecommendList()
            .then(res => {
                this.setState({
                    RecommendList: res.result
                })
            })
    }
    songListDetails(id) {
        this.props.props.history.push('/songlist?id=' + id)
    }
    toAllplaylist() {
        this.props.props.history.push('/discover/allplaylist')
    }
    render() {
        return (
            <Fragment>
                <div className={discoverCss.recommendDiv}>
                    <h1 className={discoverCss.recommendH1}>推荐歌单</h1>
                    <div onClick={this.toAllplaylist.bind(this)} className={discoverCss.songSqual}>歌单广场</div>
                </div>
                <Grid data={this.state.RecommendList}
                    columnNum={3}
                    hasLine={false}
                    square={false}
                    style={{ padding: "0px" }}
                    renderItem={dataItem => (
                        <div style={{ position: "relative" }} onClick={this.songListDetails.bind(this, dataItem.id)}>
                            <img src={dataItem.picUrl} style={{ width: '100px', height: '100px', borderRadius: '5px' }} alt="" />
                            <div className={discoverCss.playCount}>
                                <img className={discoverCss.bofang} src={require('../../assets/icons/bofang.png')} alt="" />
                                {dataItem.playCount < 100000000 ? parseInt(dataItem.playCount / 10000) + "万" : parseInt(dataItem.playCount / 100000000) + "亿"}
                            </div>
                            <div style={{ color: '#000', fontSize: '12px' }}>
                                <span className={discoverCss.gridItem}>{dataItem.name}</span>
                            </div>
                        </div>
                    )}
                />
            </Fragment>
        )
    }
}

export default RecommendSongList