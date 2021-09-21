import { Component, Input, OnInit } from '@angular/core';
import { TimingDataService } from '../timing-data.service';

@Component({
  selector: 'app-tire-change-progress',
  templateUrl: './tire-change-progress.component.html',
  styleUrls: ['./tire-change-progress.component.less'],
})
export class TireChangeProgressComponent implements OnInit {
  @Input() tires!: any;
  @Input() currentLap!: any;

  pixelsPerLap: number = 10;
  tireColorSettings: any;

  constructor(private timingDataService: TimingDataService) {}

  getLaps(index: number, item: any) {
    return item.lap;
  }

  getLapsSinceLastTireChange() {
    if (this.tires.length == 1) {
      return this.currentLap;
    } else {
      return this.currentLap - this.tires[this.tires.length - 1].lap;
    }
  }

  getTireColor(tireType: string): string {
    return this.tireColorSettings[tireType.toLowerCase()];
  }

  getLastTireColor() {
    return this.tireColorSettings[
      this.tires[this.tires.length - 1].type.toLowerCase()
    ];
  }

  getTireLaps(tireIndex: number) {
    if (tireIndex === 0) {
      if (this.tires.length > tireIndex + 1) {
        // If here, that means this is not the last tire change.
        return this.tires[tireIndex + 1].lap - this.tires[tireIndex].lap;
      } else {
        return this.currentLap;
      }
    } else if (tireIndex == this.tires.length - 1) {
      // Last tire change.
      return this.currentLap - this.tires[tireIndex].lap;
    } else {
      return this.tires[tireIndex + 1].lap - this.tires[tireIndex].lap;
    }
  }

  getTireLapsInPixels(tireIndex: number) {
    return this.getTireLaps(tireIndex) * this.pixelsPerLap + 'px';
  }

  ngOnInit(): void {
    this.tireColorSettings = this.timingDataService.getTireColorSettings();
  }
}
