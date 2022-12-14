import { part1, part2 } from './day12'

const day12Example = `Sabqponm
abcryxxl
accszExk
acctuvwj
abdefghi`

const map = [
  ['S', 'a', 'b', 'q', 'p', 'o', 'n', 'm'], // 0  N DOWN S UP
  ['a', 'b', 'c', 'r', 'y', 'x', 'x', 'l'], // 1
  ['a', 'c', 'c', 's', 'z', 'E', 'x', 'k'], // 2
  ['a', 'c', 'c', 't', 'u', 'v', 'w', 'j'], // 3
  ['a', 'b', 'd', 'e', 'f', 'g', 'h', 'i'], // 4
]

const expectedPart1Result = '31'

const expectedPart2Result = ''

describe('day12', () => {
  it('works for part 1', () => {
    expect(part1(day12Example)).toBe(expectedPart1Result)
  })

  //TODO: remove skip
  it.skip('works for part 2', () => {
    expect(part2(day12Example)).toBe(expectedPart2Result)
  })
})
