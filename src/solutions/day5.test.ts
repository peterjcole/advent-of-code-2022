import { part1, part2 } from './day5'

const day5Example = `    [D]    
[N] [C]    
[Z] [M] [P]
 1   2   3 
move 1 from 2 to 1
move 3 from 1 to 3
move 2 from 2 to 1
move 1 from 1 to 2`

const expectedPart1Result = 'CMZ'

const expectedPart2Result = 'MCD'

describe('day5', () => {
  it('works for part 1', () => {
    expect(part1(day5Example)).toBe(expectedPart1Result)
  })

  //TODO: remove skip
  it('works for part 2', () => {
    expect(part2(day5Example)).toBe(expectedPart2Result)
  })
})
