import * as React from 'react';
import { RouteComponentProps } from 'react-router';
import { ProfileForm } from './ProfileForm';
import 'isomorphic-fetch';

export interface ProfileData {
    accounts: Account[];
}

export interface Account {
    Username: string;
}
export class ProfileView extends React.Component<RouteComponentProps<{accounts: Account[]}>, ProfileData> {
    constructor() {
        super();
        this.state = { accounts: [] }

        fetch('api/SampleData/Accounts')
            .then(response => response.json() as Promise<Account[]>)
            .then(data => {
                this.setState({ accounts: data });
            });

    }

    public render() {
        return <main id="profile-view">
            <ProfileForm accounts={this.state.accounts}/>
        </main>;
    }

    
}

