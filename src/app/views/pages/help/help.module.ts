
import { NgModule } from '@angular/core';
import { QuestionComponent } from './blocks/question/question.component';
import { FaqComponent } from './blocks/faq/faq.component';
import { FormComponent } from './blocks/form/form.component';
import {InlineSVGModule} from 'ng-inline-svg';

@NgModule({
    declarations: [

        QuestionComponent,

        FaqComponent,

        FormComponent],

  imports: [
    InlineSVGModule
  ],
    providers: [],
  exports: [
    FaqComponent,
    FormComponent,
    QuestionComponent
  ],
    bootstrap: []
})


export class HelpModule { }
