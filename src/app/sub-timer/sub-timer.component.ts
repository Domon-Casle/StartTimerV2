import { Component, OnInit, Input } from '@angular/core';
import { NgbTimeStruct } from '@ng-bootstrap/ng-bootstrap';
import { TimeHelper } from '../helper/timeHelper';

@Component({
  selector: 'app-sub-timer',
  templateUrl: './sub-timer.component.html',
  styleUrls: ['./sub-timer.component.css']
})
export class SubTimerComponent implements OnInit {

  public myTimeString: string;
  public myTime: string = "";

  @Input() parentTime: NgbTimeStruct;
  @Input() defaultValue: string;

  constructor() { }

  ngOnInit() {
    this.myTime = this.defaultValue.toString();
    this.setMyStartTime();
  }

  ngOnChanges() {
    this.setMyStartTime();
  }

  myTimeChanged(event) {
    this.myTime = event;
    this.setMyStartTime();
  }

  setMyStartTime() {
    var value = this.myTime;

    var indexofMinutes = null;
    var indexofSeconds = null;
    var minutes = 0;
    var seconds = 0;

    if (value.includes("m")) {
        indexofMinutes = value.indexOf("m");
    }
    if (value.includes("M")) {
        indexofMinutes = value.indexOf("M")
    }
    if (value.includes("s")) {
        indexofSeconds = value.indexOf("s");
    }
    if (value.includes("S")) {
        indexofSeconds = value.indexOf("S");
    }

    if ((indexofMinutes !== null) && (indexofSeconds !== null) && (indexofMinutes > indexofSeconds))
    {
        this.myTimeString = "Invalid Time: Please enter M before S";
    }
    else 
    {
        if (indexofMinutes !== null) {
            minutes = parseInt(value.substring(0, indexofMinutes));
        }

        if (indexofMinutes === null) {
            if (value.length !== 0) {
                seconds = parseInt(value);
            }
        }
        else {
            if (indexofSeconds !== null) {
                seconds = parseInt(value.substring(indexofMinutes + 1, value.length - 1));
            }
            else {
                if ((indexofMinutes + 1) < value.length) {
                    seconds = parseInt(value.substring(indexofMinutes + 1, value.length));
                }
            }
        }
    }

    if (value.length > 0 && value !== " ")
    {
      var converTime = {
        hour: this.parentTime.hour,
        minute: this.parentTime.minute,
        second: this.parentTime.second
      };

      converTime.minute -= minutes;
      converTime.second -= seconds;
      this.myTimeString = TimeHelper.convertTime(converTime) + " (" + this.myTime + " before)";
    }
    else if (value === " ")
    {
      this.myTimeString = "Input an early start time";
    }
    else
    {
      this.myTimeString = TimeHelper.convertTime(this.parentTime);
    }
  }
}
