import { part1, part2 } from './day8'

const day8Example = `30373
25512
65332
33549
35390`

const expectedPart1Result = '21'

const expectedPart2Result = '8'

describe('day8', () => {
  it('works for part 1', () => {
    expect(part1(day8Example)).toBe(expectedPart1Result)
  })

  it('works for part 2', () => {
    expect(part2(day8Example)).toBe(expectedPart2Result)
  })
})
