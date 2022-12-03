---
to: src/solutions/day<%= day %>.test.ts
---
import { part1, part2 } from './day<%= day %>'

const day<%= day %>Example = `<%= example %>`

const expectedPart1Result = '<%= expected %>'

const expectedPart2Result = ''

describe('day<%= day %>', () => {
  it('works for part 1', () => {
    expect(part1(day<%= day %>Example)).toBe(expectedPart1Result)
  })

  //TODO: remove skip
  it.skip('works for part 2', () => {
    expect(part2(day<%= day %>Example)).toBe(expectedPart2Result)
  })
})
