import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { CoursesComponent } from './courses/courses.component';
import { CourseItemComponent } from './course-item/course-item.component';
import { BorderDirective } from './directive/courses-content.directive';
import { DurationPipe } from './pipes/duration.pipe';
import { OrderByPipe } from './pipes/orderBy.pipe';

@NgModule({
  declarations: [
    CoursesComponent,
    CourseItemComponent,
    DurationPipe,
    BorderDirective,
    OrderByPipe
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
