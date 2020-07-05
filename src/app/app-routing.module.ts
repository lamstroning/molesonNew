import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import {NotFoundComponent} from './views/pages/notFound/notfound.component';


const routes: Routes = [
  {
    path: 'analytics',
    loadChildren: () => import('./views/pages/analytics/analytics.module').then(mod => mod.AnalyticsModule),
  },
  {
    path: 'dashboard',
    loadChildren: () => import('./views/pages/dashboard/dashboard.module').then(mod => mod.DashboardModule),
  },
  {
    path: 'my-wallet',
    loadChildren: () => import('./views/pages/my-wallet/my-wallet.module').then(mod => mod.MyWalletModule),
  },
  {
    path: 'franchises',
    loadChildren: () => import('./views/pages/franchises/franchises.module').then(mod => mod.FranchisesModule),
  },
  {
    path: 'news',
    loadChildren: () => import('./views/pages/news/news.module').then(mod => mod.NewsModule),
  },
  {
    path: 'partners',
    loadChildren: () => import('./views/pages/partners/partners.module').then(mod => mod.PartnersModule),
  },
  {
    path: 'docs',
    loadChildren: () => import('./views/pages/docs/docs.module').then(mod => mod.DocsModule),
  },
  {
    path: 'help',
    loadChildren: () => import('./views/pages/help/help.module').then(mod => mod.HelpModule),
  },

  { path: '**', component: NotFoundComponent }
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
