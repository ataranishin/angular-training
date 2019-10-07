import { Component, OnInit } from '@angular/core';
import { CourseItem } from '../course-item.model';
import { CoursecontentService } from '../course-content.service'
@Component({
  selector: 'app-course',
  templateUrl: './course.component.html',
  styleUrls: ['./course.component.css']
})
export class CourseComponent implements OnInit {
  public courseItems: CourseItem[] = [];
  constructor(private courseService: CoursecontentService) { }

  ngOnInit() {
    this.courseItems = this.courseService.getCourseItem();
  }

}
