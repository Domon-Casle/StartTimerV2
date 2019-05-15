import { Component } from '@angular/core';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent {
  title = 'Start-Timer';

  public refreshCounter: number = 0;

  refresh() {
    this.refreshCounter++;
  }
}
