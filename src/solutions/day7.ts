import { get, set } from 'lodash'

export const part1 = (input: string): string => {
  const tree: Tree = parseTree(input.split('\n'))

  return sumTree(tree)
    .filter((dir) => dir.size < 100000)
    .reduce((total, dir) => total + dir.size, 0)
    .toString()
}

export const part2 = (input: string): string => {
  const tree: Tree = parseTree(input.split('\n'))

  const spaceNeeded = 30000000 - (70000000 - sumChildren(0, tree))

  return sumTree(tree)
    .sort((a, b) => a.size - b.size)
    .find((dir) => dir.size >= spaceNeeded)
    .size.toString()
}

const sumTree = (tree: Tree): Sum[] => {
  if (!tree) {
    return []
  }
  return Object.keys(tree).reduce<Sum[]>((sums, key) => {
    const { children, name, directFileSize }: Directory = tree[key]

    return [
      ...sums,
      { name: name, size: directFileSize + sumChildren(0, children) },
      ...sumTree(children),
    ]
  }, [])
}

const sumChildren = (sum = 0, tree: Tree): number => {
  if (!tree) return sum

  const childSum = Object.keys(tree).reduce((childSum, key) => {
    const directory: Directory = tree[key]
    return (
      childSum + directory.directFileSize + sumChildren(0, directory.children)
    )
  }, 0)

  return sum + childSum
}

const parseTree = (termOutput: string[]): Tree => {
  const currentPath = []
  const root: Directory = {}

  termOutput.forEach((line) => {
    if (line.includes('cd ')) {
      if (line.includes('..')) {
        currentPath.pop()
        currentPath.pop()
      } else {
        const name = getName(line)
        currentPath.push('children', name)
        set(root, currentPath.join('.'), {
          name,
          directFileSize: null,
        })
      }
    } else if (getNumber(line)) {
      const currentObj = get(root, currentPath.join('.'))
      set(root, currentPath.join('.'), {
        ...currentObj,
        directFileSize: currentObj.directFileSize + getNumber(line),
      })
    }
  })
  return root.children
}

const getName = (line) => line.split('$ cd ')[1]

const getNumber = (line) => {
  const matched = line.split(' ')[0].match(/^[0-9]+$/g)
  return matched && parseInt(matched[0])
}

type Directory = {
  name?: string
  directFileSize?: number
  children?: Tree
}

type Tree = {
  [key: string]: Directory
}

type Sum = {
  name: string
  size: number
}
