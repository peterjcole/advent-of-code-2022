import { unzip } from 'lodash'

export const part1 = (input: string): string => {
  const rows = input
    .split('\n')
    .map((row) => row.split('').map((str) => parseInt(str)))
  const columns = unzip(rows)
  const maxRowIndex = rows.length - 1
  const maxColIndex = columns.length - 1
  return rows
    .reduce((totalVisibleTrees, treeRow, rowIndex) => {
      return (
        totalVisibleTrees +
        treeRow.reduce((rowVisibleTrees, tree, colIndex) => {
          const treeCol = columns[colIndex]

          const isShelteredRow =
            treeRow.findIndex((rowTree) => rowTree >= tree) < colIndex &&
            treeRow.findLastIndex((rowTree) => rowTree >= tree) > colIndex

          const isShelteredCol =
            treeCol.findIndex((rowTree) => rowTree >= tree) < rowIndex &&
            treeCol.findLastIndex((rowTree) => rowTree >= tree) > rowIndex

          const isVisible =
            rowIndex === 0 ||
            rowIndex === maxRowIndex ||
            colIndex === 0 ||
            colIndex === maxColIndex ||
            !isShelteredRow ||
            !isShelteredCol

          return isVisible ? rowVisibleTrees + 1 : rowVisibleTrees
        }, 0)
      )
    }, 0)
    .toString()
}

export const part2 = (input: string): string => {
  const rows = input
    .split('\n')
    .map((row) => row.split('').map((str) => parseInt(str)))
  const columns = unzip(rows)

  return rows
    .reduce((highestScore, treeRow, rowIndex) => {
      const highestForRow = treeRow.reduce(
        (highestRowScore, tree, colIndex) => {
          const treeCol = columns[colIndex]

          const [rowBeforeScore, rowAfterScore] = getScenicScores(
            treeRow,
            colIndex,
            tree
          )
          const [colBeforeScore, colAfterScore] = getScenicScores(
            treeCol,
            rowIndex,
            tree
          )

          const treeScore =
            rowBeforeScore * rowAfterScore * colBeforeScore * colAfterScore

          return treeScore > highestRowScore ? treeScore : highestRowScore
        },
        0
      )

      return highestForRow > highestScore ? highestForRow : highestScore
    }, 0)
    .toString()
}

const getScenicScores = (treeSet, treeIndex, treeValue) => {
  const before = treeSet.slice(0, treeIndex)
  const blockingBeforeIndex = before.findLastIndex(
    (rowTree) => rowTree >= treeValue
  )
  const beforeScore = !before.length
    ? 0
    : blockingBeforeIndex === -1
    ? before.length
    : treeIndex - blockingBeforeIndex

  const after = treeSet.slice(treeIndex + 1)
  const blockingAfterIndex = after.findIndex((rowTree) => rowTree >= treeValue)
  const afterScore = !after.length
    ? 0
    : blockingAfterIndex === -1
    ? after.length
    : blockingAfterIndex + 1

  return [beforeScore, afterScore]
}

// TODO: Pending https://github.com/microsoft/TypeScript/issues/48829
declare global {
  interface Array<T> {
    findLastIndex(
      predicate: (value: T, index: number, obj: T[]) => unknown,
      thisArg?: never
    ): number
  }
}
