export const part1 = (input: string): string => {
  const monkeys = runMonkeyGame(mapMonkeys(input), 20, BigInt(3))
  return getMonkeyBusiness(monkeys)
}

export const part2 = (input: string): string => {
  //RangeError: Maximum BigInt size exceeded
  const monkeys = runMonkeyGame(mapMonkeys(input), 10000, BigInt(1))
  return getMonkeyBusiness(monkeys)
}

const mapMonkeys = (input: string): Monkey[] =>
  input.split('\n\n').map((monkey) => {
    const lines = monkey.split('\n')
    const items = lines[1]
      .split('Starting items: ')[1]
      .split(', ')
      .map((item) => BigInt(item))
    const operation = lines[2]
      .split('Operation: new = old ')[1]
      .split(' ')
      .map((item) => (Number.parseInt(item) ? BigInt(item) : item)) as Operation
    const test = BigInt(lines[3].split('Test: divisible by ')[1])
    const trueTarget = Number.parseInt(
      lines[4].split('If true: throw to monkey ')[1]
    )
    const falseTarget = Number.parseInt(
      lines[5].split('If false: throw to monkey ')[1]
    )
    const numInspected = 0

    return { items, operation, test, trueTarget, falseTarget, numInspected }
  })

const calculateWorryLevel = (
  oldWorryLevel: bigint,
  [operator, value]: Operation,
  divisor: bigint
) => {
  // console.log({ oldWorryLevel, operator, value, divisor })

  const operand: bigint = value === 'old' ? oldWorryLevel : (value as bigint)

  let newLevel
  switch (operator) {
    case '+': {
      newLevel = oldWorryLevel + operand
      break
    }
    case '-': {
      newLevel = oldWorryLevel - operand
      break
    }
    case '*': {
      newLevel = oldWorryLevel * operand
      break
    }
    case '/': {
      newLevel = oldWorryLevel / operand
      break
    }
  }
  return newLevel / divisor
}

const getMonkeyBusiness = (monkeys: Monkey[]) => {
  const sorted = monkeys.sort((a, b) => b.numInspected - a.numInspected)

  return (sorted[0].numInspected * sorted[1].numInspected).toString()
}

const runMonkeyGame = (monkeys, rounds, divisor) => {
  ;[...Array(rounds)].forEach((_, i) => {
    console.log(`round ${i}`)
    monkeys.forEach((monkey, index) => {
      monkey.items.forEach((item) => {
        const newWorryLevel = calculateWorryLevel(
          item,
          monkey.operation,
          divisor
        )
        const target =
          monkeys[
            newWorryLevel % monkey.test === 0n
              ? monkey.trueTarget
              : monkey.falseTarget
          ]
        target.items.push(newWorryLevel)
        monkey.numInspected = monkey.numInspected + 1
      })
      monkey.items = []
    })
  })
  console.log(monkeys)
  return monkeys
}

type Operation = [string, string | bigint]

type Monkey = {
  items: bigint[]
  operation: Operation
  test: bigint
  trueTarget: number
  falseTarget: number
  numInspected: number
}
