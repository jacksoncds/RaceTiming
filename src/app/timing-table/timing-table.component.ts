import { Component, OnInit } from '@angular/core';
import { TimingDataService } from '../timing-data.service';

@Component({
  selector: 'timing-table',
  templateUrl: './timing-table.component.html',
  styleUrls: ['./timing-table.component.less'],
})
export class TimingTableComponent implements OnInit {
  timingData: any[] = [];
  timingFramePositions: any[] = [];
  tireType: any;
  currentLap: number;
  totalLaps: number;
  timeIndex: number;
  lapIntervalToken: any;

  constructor(private timingDataService: TimingDataService) {
    this.currentLap = 1;
    this.totalLaps = 80;
    this.timeIndex = 1;
  }

  ngOnInit(): void {
    this.timingData = this.timingDataService.getData();
    this.tireType = this.timingDataService.getTireColorSettings();

    this.lapIntervalToken = setInterval(() => {
      this.timingFramePositions = this.timingData[this.timeIndex].positions;
      this.timeIndex++;
      this.currentLap = this.timeIndex;

      if (this.timeIndex == this.timingData.length) {
        window.clearInterval(this.lapIntervalToken);
      }
    }, 1000);
  }
}
