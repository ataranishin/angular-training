import { Route } from '@angular/router'
import { CoursesComponent } from './courses-content/courses/courses.component'

export const ROUTES: Route[] = [
  {path: 'courses', component: CoursesComponent},
  {path: '', redirectTo: 'courses',pathMatch: 'full'}
];
