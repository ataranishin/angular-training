import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { CourseComponent } from './courses/course.component';
import { CourseitemComponent } from './course-item/course-item.component';



@NgModule({
  declarations: [CourseComponent, CourseitemComponent],
  imports: [
    CommonModule
  ],
  exports: [
    CourseComponent,
    CourseitemComponent
  ]
})
export class CourseContentModule { }
