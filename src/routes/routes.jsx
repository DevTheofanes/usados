import React from 'react';
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
import { DashboardPosts } from '../pages/Private/Posts';
import { NewRating } from '../pages/NewRating';
import { AccountUpdate } from '../pages/AccountUpdate';
import { EditClassified } from '../pages/EditClassified';

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
      <Route path="/classificado/:id" exact component={Classified} />
      <Route path="/cadastro/classificado" component={NewClassified} />
      <Route path="/perfil/lojista/:id/avaliacoes" exact component={RatingsPage} />
      <Route path="/avaliacoes/novo" component={NewRating} />
      <Route path="/perfil/lojista/:id" exact component={ProfileShopPage} />

      <Route path="/dashboard/classificados" component={DashboardClassifieds} />
      <Route path="/dashboard/posts" component={DashboardPosts} />
      <Route path="/dashboard/account" component={AccountUpdate} />
      <Route path="/dashboard/classificado/:id" component={EditClassified} />
    </Switch>
  );
}
