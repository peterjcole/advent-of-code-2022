export const part1 = (input: string): string =>
  input
    .split('\n')
    .map((rucksack) => {
      const middleIndex = rucksack.length / 2
      return [rucksack.slice(0, middleIndex), rucksack.slice(middleIndex)]
    })
    .reduce((commonItems, [compartment1, compartment2]) => {
      return [
        ...commonItems,
        ...compartment2.split('').reduce((commonItems, char) => {
          if (compartment1.includes(char) && !commonItems.includes(char)) {
            return [...commonItems, char]
          }
          return commonItems
        }, []),
      ]
    }, [])
    .reduce((total, char) => total + calculateValue(char), 0)

export const part2 = (input: string): string =>
  input
    .split('\n')
    .reduce((groups, backpack, index) => {
      const group = Math.floor(index / 3)

      if (!groups[group]) {
        groups[group] = []
      }

      groups[group] = [...groups[group], backpack]
      return groups
    }, [])
    .reduce((total, group) => {
      return (
        total +
        calculateValue(
          group[0].split('').reduce((badgeChar, char) => {
            if (group[1].includes(char) && group[2].includes(char)) {
              return char
            }
            return badgeChar
          })
        )
      )
    }, 0)

const calculateValue = (char) =>
  parseInt(char, 36) - 9 + (char === char.toUpperCase() ? 26 : 0)
