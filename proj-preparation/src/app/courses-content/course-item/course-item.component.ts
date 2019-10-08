import { Component, EventEmitter, OnInit, Input, Output, SimpleChanges } from '@angular/core';
import { CourseItem } from '../course-item.model';
@Component({
  selector: 'app-courseitem',
  templateUrl: './course-item.component.html',
  styleUrls: ['./course-item.component.css']
})
export class CourseItemComponent implements OnInit {
  booleanVar: boolean = true;
  @Input() public courseItem: CourseItem
  @Output() logId = new EventEmitter<number>();
  log(id) {
    this.logId.emit(id);
  }
  constructor() { }
  ngOnChanges(changes:SimpleChanges) {
    console.log(changes);
  }
  ngOnInit() {
  }
}
