import React, { Component } from 'react';

import Schedule from 'component/schedule';

export default class YourSchedule extends Component {
    render() {
        return (
            <div>
                <h1>Your Plan</h1>
                <Schedule personal={true} />
            </div>
        );
    }
}
