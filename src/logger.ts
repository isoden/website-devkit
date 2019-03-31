'use strict'

type Message = string | number | boolean

const ColorEnum = {
  Red: '\u001b[31m',
  Green: '\u001b[32m',
  White: '\u001b[37m',
  Yellow: '\u001b[33m',
  Reset: '\u001b[0m'
} as const

const prefix = `@isoden/website-devkit: `
const colors = {
  info: (message: Message): string => `${ColorEnum.White}${message}${ColorEnum.Reset}`,
  ok: (message: Message): string => `${ColorEnum.Green}${message}${ColorEnum.Reset}`,
  error: (message: Message): string => `${ColorEnum.Red}${message}${ColorEnum.Reset}`,
  warn: (message: Message): string => `${ColorEnum.Yellow}${message}${ColorEnum.Reset}`,
}

export const log = (message: Message) => console.log(prefix, colors.info(message))
export const ok = (message: Message) => console.log(prefix, colors.ok(message))
export const error = (message: Message) => console.log(prefix, colors.error(message))
export const warn = (message: Message) => console.log(prefix, colors.warn(message))
