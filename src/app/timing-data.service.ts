import { Injectable } from '@angular/core';

@Injectable({
  providedIn: 'root',
})
export class TimingDataService {
  private maxLaps: number = 80;
  constructor() {}

  getNumberOfLaps(): number {
    return this.maxLaps;
  }

  getTireColorSettings(): any {
    return {
      soft: 'red',
      medium: 'yellow',
      hard: 'white',
      inter: 'lime',
      wet: 'lightblue',
    };
  }

  private getDrivers(): Array<any> {
    return [
      {
        driver: 'VER',
        color: '#0300F7',
        totalTime: 0,
        startPosition: 1,
        tires: [
          {
            lap: 0,
            type: 'Soft',
          },
        ],
      },
      {
        driver: 'PER',
        color: '#0300F7',
        totalTime: 0,
        startPosition: 2,
        tires: [
          {
            lap: 0,
            type: 'Soft',
          },
        ],
      },
      {
        driver: 'HAM',
        color: '#03D0B4',
        totalTime: 0,
        startPosition: 3,
        tires: [
          {
            lap: 0,
            type: 'Soft',
          },
        ],
      },
      {
        driver: 'BOT',
        color: '#03D0B4',
        totalTime: 0,
        startPosition: 4,
        tires: [
          {
            lap: 0,
            type: 'Soft',
          },
        ],
      },
      {
        driver: 'LEC',
        color: '#C80306',
        totalTime: 0,
        startPosition: 5,
        tires: [
          {
            lap: 0,
            type: 'Soft',
          },
        ],
      },
      {
        driver: 'SAI',
        color: '#C80306',
        totalTime: 0,
        startPosition: 6,
        tires: [
          {
            lap: 0,
            type: 'Soft',
          },
        ],
      },
      {
        driver: 'GAS',
        color: '#284158',
        totalTime: 0,
        startPosition: 7,
        tires: [
          {
            lap: 0,
            type: 'Soft',
          },
        ],
      },
      {
        driver: 'TSU',
        color: '#284158',
        totalTime: 0,
        startPosition: 8,
        tires: [
          {
            lap: 0,
            type: 'Soft',
          },
        ],
      },
      {
        driver: 'ALO',
        color: '#0B8DEE',
        totalTime: 0,
        startPosition: 9,
        tires: [
          {
            lap: 0,
            type: 'Soft',
          },
        ],
      },
      {
        driver: 'OCO',
        color: '#0B8DEE',
        totalTime: 0,
        startPosition: 10,
        tires: [
          {
            lap: 0,
            type: 'Soft',
          },
        ],
      },
      {
        driver: 'NOR',
        color: '#ED9716',
        totalTime: 0,
        startPosition: 11,
        tires: [
          {
            lap: 0,
            type: 'Soft',
          },
        ],
      },
      {
        driver: 'RIC',
        color: '#ED9716',
        totalTime: 0,
        startPosition: 12,
        tires: [
          {
            lap: 0,
            type: 'Soft',
          },
        ],
      },
      {
        driver: 'GIO',
        color: '#940000',
        totalTime: 0,
        startPosition: 13,
        tires: [
          {
            lap: 0,
            type: 'Soft',
          },
        ],
      },
      {
        driver: 'RAI',
        color: '#940000',
        totalTime: 0,
        startPosition: 14,
        tires: [
          {
            lap: 0,
            type: 'Soft',
          },
        ],
      },
      {
        driver: 'RUS',
        color: '#005CF9',
        totalTime: 0,
        startPosition: 15,
        tires: [
          {
            lap: 0,
            type: 'Soft',
          },
        ],
      },
      {
        driver: 'LAT',
        color: '#005CF9',
        totalTime: 0,
        startPosition: 16,
        tires: [
          {
            lap: 0,
            type: 'Soft',
          },
        ],
      },
      {
        driver: 'STR',
        color: '#077059',
        totalTime: 0,
        startPosition: 17,
        tires: [
          {
            lap: 0,
            type: 'Soft',
          },
        ],
      },
      {
        driver: 'VET',
        color: '#077059',
        totalTime: 0,
        startPosition: 18,
        tires: [
          {
            lap: 0,
            type: 'Soft',
          },
        ],
      },
      {
        driver: 'MAZ',
        color: '#FAFDFE',
        totalTime: 0,
        startPosition: 19,
        tires: [
          {
            lap: 0,
            type: 'Soft',
          },
        ],
      },
      {
        driver: 'MSC',
        color: '#FAFDFE',
        totalTime: 0,
        startPosition: 20,
        tires: [
          {
            lap: 0,
            type: 'Soft',
          },
        ],
      },
    ];
  }

