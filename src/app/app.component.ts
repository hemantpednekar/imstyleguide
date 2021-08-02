import { Component } from '@angular/core';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.scss']
})
export class AppComponent {
  title = 'UiFrontend';
  public isCollapsed = false;
  viewModel="map";
  active = 1;

  alertcode = `
  import { Component } from '@angular/core';

interface Alert {
  type: string;
  message: string;
}

const ALERTS: Alert[] = [{
    type: 'success',
    message: 'This is an success alert &lt;a href="#" class="alert-link">an example link&lt;/a>',
  }, {
    type: 'info',
    message: 'This is an info alert This is an info alert This is an info alert ',
  }, {
    type: 'warning',
    message: 'This is a warning alert',
   }, {
    type: 'danger',
    message: 'This is a danger alert',
  }
];

@Component({
  selector: 'app-ngb-alerts',
  templateUrl: './ngb-alerts.component.html',
  styleUrls: ['./ngb-alerts.component.scss']
})
export class NgbAlertsComponent  {

  alerts: Alert[] = [];

  constructor() {
    this.reset();
  }

  close(alert: Alert) {
    this.alerts.splice(this.alerts.indexOf(alert), 1);
  }

  reset() {
    this.alerts = Array.from(ALERTS);
  }

} `;
}
