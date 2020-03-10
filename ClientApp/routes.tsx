import * as React from 'react';
import { Route } from 'react-router-dom';
import { Layout } from './components/Layout';
import { LoginView } from './components/Login/LoginView';
import { BugsView } from './components/Bugs/BugsView';
import { Profile } from './components/Profile';
import { ProfileView } from './components/Profile/ProfileView';

export const routes = <Layout>
    <Route exact path='/' component={ LoginView } />
    <Route path='/bugs' component={  BugsView  } />
    <Route path='/profile' component={ ProfileView } />
</Layout>;
