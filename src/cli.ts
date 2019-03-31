#!/usr/bin/env node

'use strict'

import spawn from 'cross-spawn'
import * as logger from './logger'

const packageJson = require('../package.json')

const [command, ...args] = process.argv.slice(2)

/**
 * return help text
 */
const help = (): string => `
@isoden/website-devkit [command]

Command:
  help: print this help message.

  version: print command version.

[WIP]
`

/**
 * print help text
 */
const printHelp = (): void => console.log(help())

switch (command) {
  case 'new':
  case 'start':
  case 'build': {
    const result = spawn.sync(`node`, [require.resolve(`./commands/${command}`)], {
      stdio: 'inherit'
    })

    process.exit(result.status)

    break
  }

  case 'help': {
    printHelp()
    process.exit(0)
    break
  }

  case 'version': {
    console.log(packageJson.version)
    process.exit(0)
    break
  }

  default: {
    logger.error(`Unknown command "${command}".`)
    printHelp()

    process.exit(1)
  }
}
