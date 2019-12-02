import React, { Fragment } from "react"
import { Route } from "react-router-dom"
import Discover from "../../views/discover"
import SongList from "../../views/discover/songList"
import DayRecommend from "../../views/discover/dayrecommend"
import AllPlayList from "../../views/discover/allPlayList"
import Comment from "../../views/discover/comment"
class DiscoverRoute extends React.Component {
    render() {
        return (
            <Fragment>
                <Route path={"/" | "/discover"} exact component={Discover} />
                <Route path="/songlist" component={SongList} />
                <Route path="/discover/dayrecommend" component={DayRecommend} />
                <Route path="/discover/allplaylist" component={AllPlayList} />
                <Route path="/discover/comment" component={Comment} />
            </Fragment>
        )
    }
}
export default DiscoverRoute