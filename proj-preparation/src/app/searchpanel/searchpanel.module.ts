import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { SearchinputComponent } from './searchinput/searchinput.component';
import { AddcourseComponent } from './addcourse/addcourse.component';


@NgModule({
  declarations: [SearchinputComponent, AddcourseComponent],
  imports: [
    CommonModule
  ],
  exports: [
    SearchinputComponent
  ]
})
export class SearchpanelModule { }
