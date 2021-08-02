import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-ngb-checkbox',
  templateUrl: './ngb-checkbox.component.html',
  styleUrls: ['./ngb-checkbox.component.scss']
})
export class NgbCheckboxComponent implements OnInit {
  public isCollapsed = false;
  constructor() { }

  ngOnInit(): void {
  }

}
