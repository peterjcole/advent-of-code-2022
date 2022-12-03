export const part1 = (input) => {
  return input
    .split('\n')
    .map((round) => round.split(' '))
    .reduce(scoreReducer, 0)
}

export const part2 = (input) => {
  return input
    .split('\n')
    .map((round) => round.split(' '))
    .map(([opponent, player]) => {
      const playerMove = {
        A: {
          X: 'Z',
          Y: 'X',
          Z: 'Y',
        },
        B: {
          X: 'X',
          Y: 'Y',
          Z: 'Z',
        },
        C: {
          X: 'Y',
          Y: 'Z',
          Z: 'X',
        },
      }[opponent][player]
      return [opponent, playerMove]
    })
    .reduce(scoreReducer, 0)
}

const scoreReducer = (totalScore, [opponent, player]) => {
  const shapeScore = {
    X: 1,
    Y: 2,
    Z: 3,
  }[player]

  const lose = 0
  const draw = 3
  const win = 6

  const playerOutcomeScore = {
    A: {
      X: draw,
      Y: win,
      Z: lose,
    },
    B: {
      X: lose,
      Y: draw,
      Z: win,
    },
    C: {
      X: win,
      Y: lose,
      Z: draw,
    },
  }[opponent][player]

  return totalScore + shapeScore + playerOutcomeScore
}
