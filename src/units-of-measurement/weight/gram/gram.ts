import { Weight } from '../weight-base';

export class Gram extends Weight {
  public getBaseUnit() {
    return 'g' as const;
  }
}
