import { Pipe, PipeTransform } from '@angular/core';

@Pipe({
  name: 'timeFormat',
})
export class TimeFormatPipe implements PipeTransform {
  formatTime(time: number, plusSign: boolean): string {
    let minutes = Math.floor(time / 60000);
    let seconds = Math.floor((time % 60000) / 1000);
    let milliseconds = Math.floor(Math.abs(time) % 1000);

    let value = '+';

    if (plusSign) {
      value = '';
    }

    if (minutes > 0) {
      value += minutes + ':';
    }

    return value + `${seconds}.${milliseconds.toString().padEnd(3, '0')}`;
  }

  transform(value: unknown, ...args: unknown[]): unknown {
    if (typeof value === 'number') {
      if (value == 0) {
        return '';
      }

      let shouldAddPlusSign = false;

      if (!args[1]) {
        shouldAddPlusSign = true;
      }

      return this.formatTime(value, shouldAddPlusSign);
    } else {
      return value;
    }
  }
}
