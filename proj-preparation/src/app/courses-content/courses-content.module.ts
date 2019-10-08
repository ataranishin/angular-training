import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { CoursesComponent } from './courses/courses.component';
import { CourseItemComponent } from './course-item/course-item.component';
import { BorderDirective } from './courses-content.directive';



@NgModule({
  declarations: [
    CoursesComponent,
    CourseItemComponent,

    BorderDirective
  ],
  imports: [
    CommonModule,

  ],
  exports: [
    CoursesComponent,
    CourseItemComponent
  ]
})
export class CoursesContentModule { }
