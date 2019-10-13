import { Component, OnInit, Input } from '@angular/core';
import { FormControl, FormGroup } from '@angular/forms';
@Component({
  selector: 'app-creation-date',
  templateUrl: './creation-date.component.html',
  styleUrls: ['./creation-date.component.css'],
})

export class CreationDateComponent {
  @Input() public creationDate: string;
  public creationControl: FormControl = new FormControl();
}
