import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
import { AppComponent } from './app.component';

import { CoreModule } from './core/core.module';
import { BreadcrumbModule } from './breadcrumb/breadcrumb.module';


import { CoursesContentModule } from './courses-content/courses-content.module';
import { SearchPanelModule } from './search-panel/search-panel.module'
@NgModule({
  declarations: [
    AppComponent,
  ],
  imports: [
    BrowserModule,
    CoreModule,
    BreadcrumbModule,
    CoursesContentModule,
    SearchPanelModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
