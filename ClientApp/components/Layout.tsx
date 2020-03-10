import * as React from 'react';
import { NavMenu } from './NavMenu';

export interface LayoutProps {
    children?: React.ReactNode;
}

export class Layout extends React.Component<LayoutProps, any> {
    public render() {
        return <span id="react-root">
            <NavMenu/>
            {this.props.children}
        </span>;
    }
}
