import { GluegunCommand } from 'gluegun'
import { Toolbox } from 'gluegun/build/types/domain/toolbox'
import * as fs from 'fs'

const day: GluegunCommand = {
  name: 'day',
  run: async (toolbox: Toolbox) => {
    const {
      print,
      parameters: { first: dayNumber },
    } = toolbox

    try {
      const { part1, part2 } = await import(`src/solutions/day${dayNumber}.ts`)
      const input = fs.readFileSync(`src/inputs/day${dayNumber}.txt`, 'utf8')

      print.success('Part 1: ' + part1(input))
      part2 && print.success('Part 2: ' + part2(input))
    } catch (e) {
      console.log(e)
      if (e.code === 'ENOENT') {
        print.error(`Missing puzzle input at src/inputs/day${dayNumber}.txt`)
      } else {
        print.error(`Solutions not found at src/solutions/day${dayNumber}.ts`)
      }
    }
  },
}

module.exports = day
