import { NgModule } from '@angular/core';
import {ProfileComponent} from './header-elements/profile/profile.component';
import {HeaderComponent} from './header.component';
import {InlineSVGModule} from 'ng-inline-svg';
import {WalletComponent} from './header-elements/wallet/wallet.component';
import {LangComponent} from './header-elements/lang/lang.component';
import {CommonModule} from '@angular/common';
import {BlocksModule} from '../blocks.module';
@NgModule({
  declarations: [
    HeaderComponent,
    ProfileComponent,
    LangComponent,
    WalletComponent
  ],
  imports: [
    CommonModule,
    InlineSVGModule.forRoot(),
    BlocksModule,
  ],
  providers: [],
  exports: [
    HeaderComponent
  ],
  bootstrap: []
})


export class HeaderModule { }
