import { Component, EventEmitter, OnInit, Input, Output, SimpleChanges } from '@angular/core';
import { ICourseItem } from '../../../core/service/courses-content.service';
@Component({
  selector: 'app-course',
  templateUrl: './course.component.html',
  styleUrls: ['./course.component.css']
})
export class CourseComponent implements OnInit {
  constructor() { }
  @Input() public course: ICourseItem
  @Output() public logId = new EventEmitter<number>();
  log(id) {
    this.logId.emit(id);
  }


  ngOnInit() {
  }
}
