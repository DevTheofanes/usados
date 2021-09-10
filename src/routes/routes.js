import { Route, Switch } from 'react-router-dom';

import { Dashboard } from '../pages/Dashboard';
import { SignIn } from '../pages/SignIn';
import { SignUp } from '../pages/SignUp';
import { ClassifiedsPage } from '../pages/Classifieds';
import { Classified } from '../pages/Classified';

export function Routes() {
  return (
    <Switch>
        <Route path="/" exact component={Dashboard} />
        <Route path="/login" component={SignIn} />
        <Route path="/cadastro" component={SignUp} />
        <Route path="/classificados" component={ClassifiedsPage} />
        <Route path="/classificado" component={Classified} />
    </Switch>
  );
}
