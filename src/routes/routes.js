import { Route, Switch } from 'react-router-dom';

import { Dashboard } from '../pages/Dashboard';
import { SignIn } from '../pages/SignIn';
import { SignUp } from '../pages/SignUp';
import { ClassifiedsPage } from '../pages/Classifieds';

export function Routes() {
  return (
    <Switch>
        <Route path="/" exact component={Dashboard} />
        <Route path="/login" component={SignIn} />
        <Route path="/cadastro" component={SignUp} />
        <Route path="/classificados" component={ClassifiedsPage} />
    </Switch>
  );
}
