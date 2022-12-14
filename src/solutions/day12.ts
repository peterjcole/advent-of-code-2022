export const part1 = (input: string): string => {
  console.log('This will take forever')
  const map = parseMap(input)
  let destinationCoords
  let startCoords
  map.forEach((row, rowIndex) => {
    const colIndex = row.findIndex((height) => height === 'E')
    if (colIndex >= 0) {
      destinationCoords = [rowIndex, colIndex]
    }
  })

  map.forEach((row, rowIndex) => {
    const colIndex = row.findIndex((height) => height === 'S')
    if (colIndex >= 0) {
      startCoords = [rowIndex, colIndex]
    }
  })

  return getShortestRoute(map, startCoords, destinationCoords).toString()
}

export const part2 = (input: string): string => {
  return null
}

const parseMap = (input) => input.split('\n').map((row) => row.split(''))

const getShortestRoute = (map, startCoords, destinationCoords) => {
  const markers = [{ location: startCoords, visitedCoords: [], steps: 0 }]
  const solutions = []

  while (true) {
    const marker = markers.pop()

    if (!marker) {
      break
    }

    const [x, y] = marker.location
    const visitedCoords = [...marker.visitedCoords, marker.location]
    marker.visitedCoords.push(marker.location)

    // TODO change
    if (JSON.stringify(marker.location) === JSON.stringify(destinationCoords)) {
      console.log(marker)
      solutions.push(marker.steps)
    }

    const directionInfo: DirectionInfo[] = [
      getDirectionInfo({
        newDirection: 'N',
        coords: [x - 1, y],
        currentCoords: [x, y],
        visitedCoords,
        map,
      }),
      getDirectionInfo({
        newDirection: 'E',
        coords: [x, y + 1],
        currentCoords: [x, y],
        visitedCoords,
        map,
      }),
      getDirectionInfo({
        newDirection: 'S',
        coords: [x + 1, y],
        currentCoords: [x, y],
        visitedCoords,
        map,
      }),
      getDirectionInfo({
        newDirection: 'W',
        coords: [x, y - 1],
        currentCoords: [x, y],
        visitedCoords,
        map,
      }),
    ].filter(Boolean)

    directionInfo.forEach(({ coords }) => {
      markers.push({ location: coords, visitedCoords, steps: marker.steps + 1 })
    })
  }
  return solutions.sort((a, b) => a - b)[0].toString()
}
const getShortestRouteRecursive = ({
  steps,
  coords: [x, y],
  destinationCoords,
  map,
  visitedCoords,
}): number => {
  if (map[x][y] === 'E') {
    console.log('hit')
    return 1
  }

  const newVisitedCoords = [...visitedCoords, [x, y]]
  // iterate over each direction
  // TODO: list of visited spots
  // not viable if doesn't exist, is higher, is already visited (need list of visited)
  // if reached E return 1
  // get shortest route on each direction which is viable
  // return steps + 1 on the shortest one I think
  const directionInfo: DirectionInfo[] = [
    getDirectionInfo({
      newDirection: 'N',
      coords: [x - 1, y],
      currentCoords: [x, y],
      visitedCoords: newVisitedCoords,
      map,
    }),
    getDirectionInfo({
      newDirection: 'E',
      coords: [x, y + 1],
      currentCoords: [x, y],
      visitedCoords: newVisitedCoords,
      map,
    }),
    getDirectionInfo({
      newDirection: 'S',
      coords: [x + 1, y],
      currentCoords: [x, y],
      visitedCoords: newVisitedCoords,
      map,
    }),
    getDirectionInfo({
      newDirection: 'W',
      coords: [x, y - 1],
      currentCoords: [x, y],
      visitedCoords,
      map,
    }),
  ].filter(Boolean)
  // console.log({
  //   steps,
  //   coords: [x, y],
  //   destinationCoords,
  //   map,
  //   visitedCoords,
  //   directionInfo,
  // })

  // console.log(directionInfo)

  if (!directionInfo.length) {
    return null
  }

  const fastestSteps = directionInfo
    .map(({ coords }) => {
      return getShortestRouteRecursive({
        steps: 0,
        coords,
        visitedCoords: newVisitedCoords,
        destinationCoords,
        map,
      })
    })
    .filter(Boolean)
    .sort((a, b) => a - b)[0]

  if (!fastestSteps) {
    return null
  }

  return fastestSteps + steps + 1
}

const validCoords = (coords, map) =>
  coords[0] >= 0 &&
  coords[1] >= 0 &&
  coords[0] < map.length &&
  coords[1] < map[0].length

const validElevation = (map, current, destination) => {
  const currentChar = map[current[0]] && map[current[0]][current[1]]
  const destinationChar =
    map[destination[0]] && map[destination[0]][destination[1]]

  const alphabet = 'abcdefghijklmnopqrstuvwxyz'.split('')
  // console.log({ current, destination })

  const currentIndex = alphabet.findIndex((char) => char === currentChar)
  const destinationIndex =
    destinationChar === 'E'
      ? 25
      : alphabet.findIndex((char) => char === destinationChar)
  // console.log('current ' + currentIndex + alphabet[currentIndex])
  // console.log('destination' + destinationIndex + alphabet[currentIndex])

  return (
    destinationIndex <= currentIndex || destinationIndex === currentIndex + 1
  )
}

const getDirectionInfo = ({
  newDirection,
  coords,
  currentCoords,
  visitedCoords,
  map,
}) => {
  // console.log({
  //   coords,
  //   currentCoords,
  //   visitedCoords,
  //   isVisited: isVisited(coords, visitedCoords),
  // })

  return (
    validCoords(coords, map) &&
    !isVisited(coords, visitedCoords) &&
    validElevation(map, currentCoords, coords) && {
      direction: newDirection as Direction,
      coords: coords as Coords,
    }
  )
}

const isVisited = (coords, visitedCoords) =>
  visitedCoords.findIndex(
    (visitedCoord) => JSON.stringify(visitedCoord) === JSON.stringify(coords)
  ) > -1

type Coords = [number, number]

type Direction = 'N' | 'E' | 'S' | 'w'

type DirectionInfo = {
  coords: Coords
  direction: Direction
}
