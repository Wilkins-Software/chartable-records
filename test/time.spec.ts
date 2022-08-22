import { Hours } from '../src/units-of-measurement/time/hours/hours';
import { Minutes } from '../src/units-of-measurement/time/minutes/minutes';
describe('Time', () => {
  it('[mins -> mins] Can convert correctly', () => {
    const mins = new Minutes(1);
    const mins2 = mins.convert().toMinutes();
    expect(mins2).toBe(1);
  }),
    it('[mins -> hours] Can convert correctly', () => {
      const mins = new Minutes(1);
      const hours = mins.convert().toHours();
      expect(hours).toBe(0);
    }),
    it('[mins -> days] Can convert correctly', () => {
      const mins = new Minutes(1);
      const days = mins.convert().toDays();
      expect(days).toBe(0);
    }),
    it('[mins -> weeks] Can convert correctly', () => {
      const mins = new Minutes(1);
      const weeks = mins.convert().toWeeks();
      expect(weeks).toBe(0);
    }),
    it('[hours -> mins] Can convert correctly', () => {
      const hours = new Hours(1);
      const mins = hours.convert().toMinutes();
      expect(mins).toBe(60);
    }),
    it('[hours -> hours] Can convert correctly', () => {
      const hours = new Hours(1);
      const hours2 = hours.convert().toHours();
      expect(hours2).toBe(1);
    }),
    it('[hours -> days] Can convert correctly', () => {
      const hours = new Hours(1);
      const days = hours.convert().toDays();
      expect(days).toBe(0);
    });
});
