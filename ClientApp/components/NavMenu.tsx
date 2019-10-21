import * as React from 'react';
import { Link, NavLink } from 'react-router-dom';
export class NavMenu extends React.Component<{}, {}> {
    public render() {
        return <nav>
            <ul>
                <li><a id="home-link" href="/"><i className={"fas fa-bug"}></i></a></li>
                <li><a href="/bugs">Bugs</a></li>
                <li><a href="/profile">Profile</a></li>
            </ul>
        </nav>
    }
}
