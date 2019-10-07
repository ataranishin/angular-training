import { Component, OnInit } from '@angular/core';
import { CourseItem } from '../course-item.model';
import { CoursesContentService } from '../courses-content.service'
@Component({
  selector: 'app-courses',
  templateUrl: './courses.component.html',
  styleUrls: ['./courses.component.css']
})
export class CoursesComponent implements OnInit {
  public courseItems: CourseItem[] = [];
  constructor(private courseService: CoursesContentService) { }

  ngOnInit() {
    this.courseItems = this.courseService.getCourseItem();
  }

}
