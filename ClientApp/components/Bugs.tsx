import * as React from 'react';
import { RouteComponentProps } from 'react-router';

interface MsgState {
    msg: string;
}

export class Bugs extends React.Component<RouteComponentProps<{}>, MsgState> {
    constructor() {
        super();
        this.state = { msg: 'Hi stinky' };
    }

    public render() {
        return <div>
            <h1>stinky</h1>

            <p>This is a simple example of a React component.</p>

            <p>I came here to say: <strong>{ this.state.msg }</strong></p>

        </div>;
    }
}
