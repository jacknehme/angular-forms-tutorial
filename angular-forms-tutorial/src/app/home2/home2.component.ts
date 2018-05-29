import { Component } from "@angular/core";

@Component({
    selector: 'home2',
    styleUrls: ['./home2.component.css'],
    templateUrl: './home2.component.html'
})
export class Home2Component {
    startDate = new Date('Jan 1 2018');
    startTime = new Date('Oct 1 2016 3:33 PM');
    onOffSwitch = "On";
    taxType = "W2";
    postRating = 5;

    hover(value){
        console.log("hover: " + value);
    }

    leave(value){
        console.log("leave: " + value);
    }
}