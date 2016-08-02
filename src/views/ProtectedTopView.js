import React from 'react';

export default class ProtectedTopView extends React.Component {

    render () {
        return (
	    <div>
		<h3>Protected TopView</h3>
		{this.props.children}
	    </div>
        );
    }
}

