export const part1 = (input: string): string => {
  const chars = input.split('')
  return findMarker(chars, 4)
}

export const part2 = (input: string): string => {
  const chars = input.split('')
  return findMarker(chars, 14)
}

const findMarker = (chars: string[], sequenceLength: number) =>
  chars.reduce((markerIndex, char, index) => {
    if (markerIndex) {
      return markerIndex
    }

    const endIndex = index + sequenceLength

    return new Set(chars.slice(index, endIndex)).size === sequenceLength
      ? endIndex.toString()
      : null
  }, null)
