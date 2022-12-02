import { part1, part2 } from './day1'
import { day1Example } from './fixtures'

describe('day1', () => {
  it('calculates the calories carried by the elf with the most calories', () => {
    expect(part1(day1Example)).toBe(24000)
  })

  it('calculates the calories from the top 3 elves', () => {
    expect(part2(day1Example)).toBe(45000)
  })
})
