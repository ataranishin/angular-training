import { Component, EventEmitter, OnInit, Input, Output, SimpleChanges } from '@angular/core';
import { CourseItem } from '../../../core/service/courses-content.service';
@Component({
  selector: 'app-course',
  templateUrl: './course.component.html',
  styleUrls: ['./course.component.css']
})
export class CourseComponent implements OnInit {
  constructor() { }
  @Input() public course: CourseItem
  @Output() public logId = new EventEmitter<number>();
  log(id) {
    this.logId.emit(id);
  }


  ngOnInit() {
  }
}
