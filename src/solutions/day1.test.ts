import { part1, part2 } from './day1'

export const day1Example = `1000
2000
3000

4000

5000
6000

7000
8000
9000

10000`

describe('day1', () => {
  it('calculates the calories carried by the elf with the most calories', () => {
    expect(part1(day1Example)).toBe(24000)
  })

  it('calculates the calories from the top 3 elves', () => {
    expect(part2(day1Example)).toBe(45000)
  })
})
