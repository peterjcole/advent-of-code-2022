import { part1, part2 } from './day7'

const day7Example = `$ cd /
$ ls
dir a
14848514 b.txt
8504156 c.dat
dir d
$ cd a
$ ls
dir e
29116 f
2557 g
62596 h.lst
$ cd e
$ ls
584 i
$ cd ..
$ cd ..
$ cd d
$ ls
4060174 j
8033020 d.log
5626152 d.ext
7214296 k
`

const expectedPart1Result = '95437'

const expectedPart2Result = '24933642'

describe('day7', () => {
  it('works for part 1', () => {
    expect(part1(day7Example)).toBe(expectedPart1Result)
  })

  it('works for part 2', () => {
    expect(part2(day7Example)).toBe(expectedPart2Result)
  })
})
