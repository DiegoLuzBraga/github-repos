import React from "react";
import s from "./style.scss";
import { rootStore } from "../../stores/RootStore";
import { Switch, Route, Redirect } from "react-router-dom";
import { Router } from "react-router";
import { Provider } from "mobx-react";
import { GitRepos } from "../GitRepos";
import { UserRepo } from '../UserRepo';

export const App = () => {
  return (
    <Provider {...rootStore}>
      <Router history={rootStore.history}>
        <div className={s.pageLayout}>
          <Switch>
            <Route path="/" component={GitRepos} />
            <Route path="/:userName" component={UserRepo} />
            {/* <Route path="/:userName/repos" component={GitRepos} /> */}
            {/* <Route path="/:userName/starred" component={GitRepos} /> */}
            {/* <Route
							path="/:userName/starred/:owner/:repo"
							component={GitRepos}
						/> */}
            <Route path="*" render={() => <Redirect to="/" />} />
          </Switch>
        </div>
      </Router>
    </Provider>
  );
};
