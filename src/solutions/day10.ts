export const part1 = (input: string): string => {
  const commands = parseCommands(input)
  let strengthSum = 0
  let cycle = 1
  let xRegister = 1
  let addNext = null

  while (true) {
    if ((cycle - 20) % 40 === 0) {
      strengthSum = strengthSum + cycle * xRegister
    }

    if (addNext) {
      xRegister = xRegister + addNext
      addNext = null
    } else {
      if (!commands.length) {
        break
      }

      const command = commands.shift()

      if (command.operation === 'addx') {
        addNext = command.value
      }
    }

    cycle = cycle + 1
  }
  return strengthSum.toString()
}

export const part2 = (input: string): string => {
  const commands = parseCommands(input)
  let output = ''
  let cycle = 1
  let xRegister = 1
  let addNext = null

  while (true) {
    const lastCycle = !commands.length && !addNext
    if (lastCycle) {
      break
    }

    if (cycle > 1 && cycle % 40 === 1) {
      output = output + '\n'
    }

    const pixel = (cycle - 1) % 40

    if (xRegister >= pixel - 1 && xRegister <= pixel + 1) {
      output = output + '#'
    } else {
      output = output + '.'
    }

    if (addNext) {
      xRegister = xRegister + addNext
      addNext = null
    } else {
      const command = commands.shift()

      if (command.operation === 'addx') {
        addNext = command.value
      }
    }

    cycle = cycle + 1
  }

  return output
}

const parseCommands = (input: string): Command[] =>
  input.split('\n').map((line) => {
    const [operation, value] = line.split(' ')
    return {
      operation,
      value: value && Number.parseInt(value),
    }
  })

type Command = {
  operation: string
  value?: number
}
