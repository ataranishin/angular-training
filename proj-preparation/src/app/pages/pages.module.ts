import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormsModule } from '@angular/forms';
import { CourseComponent } from './search-page/course/course.component';
import { CoursesComponent } from './search-page/courses/courses.component';
import { SearchComponent } from './search-page/search/search.component';
import { SharedModule } from '../shared/shared.module';

@NgModule({
  declarations: [
    CourseComponent,
    CoursesComponent,
    SearchComponent
  ],
  imports: [
    CommonModule,
    SharedModule,
    FormsModule,
  ],
  exports: [
    CoursesComponent,
  ]
})
export class PagesModule {}
