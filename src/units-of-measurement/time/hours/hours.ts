import { Time } from '../time-base';
import { hours } from '@wilkins-software/time-conversion-helpers';

export class Hours extends Time {
  getBaseUnit() {
    return 'hrs' as const;
  }

  getConverter() {
    return hours;
  }
}
