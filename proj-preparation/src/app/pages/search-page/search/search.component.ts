import { Component, OnInit } from '@angular/core';
import { FormsModule } from '@angular/forms';

@Component({
  selector: 'app-search',
  templateUrl: './search.component.html',
  styleUrls: ['./search.component.css']
})
export class SearchComponent {
  searchInput:string = "Search";
  public searchText: string;
  constructor() { }

  public consoleInputValue(value):void {
    if(value.trim()!=='') {
      console.log(value);
    }
  }
}
