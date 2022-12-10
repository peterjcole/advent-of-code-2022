export const part1 = (input: string): string => {
  const commands = parseCommands(input)

  const visitedTailCoords = new Set()
  let headPosition = [0, 0]
  let tailPosition = [0, 0]

  for (const { direction, distance } of commands) {
    ;[...Array(distance)].forEach(() => {
      headPosition = moveHead(headPosition, direction)
      tailPosition = moveTail(headPosition, tailPosition)
      visitedTailCoords.add(JSON.stringify(tailPosition))
    })
  }

  return visitedTailCoords.size.toString()
}

export const part2 = (input: string): string => {
  const commands = parseCommands(input)
  const positions = Array(10).fill([0, 0])
  const visitedTailCoords = new Set()

  for (const { direction, distance } of commands) {
    ;[...Array(distance)].forEach(() => {
      positions.forEach((position, index) => {
        if (index === 0) {
          positions[index] = moveHead(position, direction)
          return
        }

        const newPosition = moveTail(positions[index - 1], position)
        positions[index] = newPosition

        if (index === 9) {
          visitedTailCoords.add(JSON.stringify(newPosition))
        }
      })
    })
  }

  return visitedTailCoords.size.toString()
}

const moveHead = (headPosition, direction) => {
  switch (direction) {
    case 'U': {
      return [headPosition[0], headPosition[1] + 1]
    }
    case 'D': {
      return [headPosition[0], headPosition[1] - 1]
    }
    case 'L': {
      return [headPosition[0] - 1, headPosition[1]]
    }
    case 'R': {
      return [headPosition[0] + 1, headPosition[1]]
    }
  }
}
const moveTail = (headPosition, tailPosition) => {
  const newTail = [...tailPosition]
  const xDiff = headPosition[0] - tailPosition[0] // 2 - 1 = 1
  const yDiff = headPosition[1] - tailPosition[1] // 2 - 0 = 2

  const shouldMoveX =
    (xDiff && (yDiff > 1 || yDiff < -1)) || xDiff > 1 || xDiff < -1
  const shouldMoveY =
    (yDiff && (xDiff > 1 || xDiff < -1)) || yDiff > 1 || yDiff < -1

  if (shouldMoveX) {
    newTail[0] = xDiff > 0 ? tailPosition[0] + 1 : tailPosition[0] - 1
  }

  if (shouldMoveY) {
    newTail[1] = yDiff > 0 ? tailPosition[1] + 1 : tailPosition[1] - 1
  }

  return newTail
}

const parseCommands = (input: string): Command[] =>
  input.split('\n').map((line) => {
    const [direction, distance] = line.split(' ')
    return {
      direction,
      distance: Number.parseInt(distance),
    }
  })

type Command = {
  direction: string
  distance: number
}
