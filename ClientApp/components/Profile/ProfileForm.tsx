import * as React from 'react';
import { RouteComponentProps } from 'react-router';
import 'isomorphic-fetch';

interface ProfileData {
    accounts: Account[];
}

export interface Account {
    Username: string;
}
export class ProfileForm extends React.Component<ProfileData, {}> {
    constructor(props: any) {
        super(props);
        this.state = { accounts: [] };
        this.renderForm = this.renderForm.bind(this)
        this.renderData = this.renderData.bind(this)


    }

    renderData() {
        return this.props.accounts.map(account => <li>{account.Username}</li>)
    }

    public render() {
        return <main id="profile-view">
            <h1>Profile data</h1>
            {this.renderForm()}
            {this.renderData()}
        </main>;
    }

    renderForm() {
        return <form className="profile-form" action="">
            <label htmlFor="">
                Username
                <input type="text" />
            </label>
            <label htmlFor="">
                Password
                <input type="text" />
            </label>
            <label htmlFor="">
                Email Address
                <input type="text" />
            </label>
        </form>
    }
}