  private getRandomValue(min: number, max: number) {
    return Math.random() * (max - min) + min;
  }

  private sortDriver(timeFrame: any): Array<any> {
    return timeFrame.positions.sort((a: any, b: any) => {
      return b['totalTime'] - a['totalTime'];
    });
  }

  getRandomTireChange(currentLap: number, driver: any): any {
    let tireChangeRandomValue = this.getRandomValue(
      currentLap - 10,
      currentLap
    );
    let tireChange = { lap: 0, type: '' };

    /**
     * If random value matches current lap, then change tires.
     */
    if (Math.round(tireChangeRandomValue) == currentLap) {
      // Only change tires if current tire is older than 15 laps.
      // Makes the random data a little more realistic.
      if (currentLap - driver.tires[driver.tires.length - 1].lap < 15) {
        return tireChange;
      }

      let tireTypeRandomValue = this.getRandomValue(0, 3);
      let tireType = 'Soft';

      if (tireTypeRandomValue > 1 && tireTypeRandomValue < 2) {
        tireType = 'Medium';
      } else if (tireTypeRandomValue > 2 && tireTypeRandomValue < 3) {
        tireType = 'Hard';
      }

      tireChange = {
        lap: currentLap,
        type: tireType,
      };
    }

    return tireChange;
  }

  calculateDriverPositions(drivers: any[], sortedDriverData: any[]) {
    let timeToLeader = 0;

    for (let i = 0; i < sortedDriverData.length; i++) {
      let currentDriver = sortedDriverData[i];

      if (i == 0) {
        // First driver.
        currentDriver.place = 1;
        currentDriver.timeToLeader = 0;
        currentDriver.timeInterval = 0;
      } else {
        currentDriver.place = i + 1;
        currentDriver.timeToLeader = timeToLeader;
        currentDriver.timeInterval = Math.abs(
          currentDriver.randomTime - sortedDriverData[i - 1].randomTime
        );

        if (
          currentDriver.randomTime - sortedDriverData[i - 1].randomTime <=
          1
        ) {
          currentDriver.hasDrsEnabled = true;
        }
      }

      let driver = drivers.find((r) => r.driver == currentDriver.driver);

      if (driver) {
        currentDriver.positionsGained = driver.startPosition - 1 - i;
      }

      if (driver) {
        driver.totalTime += currentDriver.randomTime;
      }

      timeToLeader += currentDriver.randomTime;
    }

    return sortedDriverData;
  }

  generateRandomData() {
    let data: any = [];
    let drivers = this.getDrivers();

    // Just a random time for each lap for every driver.
    let basePace = 74886;

    for (let lapIndex = 0; lapIndex < this.maxLaps; lapIndex++) {
      let timeFrame = new TimeFrame();

      timeFrame.time = lapIndex;

      for (let driverIndex = 0; driverIndex < drivers.length; driverIndex++) {
        let tireChange = this.getRandomTireChange(
          lapIndex,
          drivers[driverIndex]
        );
        let randomPace = this.getRandomValue(0, 2) * 1000;

        let position = {
          randomTime: randomPace,
          totalTime: drivers[driverIndex].totalTime,
          place: 1,
          driver: drivers[driverIndex].driver,
          color: drivers[driverIndex].color,
          positionsGained: 0,
          timeToLeader: 0,
          timeInterval: 0,
          lastLapTime: basePace + randomPace,
          hasDrsEnabled: false,
          tires: drivers[driverIndex].tires,
        };

        if (tireChange.lap > 0) {
          drivers[driverIndex].tires.push(tireChange);
          position.tires = drivers[driverIndex].tires;
        }

        timeFrame.positions.push(position);
      }

      let sortedDrivers = this.sortDriver(timeFrame);

      sortedDrivers = this.calculateDriverPositions(drivers, sortedDrivers);

      timeFrame.positions = sortedDrivers;

      data.push(timeFrame);
    }

    return data;
  }

  getData() {
    return this.generateRandomData();
  }
}

class TimeFrame {
  public time: Number;
  public positions: Array<any>;

  constructor() {
    this.time = 0;
    this.positions = [];
  }
}
