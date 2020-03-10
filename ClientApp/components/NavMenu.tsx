import * as React from 'react';
import { Link, NavLink } from 'react-router-dom';

export class NavMenu extends React.Component<{}, {}> {
    public render() {
        return <nav>
            <ul>
                <li><a href="/">Bug Tracker</a></li>
                <li><a href="/bugs">Bugs</a></li>
                <li><a href="/profile">Profile</a></li>
                <li><a href="/fetchdata">Data</a></li>
            </ul>
        </nav>
    }
}
