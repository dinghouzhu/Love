import React, { Fragment } from 'react'
import { Route } from "react-router-dom"
import Hot from './hotSearch';
import Danqu from './danqu';
import SingerList from './singerList';
import SingerDetail from './singerDetail';
import SingerMv from './Mv';

class SearchBarer extends React.Component {
    render() {
        return (
            <Fragment>
                <Route path="/search" component={Hot} />
                <Route path="/searchres" component={Danqu} />
                <Route path="/singer" component={SingerList} />
                <Route path="/singerDec" component={SingerDetail} />
                <Route path="/singerMv" component={SingerMv} />
            </Fragment>
        );
    }
}

export default SearchBarer