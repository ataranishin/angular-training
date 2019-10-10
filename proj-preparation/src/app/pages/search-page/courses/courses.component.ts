import { Component, OnInit, Inject } from '@angular/core';
import { CourseItemPublicService } from '../../../core/service/course-item-public.service';
import { ICourseItem } from '../course/courses-content.model';

@Component({
  selector: 'app-courses',
  templateUrl: './courses.component.html',
  styleUrls: ['./courses.component.css'],
})
export class CoursesComponent implements OnInit {
  public courseList: ICourseItem[] = [];
  constructor(private coursesService: CourseItemPublicService) {}
  public ngOnInit(): void {
    this.courseList = this.coursesService.getCourses();
  }
  logId(id) {
    console.log(id);
  }
}
