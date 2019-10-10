import { Component, EventEmitter, OnInit, Input, Output, SimpleChanges } from '@angular/core';
import { ICourseItem } from './courses-content.model';
@Component({
  selector: 'app-course',
  templateUrl: './course.component.html',
  styleUrls: ['./course.component.css']
})
export class CourseComponent {
  constructor() { }
  @Input() public course: ICourseItem
  @Output() public logId = new EventEmitter<number>();
  log(id: number) {
    this.logId.emit(id);
  }
}
