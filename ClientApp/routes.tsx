import * as React from 'react';
import { Route } from 'react-router-dom';
import { Layout } from './components/Layout';
import { Home } from './components/Home';
import { Bugs } from './components/Bugs';
import { Profile } from './components/Profile';

export const routes = <Layout>
    <Route exact path='/' component={ Home } />
    <Route path='/bugs' component={ Bugs } />
    <Route path='/profile' component={ Profile } />
</Layout>;
