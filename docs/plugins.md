# Plugin guide for advent-of-code-2022

Plugins allow you to add features to advent-of-code-2022, such as commands and
extensions to the `toolbox` object that provides the majority of the functionality
used by advent-of-code-2022.

Creating a advent-of-code-2022 plugin is easy. Just create a repo with two folders:

```
commands/
extensions/
```

A command is a file that looks something like this:

```js
// commands/foo.js

module.exports = {
  run: (toolbox) => {
    const { print, filesystem } = toolbox

    const desktopDirectories = filesystem.subdirectories(`~/Desktop`)
    print.info(desktopDirectories)
  }
}
```

An extension lets you add additional features to the `toolbox`.

```js
// extensions/bar-extension.js

module.exports = (toolbox) => {
  const { print } = toolbox

  toolbox.bar = () => { print.info('Bar!') }
}
```

This is then accessible in your plugin's commands as `toolbox.bar`.

# Loading a plugin

To load a particular plugin (which has to start with `advent-of-code-2022-*`),
install it to your project using `npm install --save-dev advent-of-code-2022-PLUGINNAME`,
and advent-of-code-2022 will pick it up automatically.
