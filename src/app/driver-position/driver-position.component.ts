import { Component, Input, OnInit } from '@angular/core';

@Component({
  selector: 'app-driver-position',
  templateUrl: './driver-position.component.html',
  styleUrls: ['./driver-position.component.less']
})
export class DriverPositionComponent implements OnInit {

  @Input() driver! : any;
  @Input() currentLap! : number;

  constructor() { }

  getTires(){
    return this.driver.tires.filter((r:any) => r.lap <= this.currentLap)
  }

  getGainedPositions(){
    return Math.abs(this.driver.positionsGained);
  }

  ngOnInit(): void {

  }
}
