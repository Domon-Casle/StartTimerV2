import { Component, OnInit, Input } from '@angular/core';
import { NgbTimeStruct } from '@ng-bootstrap/ng-bootstrap';
import { TimeHelper } from '../helper/timeHelper';

//https://ng-bootstrap.github.io/#/components/timepicker/api
@Component({
  selector: 'app-parent-timer',
  templateUrl: './parent-timer.component.html',
  styleUrls: ['./parent-timer.component.css']
})
export class ParentTimerComponent implements OnInit {

  private timeOutArray: any;

  public myColorClass: string;
  public time: NgbTimeStruct;
  public myTimeString: string;
  public hourStep: number = 1;
  public minuteStep: number = 15;
  public secondStep: number = 30;
  public timePart: string;

  public timeChildren: Array<string>;

  @Input() refreshCalled: number;
  
  constructor() { }

  ngOnInit() {
    this.init();
  }

  ngOnChanges() {
    this.init();
  }

  init() {
    this.myColorClass = "noColor";
    this.timeChildren = new Array<string>();

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
    this.setColorTimeouts();
  }

  startTimeChange(newTime: NgbTimeStruct) {
    this.time = newTime;
    this.myTimeString = TimeHelper.convertTime(this.time);
    this.setColorTimeouts();
  }

  addSubTime() {
    this.timeChildren.push(" ");
  }

  setColorTimeouts() {
    if (!this.timeOutArray) {
      this.timeOutArray = [];
    }

    if (this.timeOutArray.length > 0) {
      this.timeOutArray.forEach(clearTimeout);

      this.timeOutArray = [];
    }

    // Set Time outs
    var outTimeDate = new Date();
    outTimeDate.setHours(this.time.hour);
    outTimeDate.setMinutes(this.time.minute);
    outTimeDate.setSeconds(this.time.second);

    var redTimer = outTimeDate.getTime() - Date.now() - 30000;
    if (redTimer > 0)
    {
        this.timeOutArray.push(setTimeout(() => {
          this.myColorClass = "redColor";
        }, redTimer));
    }

    var orangeTimer = outTimeDate.getTime() - Date.now() - 20000;
    if (orangeTimer > 0)
    {
        this.timeOutArray.push(setTimeout(() => {
          this.myColorClass = "orangeColor";
        }, orangeTimer));
    }

    var yellowTimer = outTimeDate.getTime() - Date.now() - 10000;
    if (yellowTimer > 0)
    {
        this.timeOutArray.push(setTimeout(() => {
          this.myColorClass = "yellowColor";
        }, yellowTimer));
    }

    var greenTimer = outTimeDate.getTime() - Date.now();
    if (greenTimer > 0)
    {
        this.timeOutArray.push(setTimeout(() => {
          this.myColorClass = "greenColor";
        }, greenTimer));
    }
  }
}
