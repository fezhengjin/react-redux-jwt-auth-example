import React from 'react';

export default class ProtectedSubView extends React.Component {

    componentDidMount () {
	console.log('sub view page did mount');	
    }
    componentWillUnmount() {
	console.log('sub view page will unmount');
    }

    render () {
        return (
	    <div>Protected SubView</div>
        );
    }
}

