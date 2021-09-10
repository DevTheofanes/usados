import { Route, Switch } from 'react-router-dom';

import { Dashboard } from '../pages/Dashboard';
import { SignIn } from '../pages/SignIn';
import { SignUp } from '../pages/SignUp';

export function Routes() {
  return (
    <Switch>
        <Route path="/" exact component={Dashboard} />
        <Route path="/login" component={SignIn} />
        <Route path="/cadastro" component={SignUp} />
    </Switch>
  );
}
