export const part1 = (input: string): string => {
  const stacks = getStacks(input)
  const instructions = getInstructions(input)
  return getTopCrates(instructions, stacks, true)
}

export const part2 = (input: string): string => {
  const stacks = getStacks(input)
  const instructions = getInstructions(input)
  return getTopCrates(instructions, stacks, false)
}

const getStacks = (input: string): string[][] =>
  input
    .split('\n')
    .map(
      (row) =>
        row.includes('[') &&
        row.match(/.{1,4}/g).map((crate) => crate.trim()[1])
    )
    .filter(Boolean)
    .reduce<string[][]>(
      (columns, row) =>
        row.map((item, i) => row[i] && (columns[i] || []).concat(row[i])),
      []
    )

const getInstructions = (input: string) =>
  input
    .split('\n')
    .map(
      (row) =>
        row.includes('move') &&
        row
          .split(/move | from | to /g)
          .filter(Boolean)
          .map((num) => Number.parseInt(num))
    )
    .filter(Boolean)

const getTopCrates = (
  instructions: number[][],
  stacks: string[][],
  reverse: boolean
) =>
  instructions
    .reduce(
      (newStacks: string[][], [numToMove, fromStack, toStack]) => {
        const [from, to] = [fromStack - 1, toStack - 1]
        const newFromColumn = newStacks[from].slice(numToMove)
        const pickedCrates = newStacks[from].slice(0, numToMove)
        const newToColumn = [
          ...(reverse ? pickedCrates.reverse() : pickedCrates),
          ...newStacks[to],
        ]
        newStacks[from] = newFromColumn
        newStacks[to] = newToColumn
        return newStacks
      },
      [...stacks]
    )
    .map((column) => column[0])
    .join('')
