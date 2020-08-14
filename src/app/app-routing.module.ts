import {NgModule} from '@angular/core';
import {Routes, RouterModule} from '@angular/router';
import {NotFoundComponent} from './views/pages/notFound/notfound.component';
import {ViewsComponent} from './views/views.component';
import {AuthGuard} from './core/auth/_guard/auth.guard';

const routes: Routes = [
  {
    path: '',
    component: ViewsComponent,
    canActivate: [AuthGuard],
    children: [
      {
        path: '',
        redirectTo: '/dashboard',
        pathMatch: 'full'
      },
      {
        path: 'balance',
        loadChildren: () => import('./views/pages/balance/balance-page.module').then(mod => mod.BalancePageModule),
      },
      {
        path: 'docs',
        loadChildren: () => import('./views/pages/docs/docs.module').then(mod => mod.DocsModule),
      },
      {
        path: 'dashboard',
        loadChildren: () => import('./views/pages/dashboard/dashboard.module').then(mod => mod.DashboardModule),
      },
      {
        path: 'analytics',
        loadChildren: () => import('./views/pages/analytics/analytics.module').then(mod => mod.AnalyticsModule),
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
        path: 'franchises-detail/:id',
        loadChildren: () => import('./views/pages/franchises/franchises-detail/franchises-detail.module')
          .then(mod => mod.FranchisesDetailModule)
      },
      {
        path: 'franchises-detail/:id/payment',
        loadChildren: () => import('./views/pages/franchises/franchises-detail/franchises-payment/franchises-payment.module')
          .then(mod => mod.FranchisesPaymentModule)
      },
      {
        path: 'operations',
        loadChildren: () => import('./views/pages/operations/operations.module').then(mod => mod.OperationsModule),
      },
      {
        path: 'news',
        loadChildren: () => import('./views/pages/news/news.module').then(mod => mod.NewsModule),
      },
      {
        path: 'news-detail/:id',
        loadChildren: () => import('./views/pages/news/news-detail/news-detail.module').then(mod => mod.NewsDetailModule),
      },
      {
        path: 'partners',
        loadChildren: () => import('./views/pages/partners/partners.module').then(mod => mod.PartnersModule),
      },
      {
        path: 'cabinet',
        loadChildren: () => import('./views/pages/cabinet/cabinet-module').then(mod => mod.CabinetModule)
      },
      {
        path: 'help',
        loadChildren: () => import('./views/pages/help/help.module').then(mod => mod.HelpModule),
      },
      {
        path: 'invite',
        loadChildren: () => import('./views/pages/invite/invite.module').then(mod => mod.InviteModule),
      },
    ]
  },
  {
    path: 'ref/:id',
    redirectTo: '/auth/register/:id',
    pathMatch: 'full'
  },
  {
    path: 'auth',
    loadChildren: () => import('./views/pages/auth/auth.module').then(mod => mod.AuthModule),
  },
  {path: '**', component: NotFoundComponent},
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule],
})
export class AppRoutingModule {}
