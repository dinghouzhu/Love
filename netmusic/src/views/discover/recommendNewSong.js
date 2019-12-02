import React from "react"
import { Tabs, Badge, Grid } from 'antd-mobile';
import "../../assets/css/forceChange.css"
import { getNewAlbum, getNewSongs } from "../../api/discover";
const tabs = [
    { title: <Badge style={{ width: "30px !important" }}>新碟</Badge> },
    { title: <Badge style={{ width: "30px" }}>新歌</Badge> },
];

class NewSong extends React.Component {
    constructor() {
        super()
        this.state = {
            newAlbum: [],
            newSongs: []
        }
    }
    componentDidMount() {
        // 新碟上架
        getNewAlbum()
            .then(res => {
                // console.log(res)
                this.setState({
                    newAlbum: res.albums
                })
            })
        // 新歌速递
        getNewSongs()
            .then(res => {
                this.setState({
                    newSongs: res.data.filter((item, index) => index <= 2)
                })
            })
    }
    render() {
        return (
            <div id="newSong">
                <Tabs tabs={tabs}
                    tabBarUnderlineStyle={{ border: "none" }}
                >
                    <Grid data={this.state.newAlbum}
                        columnNum={3}
                        hasLine={false}
                        square={false}
                        renderItem={dataItem => (
                            <div style={{ padding: '0 5px' }}>
                                <img src={dataItem.picUrl} style={{ width: '80px', height: '80px', borderRadius: '5px' }} alt="" />
                                <div style={{ color: '#000', fontSize: '12px', marginTop: '12px', textAlign: 'center' }}>
                                    <span>{dataItem.name}</span>
                                </div>
                            </div>
                        )}
                    />
                    <Grid data={this.state.newSongs}
                        columnNum={3}
                        hasLine={false}
                        square={false}
                        renderItem={dataItem => (
                            <div style={{ padding: '0 5px', position: "relative" }}>
                                <img src={dataItem.album.picUrl} style={{ width: '80px', height: '80px', borderRadius: '5px' }} alt="" />
                                <div style={{ color: '#000', fontSize: '12px', marginTop: '12px', textAlign: 'center' }}>
                                    <span>{dataItem.name}</span>
                                </div>
                            </div>
                        )}
                    />
                </Tabs>
            </div>
        )
    }
}
export default NewSong