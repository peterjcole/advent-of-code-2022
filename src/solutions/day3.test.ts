import { part1, part2 } from './day3'

const day3Example = `vJrwpWtwJgWrhcsFMMfFFhFp
jqHRNqRjqzjGDLGLrsFMfFZSrLrFZsSL
PmmdzqPrVvPwwTWBwg
wMqvLMZHhHMvwLHjbvcjnnSBnvTQFn
ttgJtRGJQctTZtZT
CrZsJsPPZsGzwwsLwLmpwMDw`

const expectedPart1Result = 157

const expectedPart2Result = 70

describe('day3', () => {
  it('works for part 1', () => {
    expect(part1(day3Example)).toBe(expectedPart1Result)
  })

  it('works for part 2', () => {
    expect(part2(day3Example)).toBe(expectedPart2Result)
  })
})
