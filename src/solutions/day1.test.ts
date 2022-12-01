import { exampleInput } from './inputs/day-1-input'
import { calculateCalories, calculateTopThreeCalories } from './day1'

describe('day1', () => {
  it('calculates the calories carried by the elf with the most calories', () => {
    expect(calculateCalories(exampleInput)).toBe(24000)
  })

  it('calculates the calories from the top 3 elves', () => {
    expect(calculateTopThreeCalories(exampleInput)).toBe(45000)
  })
})
