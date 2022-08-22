export type Type = 'numeric' | 'string';
export type UnitNotation =
  | 'kg'
  | 'g'
  | 'lbs'
  | 'oz'
  | 'secs'
  | 'mins'
  | 'hrs'
  | 'days'
  | 'years';

export abstract class UnitOfMeasure {
  protected abstract value: number | string;
  public abstract getType(): Type;
  public abstract getBaseUnit(): UnitNotation;
}
