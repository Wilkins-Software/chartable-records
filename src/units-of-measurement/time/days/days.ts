import { Time } from '../time-base';
import { days } from '@wilkins-software/time-conversion-helpers';

export class Days extends Time {
  getBaseUnit() {
    return 'days' as const;
  }

  getConverter() {
    return days;
  }
}
