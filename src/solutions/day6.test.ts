import { part1, part2 } from './day6'

const examples = [
  `mjqjpqmgbljsphdztnvjfqwrcgsmlb`,
  `bvwbjplbgvbhsrlpgdmjqwftvncz`,
  `nppdvjthqldpwncqszvftbrmjlhg`,
  `nznrnfrfntjfmvfwmzdfjlvtqnbhcprsg`,
  `zcfzfwzzqfrljwzlrfnpqdbhtmscgvjw`,
]

const expectedPart1Results = ['7', '5', '6', '10', '11']

const expectedPart2Results = ['19', '23', '23', '29', '26']

describe('day6', () => {
  it('works for part 1', () => {
    examples.forEach((example, index) => {
      expect(part1(example)).toBe(expectedPart1Results[index])
    })
  })

  it('works for part 2', () => {
    examples.forEach((example, index) => {
      expect(part2(example)).toBe(expectedPart2Results[index])
    })
  })
})
