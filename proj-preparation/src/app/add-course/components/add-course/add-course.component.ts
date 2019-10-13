import { Component, OnInit, Inject } from '@angular/core';
import { FormControl, FormGroup } from '@angular/forms';
import { ICourseItem } from '../../../pages/search-page/course/courses-content.model';
import { HTTPService } from '../../../core/service/httpservice.service';
@Component({
  selector: 'app-add-course',
  templateUrl: './add-course.component.html',
  styleUrls: ['./add-course.component.css']
})

export class AddCourseComponent {
  constructor(courseService: HTTPService){}
  public data: any;
  public course: ICourseItem;
  public titleControl: FormControl = new FormControl();
  public descriptionControl: FormControl = new FormControl();
  public creationControl: FormControl = new FormControl();
  public durationControl: FormControl = new FormControl();

  public courseForm: FormGroup = new FormGroup({
    title: this.titleControl,
    creationDate: this.creationControl,
    description: this.descriptionControl,
    // duration: this.durationControl
  });

  public getData() {
    this.data = this.courseForm.value;
    console.log(this.data);
  }
}
