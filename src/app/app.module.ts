import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';


import { ViewsModule } from './views/views.module';
import {NotFoundComponent} from './views/pages/notFound/notfound.component';
import {RouterModule, Routes} from '@angular/router';
import {ViewsComponent} from './views/views.component';

const appRoutes: Routes = [
  { path: 'views', component: ViewsComponent}
];

@NgModule({
  declarations: [
    AppComponent,
    NotFoundComponent
  ],
  imports: [
    BrowserModule,
    ViewsModule,
    AppRoutingModule,
    RouterModule.forRoot(appRoutes)
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
