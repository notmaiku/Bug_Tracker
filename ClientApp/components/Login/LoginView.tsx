import * as React from 'react';
import { RouteComponentProps } from 'react-router';

export class LoginView extends React.Component<RouteComponentProps<{}>, {}> {
    public render() {
        return <main id="login-view">
            <form action="submit">
                    <h1>Login</h1>
                    <label>Username
                        <input type="text" name="" id="" />
                    </label>
                    <label>Password
                        <input type="text" name="" id="" />
                    </label>
            </form>
        </main>
    }
}
