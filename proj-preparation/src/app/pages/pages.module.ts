import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormsModule, ReactiveFormsModule } from '@angular/forms';
import { CourseComponent } from './search-page/course/course.component';
import { CoursesComponent } from './search-page/courses/courses.component';
import { SearchComponent } from './search-page/search/search.component';
import { SharedModule } from '../shared/shared.module';
import { AddCourseComponent } from './search-page/add-course/add-course.component'

@NgModule({
  declarations: [
    CourseComponent,
    CoursesComponent,
    SearchComponent,
    AddCourseComponent
  ],
  imports: [
    FormsModule,
    ReactiveFormsModule,
    CommonModule,
    SharedModule,
    FormsModule,

  ],
  exports: [
    CoursesComponent,
    AddCourseComponent
  ]
})
export class PagesModule {}
