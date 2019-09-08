/**
 * @Author: Rostislav Simonik <rostislav.simonik@technologystudio.sk>
 * @Date: 2019-09-07T15:09:69+02:00
 * @Copyright: Technology Studio
 * @flow
**/

import type { LiteralMap } from '@txo/flow'
export type Bar = {
  a: boolean,
  b: LiteralMap<string, string>,
}

export const foo = (bar: Bar): number => {
  return 10
}
