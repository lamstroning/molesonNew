import {NgModule} from '@angular/core';
import {ClientLinkComponent} from './views/blocks/aside/elements/client-link/client-link.component';
import {InlineSVGModule} from 'ng-inline-svg';
import {CommonModule} from '@angular/common';
import {StarsRowComponent} from './views/pages/partners/stars-row/stars-row.component';
import {ShowHidePasswordModule} from 'ngx-show-hide-password';
@NgModule({
  declarations: [
    ClientLinkComponent,
    StarsRowComponent,
  ],
  imports: [
    CommonModule,
    ShowHidePasswordModule,
    InlineSVGModule.forRoot(),
  ],
  providers: [],
  exports: [
    ClientLinkComponent,
    StarsRowComponent,
    ShowHidePasswordModule,
  ],
  entryComponents: [
  ],
})
export class SharedModule {
}
