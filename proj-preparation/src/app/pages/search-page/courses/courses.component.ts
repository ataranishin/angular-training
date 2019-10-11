import { Component, OnInit, Inject } from '@angular/core';
import { CourseItemPublicService } from '../../../core/service/course-item-public.service';
import { ICourseItem } from '../course/courses-content.model';
import { ObsService } from '../../../core/service/obs.service';
import { filter } from 'rxjs/operators';

@Component({
  selector: 'app-courses',
  templateUrl: './courses.component.html',
  styleUrls: ['./courses.component.css'],
})
export class CoursesComponent implements OnInit {
  public searchable: string = '';
  public searchText: string = '';
  public courseList: ICourseItem[] = [];
  public c;
  constructor(private coursesService: CourseItemPublicService,@Inject(ObsService) public obsService: ObsService) {}
  public dataObs$;
  public ngOnInit(): void {
    this.courseList = this.coursesService.getCourses();
    this.dataObs$ = this.obsService.createDataObs().pipe(filter(course => course.title=='Video #1'));
    this.dataObs$.subscribe(v => console.log(v));
  }
  public setSearchable(): void{
    this.searchable = this.searchText;
  };

  public logId(id: number): void {
    console.log(id);
  }
}
