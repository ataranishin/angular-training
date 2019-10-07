import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
import { AppComponent } from './app.component';

import { CoreModule } from './core/core.module';
import { BreadcrumbModule } from './breadcrumb/breadcrumb.module';
// import { CourseComponent } from './course-content/course/course.component';
// import { CourseitemComponent } from './course-content/courseitem/courseitem.component'
import { CourseContentModule } from './course-content/course-content.module';
import { SearchpanelModule } from './searchpanel/searchpanel.module'
@NgModule({
  declarations: [
    AppComponent,
  ],
  imports: [
    BrowserModule,
    CoreModule,
    BreadcrumbModule,
    CourseContentModule,
    SearchpanelModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
