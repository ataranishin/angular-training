import { Component, OnInit } from '@angular/core';
// import { CourseItem } from '../course-item.model';
import { CourseItem, CourseItemService } from '../service/courses-content.service';
import { CourseItemPublicService } from '../service/course-item-public.service';

@Component({
  selector: 'app-courses',
  templateUrl: './courses.component.html',
  styleUrls: ['./courses.component.css'],
  providers: [
    {
      provide: CourseItemService,
      useClass: CourseItemPublicService
    }
  ]
})
export class CoursesComponent {
  public courseItems: CourseItem[] = [];
  constructor(private coursesService: CourseItemService) { }
  ngOnInit() {
    this.courseItems = this.coursesService.getCourses();
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
