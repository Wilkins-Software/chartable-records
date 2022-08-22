import { Time } from '../time-base';
import { seconds } from '@wilkins-software/time-conversion-helpers';
export class Seconds extends Time {
  getBaseUnit() {
    return 'secs' as const;
  }

  getConverter() {
    return seconds;
  }
}
