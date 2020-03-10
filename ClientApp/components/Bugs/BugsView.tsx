import * as React from 'react';
import { RouteComponentProps } from 'react-router';
import { BugProjects } from './BugProjects';
import { BugList } from './BugList';
import { BugDetail } from './BugDetail';
import 'isomorphic-fetch';

export interface BugData {
    girls: EGirl[];
}

export interface EGirl {
name: string;
hotnessRating: number;
}

export class BugsView extends React.Component<RouteComponentProps<{girls: EGirl[]}>, BugData> {
    constructor() {
        super();
        this.state = { girls: [] }

        fetch('api/SampleData/eGirlOfTheWeek')
            .then(response => response.json() as Promise<EGirl[]>)
            .then(data => {
                this.setState({ girls: data });
            });
    }

    public render() {
        return <main id="bug-view">
            <BugProjects/>
            <BugList/>
            <BugDetail girls={this.state.girls}/>
        </main>;
    }
}
