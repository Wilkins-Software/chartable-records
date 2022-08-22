import { UnitNotation, UnitOfMeasure } from '../unit-of-measure-base';

type WeightUnitNotations = Extract<UnitNotation, 'kg' | 'g' | 'lbs'>;

export abstract class Weight extends UnitOfMeasure {
  protected value: number;

  constructor(value: number) {
    super();
    this.value = value;
  }

  getValue() {
    return this.value;
  }

  public getType = () => 'numeric' as const;
  abstract getBaseUnit(): WeightUnitNotations;

  getRatio(from: WeightUnitNotations, to: WeightUnitNotations): number {
    const fromToRatio: {
      [key in WeightUnitNotations]: {
        [key in WeightUnitNotations]: number;
      };
    } = {
      kg: {
        g: 1000,
        lbs: 2.20462,
        kg: 1,
      },
      g: {
        kg: 0.001,
        lbs: 0.00220462,
        g: 1,
      },
      lbs: {
        g: 453.592,
        kg: 0.453592,
        lbs: 1,
      },
    };

    return fromToRatio[from][to];
  }

  convert(to: WeightUnitNotations) {
    const from = this.getBaseUnit();
    const fromToRatio = this.getRatio(from, to);
    return this.value * fromToRatio;
  }
}
