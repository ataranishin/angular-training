import { Injectable } from '@angular/core';
import { of,from,Observable } from 'rxjs';
import { courses } from './course-item-public.service';

@Injectable({
  providedIn: 'root'
})
export class ObsService {
  constructor(){}
  public createDataObs() {
    return from(courses);
  }
}
