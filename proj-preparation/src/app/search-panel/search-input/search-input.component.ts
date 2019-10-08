import { Component, OnInit } from '@angular/core';
import { FormsModule } from '@angular/forms';

@Component({
  selector: 'app-searchinput',
  templateUrl: './search-input.component.html',
  styleUrls: ['./search-input.component.css']
})
export class SearchInputComponent implements OnInit {
  bindVar:string = "Search";
  public searchText: string;
  constructor() { }

  ngOnInit() {

  }
  public consoleInputValue(value):void {
    if(value!='') {
      console.log(value);
    }
  }
}
