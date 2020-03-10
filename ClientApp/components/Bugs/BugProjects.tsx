import * as React from 'react';

export class BugProjects extends React.Component<{}, {}> {
    public render() {
        const projects = [];
        let length = 3;
        for (let i = 1; i <= length; i++) { projects.push(`Bug${i}`) }
        const final = [];
        for (let project of projects) {
            final.push(<li key={project}><a href="#">{project}</a></li>);
        }
            return <aside id="bug-projects">
                <ul>
                    {final}
                </ul>
            </aside>
    }
}
