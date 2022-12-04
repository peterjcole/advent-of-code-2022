export const part1 = (input: string): string =>
  input
    .split('\n')
    .reduce((total, pair) => {
      const [elf1, elf2] = pair
        .split(',')
        .map((elf) => elf.split('-').map((num) => Number.parseInt(num)))
      if (
        (elf1[0] <= elf2[0] && elf1[1] >= elf2[1]) ||
        (elf2[0] <= elf1[0] && elf2[1] >= elf1[1])
      ) {
        return total + 1
      }
      return total
    }, 0)
    .toString()

export const part2 = (input: string): string =>
  input
    .split('\n')
    .reduce((total, pair) => {
      const [elf1, elf2] = pair.split(',').map((elf) =>
        elf
          .split('-')
          .map((num) => Number.parseInt(num))
          .sort((a, b) => a - b)
      )
      if (
        (elf1[0] <= elf2[0] && elf1[elf1.length - 1] >= elf2[0]) ||
        (elf2[0] <= elf1[0] && elf2[elf2.length - 1] >= elf1[0])
      ) {
        return total + 1
      }
      return total
    }, 0)
    .toString()
