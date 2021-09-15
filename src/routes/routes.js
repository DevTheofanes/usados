import { Route, Switch } from 'react-router-dom';

import { Dashboard } from '../pages/Dashboard';
import { SignIn } from '../pages/SignIn';
import { SignUp } from '../pages/SignUp';
import { ClassifiedsPage } from '../pages/Classifieds';
import { Classified } from '../pages/Classified';
import { RatingsPage } from '../pages/Ratings';
import { ProfileShopPage } from '../pages/ProfileShop';
import { AboutPage } from '../pages/About';
import { SacPage } from '../pages/Sac';
import { SignUpShop } from '../pages/SignUpShop';
import { NewClassified } from '../pages/NewClassified';
import { DashboardClassifieds } from '../pages/Private/Classifieds';

export function Routes() {
  return (
    <Switch>
        <Route path="/" exact component={Dashboard} />
        <Route path="/login" component={SignIn} />
        <Route path="/sobre" component={AboutPage} />
        <Route path="/sac" component={SacPage} />
        <Route path="/cadastro" exact component={SignUp} />
        <Route path="/cadastro/lojista" component={SignUpShop} />
        <Route path="/classificados" component={ClassifiedsPage} />
        <Route path="/classificado" exact component={Classified} />
        <Route path="/classificado/novo" component={NewClassified} />
        <Route path="/avaliacoes" component={RatingsPage} />
        <Route path="/perfil/lojista" component={ProfileShopPage} />

        <Route path="/dashboard/classificados" component={DashboardClassifieds} />
    </Switch>
  );
}
