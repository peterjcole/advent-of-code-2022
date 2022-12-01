import { GluegunCommand } from 'gluegun'
import { actualInput } from '../solutions/inputs/day-1-input'
import { calculateCalories, calculateTopThreeCalories } from '../solutions/day1'

const day1: GluegunCommand = {
  name: 'day1',
  run: async (toolbox) => {
    const { print } = toolbox

    print.success('Highest calories: ' + calculateCalories(actualInput))
    print.success(
      'Top 3 calorie total: ' + calculateTopThreeCalories(actualInput)
    )
  },
}

module.exports = day1
