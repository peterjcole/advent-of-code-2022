import { part1, part2 } from './day4'

const day4Example = `2-4,6-8
2-3,4-5
5-7,7-9
2-8,3-7
6-6,4-6
2-6,4-8`

const expectedPart1Result = '2'

const expectedPart2Result = '4'

describe('day4', () => {
  it('works for part 1', () => {
    expect(part1(day4Example)).toBe(expectedPart1Result)
  })

  it('works for part 2', () => {
    expect(part2(day4Example)).toBe(expectedPart2Result)
  })
})
