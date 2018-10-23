import React, { Component, Fragment } from 'react';
import { withRouter, Switch, Route } from 'react-router-dom';
import { Nav, List } from '../components/dashboard';
import { DASHBOARD_NAV } from '../values';
import '../styles/containers/dashboard.scss';

class _Dashboard extends Component {
  render() {
    const { children } = this.props;
    const active = window.location.pathname.replace(process.env.PUBLIC_URL, "");
    return <Fragment>
      <Nav active={active}/>
      <Switch>
        {
          DASHBOARD_NAV.map(({ path, route }, key) =>
            <Route exact path={path} key={key} component={route}/>
          )
        }
      </Switch>
    </Fragment>
  }
}

export const Dashboard = withRouter(_Dashboard);