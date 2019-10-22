import * as React from 'react';
import { Link, NavLink } from 'react-router-dom';

export class BugList extends React.Component<{}, {}> {
    public render() {
        const bugs = [];
        let length = 5;
        for( let i = 1; i <=length; i++){ bugs.push(`Bug${i}`)}
        const final = [];
        for (let bug of bugs){
            final.push(<li key={bug}>{bug}</li>);
        }
        return <aside id="bug-list">
            <ul>
                {final}
            </ul>
        </aside>    }
}
