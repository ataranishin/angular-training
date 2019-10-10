import { Component, OnInit, Inject } from '@angular/core';
// import { CourseItem, CourseItemService } from 'service/courses-content.service';
import { CourseItemPublicService } from '../../../core/service/course-item-public.service';
import { ICourseItem } from '../../../core/service/courses-content.service';
@Component({
  selector: 'app-courses',
  templateUrl: './courses.component.html',
  styleUrls: ['./courses.component.css'],
  providers: [

  ]
})
export class CoursesComponent implements OnInit {
  public courseList: ICourseItem[] = [];
  constructor(private coursesService: CourseItemPublicService) {}
  ngOnInit() {
    this.courseList = this.coursesService.getCourses();
  }
  logId(id) {
    console.log(id);
  }
}


// import { CoursesContentService } from '../courses-content.service'
// export class CoursesComponent implements OnInit {
//   public courseItems: CourseItem[] = [];
//   constructor(private courseService: CoursesContentService) { }
//
//   ngOnInit() {
//     this.courseItems = this.courseService.getCourses();
//     // this.courseItems = this.courseService.getCourseItem();
//   }
//
// }
