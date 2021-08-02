import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-ngb-collapse',
  templateUrl: './ngb-collapse.component.html',
  styleUrls: ['./ngb-collapse.component.scss']
})
export class NgbCollapseComponent implements OnInit {
  public isCollapsed = false;
  constructor() { }

  ngOnInit(): void {
  }

}
