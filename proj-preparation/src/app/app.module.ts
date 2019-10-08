import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';
import { FormsModule,ReactiveFormsModule } from '@angular/forms';
import { AppComponent } from './app.component';
import { CoreModule } from './core/core.module';
import { BreadcrumbModule } from './breadcrumb/breadcrumb.module';
import { CoursesContentModule } from './courses-content/courses-content.module';
import { SearchPanelModule } from './search-panel/search-panel.module';
import {RouterModule} from '@angular/router';
import {ROUTES} from './app.routes';

@NgModule({
  declarations: [
    AppComponent,
  ],
  imports: [
    BrowserModule,
    FormsModule,
    ReactiveFormsModule,
    CoreModule,
    BreadcrumbModule,
    CoursesContentModule,
    SearchPanelModule,
    ReactiveFormsModule,
    RouterModule.forRoot(ROUTES)
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
