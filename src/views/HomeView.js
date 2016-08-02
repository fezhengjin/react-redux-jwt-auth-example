import React from 'react';
import {Link} from 'react-router';

export default class HomeView extends React.Component {

    render () {
        return (
            <div>
                <h1>React Redux Auth Example</h1>
                <p>Attempt to access some <Link to='/protected'>protected content.</Link></p>
                <p>Attempt to access the <Link to='/protected/top/sub'>protected sub view.</Link></p>
            </div>
        );
    }

}
