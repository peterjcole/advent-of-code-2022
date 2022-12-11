import { part1, part2 } from './day11'

const day11Example = `Monkey 0:
  Starting items: 79, 98
  Operation: new = old * 19
  Test: divisible by 23
    If true: throw to monkey 2
    If false: throw to monkey 3

Monkey 1:
  Starting items: 54, 65, 75, 74
  Operation: new = old + 6
  Test: divisible by 19
    If true: throw to monkey 2
    If false: throw to monkey 0

Monkey 2:
  Starting items: 79, 60, 97
  Operation: new = old * old
  Test: divisible by 13
    If true: throw to monkey 1
    If false: throw to monkey 3

Monkey 3:
  Starting items: 74
  Operation: new = old + 3
  Test: divisible by 17
    If true: throw to monkey 0
    If false: throw to monkey 1`

const expectedPart1Result = '10605'

const expectedPart2Result = '2713310158'

describe('day11', () => {
  it('works for part 1', () => {
    expect(part1(day11Example)).toBe(expectedPart1Result)
  })

  it('works for part 2', () => {
    expect(part2(day11Example)).toBe(expectedPart2Result)
  })
})
