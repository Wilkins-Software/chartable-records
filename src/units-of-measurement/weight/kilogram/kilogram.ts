import { Weight } from '../weight-base';

export class Kilogram extends Weight {
  public getBaseUnit() {
    return 'kg' as const;
  }
}
