import {NgModule} from '@angular/core';
import {ClientLinkComponent} from './views/blocks/aside/elements/client-link/client-link.component';
import {InlineSVGModule} from 'ng-inline-svg';
import {CommonModule} from '@angular/common';
@NgModule({
  declarations: [
    ClientLinkComponent,
  ],
  imports: [
    CommonModule,
    InlineSVGModule.forRoot(),
  ],
  providers: [],
  exports: [
    ClientLinkComponent,
  ],
  entryComponents: [
  ],
})
export class SharedModule {
}
