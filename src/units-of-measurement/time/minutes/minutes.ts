import { Time } from '../time-base';
import { minutes } from '@wilkins-software/time-conversion-helpers';

export class Minutes extends Time {
  getBaseUnit() {
    return 'mins' as const;
  }

  getConverter() {
    return minutes;
  }
}
