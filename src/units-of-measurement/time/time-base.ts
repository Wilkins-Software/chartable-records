import { UnitNotation, UnitOfMeasure } from '../unit-of-measure-base';
import * as TimeConverters from '@wilkins-software/time-conversion-helpers';

type TimeUnitNotations = Extract<
  UnitNotation,
  'secs' | 'mins' | 'hrs' | 'days' | 'years'
>;

export abstract class Time extends UnitOfMeasure {
  protected value: number;

  constructor(value: number) {
    super();
    this.value = value;
  }

  getValue() {
    return this.value;
  }

  public getType = () => 'numeric' as const;
  abstract getBaseUnit(): TimeUnitNotations;
  abstract getConverter(): typeof TimeConverters[keyof typeof TimeConverters];

  convert() {
    const from = this.getConverter();
    return from(this.value);
  }
}
