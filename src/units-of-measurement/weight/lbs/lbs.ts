import { Weight } from '../weight-base';

export class Lbs extends Weight {
  public getBaseUnit() {
    return 'lbs' as const;
  }
}
