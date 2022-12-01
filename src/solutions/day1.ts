export const calculateCalories = (input) => {
  const highestCalories = input
    .split('\n\n')
    .reduce((highestCalories, currentElf) => {
      const calories = currentElf
        .split('\n')
        .reduce((a, b) => Number(a) + Number(b))
      return highestCalories < calories ? calories : highestCalories
    }, 0)
  return highestCalories
}

export const calculateTopThreeCalories = (input) => {
  const elfTotals = input
    .split('\n\n')
    .map((currentElf) =>
      Number(currentElf.split('\n').reduce((a, b) => Number(a) + Number(b)))
    )
    .sort((a, b) => b - a)
  return elfTotals[0] + elfTotals[1] + elfTotals[2]
}
