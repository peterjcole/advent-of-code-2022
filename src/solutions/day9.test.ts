import { part1, part2 } from './day9'

const day9Example = `R 4
U 4
L 3
D 1
R 4
D 1
L 5
R 2`

const expectedPart1Result = '13'

const expectedPart2Result = '1'

const part2LargerExample = `R 5
U 8
L 8
D 3
R 17
D 10
L 25
U 20`

describe('day9', () => {
  it('works for part 1', () => {
    expect(part1(day9Example)).toBe(expectedPart1Result)
  })

  it('works for part 2', () => {
    expect(part2(day9Example)).toBe(expectedPart2Result)
  })

  it('works for part 2 with larger example', () => {
    expect(part2(part2LargerExample)).toBe('36')
  })
})
