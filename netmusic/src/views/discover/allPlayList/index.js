import React from "react"
// import PlayListBanner from "./banner"
import { getPlaylists, getRecommendLists, getHighQualitylists } from "../../../actions/discover"
import store from "../../../store"
import { Tabs, Badge, NavBar,Icon} from 'antd-mobile';
import PlayListDemo from "./playlist";


class AllPlayList extends React.Component {
    constructor() {
        super()
        this.state = {
            tabs: [
                { title: <Badge>推荐</Badge> },
                { title: <Badge>官方</Badge> },
                { title: <Badge>精选</Badge> },
                { title: <Badge>华语</Badge> },
                { title: <Badge>摇滚</Badge> },
                { title: <Badge>电子</Badge> },
                { title: <Badge>影视原声</Badge> },
                { title: <Badge>民谣</Badge> },
            ],
            title: "推荐"
        }
    }
    componentDidMount() {
        store.dispatch(getRecommendLists())
    }
    changeTags(e) {
        this.setState({
            title: e.title.props.children
        })
        if (e.title.props.children === "精选") {
            store.dispatch(getHighQualitylists())
        } else if (e.title.props.children === "推荐") {
            store.dispatch(getRecommendLists())
        } else {
            store.dispatch(getPlaylists(e.title.props.children))
        }
    }
    render() {
        return (
            <div>
                 <NavBar
                 mode="light"
                 icon={<Icon type="left" style={{color:"black"}} />}
                onLeftClick={() => this.props.history.goBack()}
                >歌单广场</NavBar>
                <Tabs tabs={this.state.tabs}
                    initialPage={0}
                    tabBarActiveTextColor="red"
                    tabBarUnderlineStyle={{ borderColor: "red", width: '50px', marginLeft: '10px' }}
                    onChange={this.changeTags.bind(this)}
                >
                    <PlayListDemo playlist={store.getState().playlist.playlist} title={this.state.title} props={this.props} />
                </Tabs>
            </div>
        )
    }
}
export default AllPlayList