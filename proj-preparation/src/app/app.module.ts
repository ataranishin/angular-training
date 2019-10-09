import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';
import { FormsModule,ReactiveFormsModule } from '@angular/forms';
import { AppComponent } from './app.component';
import { SharedModule } from './shared/shared.module';
import { PagesModule } from './pages/pages.module';
import {RouterModule} from '@angular/router';
import { CourseItemPublicService } from './core/service/course-item-public.service';
import { CourseItemService } from './core/service/courses-content.service';
import {ROUTES} from './app.routes';

@NgModule({
  declarations: [
    AppComponent,
  ],
  imports: [
    BrowserModule,
    FormsModule,
    ReactiveFormsModule,
    ReactiveFormsModule,
    SharedModule,
    PagesModule,
    RouterModule.forRoot(ROUTES)
  ],
  providers: [
    // {
    //   provide: CourseItemService,
    //   useClass: CourseItemPublicService
    // }
  ],
  bootstrap: [AppComponent]
})
export class AppModule { }
