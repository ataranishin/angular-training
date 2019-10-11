import { Route } from '@angular/router'
import { CoursesComponent } from './pages/search-page/courses/courses.component'
import { LoginComponent } from './shared/components/login/login.component';
export const ROUTES: Route[] = [
  {path: 'login', component: LoginComponent},
  {path: '', redirectTo: 'login',pathMatch: 'full'},  
];
