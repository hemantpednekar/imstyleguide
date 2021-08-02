import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-ngb-dropdown',
  templateUrl: './ngb-dropdown.component.html'
})
export class NgbDropdownComponent implements OnInit {

  languages: string[] = ["Year", "Title", "Author"];
  selectedValue: string = "Sort by...";
  
  ChangeSortOrder(newLanguage: string) { 
    this.selectedValue = newLanguage;
  }

  constructor() { }

  ngOnInit(): void {
  }

}
