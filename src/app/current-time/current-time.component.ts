import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-current-time',
  templateUrl: './current-time.component.html',
  styleUrls: ['./current-time.component.css']
})
export class CurrentTimeComponent implements OnInit {

  public currentTime: string = "Loading";

  constructor() { }

  ngOnInit() {
    setInterval(this.setTime.bind(this), 1000);
  }

  setTime() {
    var date = new Date();
    this.currentTime = date.toLocaleTimeString();
  }
}
