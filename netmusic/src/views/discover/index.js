import React, { Fragment } from "react"
import Banner from "./banner"
import DiscoverNav from "./discoverNav"
import RecommendSongList from "./recommendSongList"
import NewSong from "./recommendNewSong"
import DiscoverListView from "./listView"
class DiscoverView extends React.Component {
    render() {
        console.log(this.props)
        return (
            <Fragment>
                <Banner />
                <DiscoverNav props={this.props} />
                <RecommendSongList props={this.props} />
                <NewSong />
                <DiscoverListView />
            </Fragment>
        )
    }
}
export default DiscoverView