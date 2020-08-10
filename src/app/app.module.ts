import {BrowserModule} from '@angular/platform-browser';
import {NgModule} from '@angular/core';
import {AppRoutingModule} from './app-routing.module';
import {AppComponent} from './app.component';
import {ViewsModule} from './views/views.module';
import {RecaptchaModule} from 'angular-google-recaptcha';
import {TokenService} from './core/token/token.service';

@NgModule({
  declarations: [
    AppComponent,
  ],
  imports: [
    BrowserModule,
    ViewsModule,
    AppRoutingModule,
  ],
  providers: [TokenService],
  exports: [],
  bootstrap: [AppComponent]
})
export class AppModule {
}
