import { Component, OnInit } from '@angular/core';
import { NgbTimeStruct } from '@ng-bootstrap/ng-bootstrap';
import { TimeHelper } from '../helper/timeHelper';

//https://ng-bootstrap.github.io/#/components/timepicker/api
@Component({
  selector: 'app-parent-timer',
  templateUrl: './parent-timer.component.html',
  styleUrls: ['./parent-timer.component.css']
})
export class ParentTimerComponent implements OnInit {

  public time: NgbTimeStruct;
  public myTimeString: string;
  public hourStep: number = 1;
  public minuteStep: number = 15;
  public secondStep: number = 30;
  public timePart: string;

  public timeChildren: Array<string> = new Array<string>();

  constructor() { }

  ngOnInit() {
    this.timeChildren.push("30");
    this.timeChildren.push("60");
    this.timeChildren.push("90");

    var date = new Date();
    var myHour: number;
    var myMinute: number;

    if (date.getMinutes() >= 30) {
      myHour = date.getHours() + 1;
      myMinute = 0;
    } else {
      myHour = date.getHours();
      myMinute = 30;
    }

    this.time = {
      hour: myHour,
      minute: myMinute,
      second: 0
    };

    this.myTimeString = TimeHelper.convertTime(this.time);
  }

  startTimeChange(newTime: NgbTimeStruct) {
    this.time = newTime;
    this.myTimeString = TimeHelper.convertTime(this.time);
  }

  addSubTime() {
    this.timeChildren.push(" ");
  }
}
