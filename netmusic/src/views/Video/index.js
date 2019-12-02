import React, { Fragment } from 'react'
import { Route } from "react-router-dom"
import Video from './video';
import VideoDetail from './Comment';

class SearchBarer extends React.Component {
    render() {
        return (
            <Fragment>
                <Route path="/video" component={Video} />
                <Route path="/comment" component={VideoDetail} />
            </Fragment>
        );
    }
}

export default SearchBarer