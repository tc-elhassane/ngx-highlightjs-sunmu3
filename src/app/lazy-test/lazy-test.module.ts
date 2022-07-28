import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { RouterModule } from '@angular/router';
import { HighlightModule } from 'ngx-highlightjs';
import { LazyTestComponent } from './lazy-test/lazy-test.component';

@NgModule({
  imports: [
    CommonModule,
    RouterModule.forChild([
      {path: '', component: LazyTestComponent}
    ]),
    HighlightModule
  ],
  declarations: [LazyTestComponent]
})
export class LazyTestModule { }