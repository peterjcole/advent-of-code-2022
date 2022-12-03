import { part1, part2 } from './day2'

export const day2Example = `A Y
B X
C Z`

describe('day2', () => {
  it('calculates the calories carried by the elf with the most calories', () => {
    expect(part1(day2Example)).toBe(15)
  })

  it('calculates the actual score', () => {
    expect(part2(day2Example)).toBe(12)
  })
})
