import { NgModule } from '@angular/core';
import {InlineSVGModule} from 'ng-inline-svg';
import { RouterModule, Routes} from '@angular/router';
import {CommonModule} from '@angular/common';
import {AuthComponent} from './auth/auth.component';
import { AuthMainComponent } from './auth-main/auth-main.component';
import {FirstStageRegisterComponent} from './register/first-stage/register-first.component';
import {SecondStageRegisterComponent} from './register/second-stage/register-second.component';
import { RegisterComponent } from './register/register.component';
import { ResetPasswordComponent } from './reset-password/reset-password.component';
import { ResetPasswordCodeComponent } from './reset-password/reset-password-code/reset-password-code.component';
import {FormsModule, ReactiveFormsModule} from '@angular/forms';
import { SocialAuthComponent } from './social-auth/social-auth.component';
import {WidgetModule} from '../../widget/widget.module';
import {RecaptchaModule} from 'angular-google-recaptcha';
import { NgxMaskModule, IConfig } from 'ngx-mask';
export const options: Partial<IConfig> | (() => Partial<IConfig>) = null;
import { SocialLoginModule, AuthServiceConfig } from 'angularx-social-login';
import { FacebookLoginProvider } from 'angularx-social-login';

const config = new AuthServiceConfig([
  {
    id: FacebookLoginProvider.PROVIDER_ID,
    provider: new FacebookLoginProvider('1485170318347408')
  }
]);

export function provideConfig() {
  return config;
}

const routes: Routes = [
  {
    path: '',
    component: AuthMainComponent,
    children: [
      {
        path: '',
        redirectTo: '/auth/login',
        pathMatch: 'full'
      },
      {
        path: 'register',
        redirectTo: 'register/',
        pathMatch: 'full'
      },
      {
        path: 'register/:id',
        component: RegisterComponent,
      },
      {
        path: 'login',
        component: AuthComponent
      },
      {
        path: 'auth',
        component: AuthMainComponent,
      },
      {
        path: 'reset',
        component: ResetPasswordComponent
      },
      {
        path: 'reset/confirm',
        component: ResetPasswordCodeComponent
      },
    ]
  }
];

@NgModule({
  declarations: [
    AuthComponent,
    AuthMainComponent,
    FirstStageRegisterComponent,
    SecondStageRegisterComponent,
    RegisterComponent,
    ResetPasswordComponent,
    ResetPasswordCodeComponent,
    SocialAuthComponent
  ],

  imports: [
    InlineSVGModule,
    RouterModule.forChild(routes),
    CommonModule,
    FormsModule,
    WidgetModule,
    RecaptchaModule.forRoot({
      siteKey: '6LfoIbkZAAAAAAXFpHZHWalfycp3N23CJhFKr4Rg'
    }),
    NgxMaskModule.forRoot(),
    ReactiveFormsModule,
    SocialLoginModule
  ],
  providers: [
    {
      provide: AuthServiceConfig,
      useFactory: provideConfig
    }
  ],
  exports: [
  ],
  bootstrap: []
})


export class AuthModule { }
