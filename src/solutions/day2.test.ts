import { part1, part2 } from './day2'
import { day2Example } from './fixtures'

describe('day2', () => {
  it('calculates the calories carried by the elf with the most calories', () => {
    expect(part1(day2Example)).toBe(15)
  })

  it('calculates the actual score', () => {
    expect(part2(day2Example)).toBe(12)
  })
})
