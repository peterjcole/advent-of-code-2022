import { GluegunCommand } from 'gluegun'

const command: GluegunCommand = {
  name: 'advent-of-code-2022',
  run: async (toolbox) => {
    const { print } = toolbox

    print.info('Welcome to your CLI')
  },
}

module.exports = command
