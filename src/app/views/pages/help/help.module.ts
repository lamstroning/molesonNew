import {NgModule} from '@angular/core';
import {QuestionComponent} from './blocks/question/question.component';
import {FaqComponent} from './blocks/faq/faq.component';
import {FormComponent} from './blocks/form/form.component';
import {InlineSVGModule} from 'ng-inline-svg';
import {RouterModule, Routes} from '@angular/router';
import {HelpComponent} from './help.component';
import {CommonModule} from '@angular/common';
import {WidgetModule} from '../../widget/widget.module';

const routes: Routes = [
  {
    path: '',
    component: HelpComponent
  }
];

@NgModule({
  declarations: [
    HelpComponent,
    QuestionComponent,
    FaqComponent,
    FormComponent
  ],

  imports: [
    InlineSVGModule,
    CommonModule,
    WidgetModule,
    RouterModule.forChild(routes)
  ],
  providers: [],
  exports: [
    FaqComponent,
    FormComponent,
    QuestionComponent
  ],
  bootstrap: []
})


export class HelpModule {
}
