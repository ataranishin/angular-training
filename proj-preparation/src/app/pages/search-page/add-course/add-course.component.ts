import { Component, OnInit, Inject } from '@angular/core';
import { FormsModule } from '@angular/forms';
import { ICourseItem } from '../course/courses-content.model';
import { FormControl, FormGroup } from '@angular/forms';
import { CourseItemPublicService } from '../../../core/service/course-item-public.service';
@Component({
  selector: 'app-add-course',
  templateUrl: './add-course.component.html',
  styleUrls: ['./add-course.component.css']
})
export class AddCourseComponent {
  public course: ICourseItem;
  public titleControl: FormControl = new FormControl();
  public courseForm: FormGroup = new FormGroup({
    title:this.titleControl,
  })
  constructor(@Inject(CourseItemPublicService) c: CourseItemPublicService){
    console.log(c.getCourses());
  }
  private setFormValue() {
    this.titleControl.setValue(this.course.title);
  }


  public onSave(): void {
    this.c.updateCourse(this.courseForm);
    console.log(this.c);
  }
}
