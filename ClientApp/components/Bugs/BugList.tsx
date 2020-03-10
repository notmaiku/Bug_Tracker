import * as React from 'react';

export class BugList extends React.Component<{}, {}> {
    public render() {
        const bugs = [];
        let length = 5;
        for (let i = 1; i <= length; i++) { bugs.push(`doggy${i}`) }
        const final = [];
        for (let bug of bugs) {
            final.push(<li key={bug}><a href="#">{bug}</a></li>);
        }
        return <aside id="bug-list">
            <ul>
                {final}
            </ul>
        </aside>
    }
}
