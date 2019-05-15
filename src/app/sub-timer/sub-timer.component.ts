import { Component, OnInit, Input } from '@angular/core';
import { NgbTimeStruct } from '@ng-bootstrap/ng-bootstrap';
import { TimeHelper } from '../helper/timeHelper';

@Component({
  selector: 'app-sub-timer',
  templateUrl: './sub-timer.component.html',
  styleUrls: ['./sub-timer.component.css']
})
export class SubTimerComponent implements OnInit {

  private timeOutArray: any;

  public myColorClass: string;
  public myTimeString: string;
  public myTime: string = "";

  @Input() parentTime: NgbTimeStruct;
  @Input() defaultValue: string;

  constructor() { }

  ngOnInit() {
    this.myColorClass = "noColor";

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
      var convertTime = {
        hour: this.parentTime.hour,
        minute: this.parentTime.minute,
        second: this.parentTime.second
      };

      convertTime.minute -= minutes;
      convertTime.second -= seconds;
      this.myTimeString = TimeHelper.convertTime(convertTime) + " (" + this.myTime + " before)";
      this.setColorTimeouts(convertTime);
    }
    else if (value === " ")
    {
      this.myTimeString = "Input an early start time";
    }
    else
    {
      this.myTimeString = TimeHelper.convertTime(this.parentTime);
      this.setColorTimeouts(this.parentTime);
    }
  }

  setColorTimeouts(time) {
    if (!this.timeOutArray) {
      this.timeOutArray = [];
    }

    if (this.timeOutArray.length > 0) {
      this.timeOutArray.forEach(clearTimeout);

      this.timeOutArray = [];
    }

    // Set Time outs
    var outTimeDate = new Date();
    outTimeDate.setHours(time.hour);
    outTimeDate.setMinutes(time.minute);
    outTimeDate.setSeconds(time.second);

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
