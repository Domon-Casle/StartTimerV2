import { NgbTimeStruct } from "@ng-bootstrap/ng-bootstrap";

export class TimeHelper {
    static convertTime(time: NgbTimeStruct): string {
        var tempTime = new Date();
        tempTime.setHours(time.hour);
        tempTime.setMinutes(time.minute);
        tempTime.setSeconds(time.second);

        return tempTime.toLocaleTimeString();
    }
}