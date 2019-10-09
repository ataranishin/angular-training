import { Pipe, PipeTransform } from '@angular/core';
import { CourseItem } from '../../core/service/courses-content.service';

@Pipe({
  name: 'orderBy'
})

export class OrderByPipe implements PipeTransform {
  transform(courses: CourseItem[],orderBy:string) {
    return orderBy ? courses.sort((a,b) => b[orderBy] - a[orderBy]) : courses
  }
}
