import { NgModule } from '@angular/core';
import {HeaderModule} from './header/header.module';
import {AsideComponent} from './aside/aside.component';
import {FooterComponent} from './footer/footer.component';
import {RouterModule} from '@angular/router';
import {InlineSVGModule} from 'ng-inline-svg';
import {CommonModule} from '@angular/common';
import {WalletComponent} from './header/header-elements/wallet/wallet.component';
import {ProfileComponent} from './header/header-elements/profile/profile.component';
import { ClientStatusComponent } from './aside/elements/client-status/client-status.component';
import { MenuComponent } from './aside/elements/menu/menu.component';
import { InviteComponent } from './aside/elements/invite/invite.component';
import {HeaderComponent} from './header/header.component';
import {LangComponent} from './header/header-elements/lang/lang.component';
import {SharedModule} from '../../shared.module';


@NgModule({
  declarations: [
    AsideComponent,
    FooterComponent,
    WalletComponent,
    ClientStatusComponent,
    MenuComponent,
    InviteComponent,
    HeaderComponent,
    ProfileComponent,
    LangComponent,
  ],
  imports: [
    RouterModule,
    InlineSVGModule.forRoot(),
    CommonModule,
    SharedModule,
    HeaderModule
  ],
  providers: [],
  exports: [
    AsideComponent,
    FooterComponent,
    WalletComponent,
    HeaderComponent
  ],
  bootstrap: []
})


export class BlocksModule { }
