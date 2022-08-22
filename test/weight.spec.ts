import { Kilogram, Lbs, Gram } from '../src/units-of-measurement/weight';
describe('Weight', () => {
  it('[kg -> lbs] Can convert correctly', () => {
    const kilogram = new Kilogram(1);
    const lbs = kilogram.convert('lbs');
    expect(lbs).toBe(2.20462);
  });

  it('[kg -> g] Can convert correctly', () => {
    const kilogram = new Kilogram(1);
    const g = kilogram.convert('g');
    expect(g).toBe(1000);
  });

  it('[kg -> kg] Can convert correctly', () => {
    const kilogram = new Kilogram(1);
    const kg = kilogram.convert('kg');
    expect(kg).toBe(1);
  });

  it('[lbs -> kg] Can convert correctly', () => {
    const lbs = new Lbs(1);
    const kilogram = lbs.convert('kg');
    expect(kilogram).toBe(0.453592);
  });

  it('[lbs -> g] Can convert correctly', () => {
    const lbs = new Lbs(1);
    const g = lbs.convert('g');
    expect(g).toBe(453.592);
  });

  it('[lbs -> lbs] Can convert correctly', () => {
    const lbs = new Lbs(1);
    const lbs2 = lbs.convert('lbs');
    expect(lbs2).toBe(1);
  });

  it('[g -> lbs] Can convert correctly', () => {
    const g = new Gram(1);
    const lbs = g.convert('lbs');
    expect(lbs).toBe(0.00220462);
  });

  it('[g -> kg] Can convert correctly', () => {
    const g = new Gram(1);
    const kg = g.convert('kg');
    expect(kg).toBe(0.001);
  });

  it('[g -> g] Can convert correctly', () => {
    const g = new Gram(1);
    const g2 = g.convert('g');
    expect(g2).toBe(1);
  });
});
