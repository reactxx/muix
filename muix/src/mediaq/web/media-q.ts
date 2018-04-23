import warning from 'warning'

import { deepMerges, Types } from 'reactxx-basic'

import { BreakPoint, ComponentsMediaQLow } from '../common/media-q'
import * as MediaQ from '../common/media-q2'

export const processRuleset = (ruleset: MediaQ.RulesetWithAddIn) => {
  const { $mediaq, ...mediaRuleset } = ruleset
  if (!$mediaq) return ruleset //no $mediaq
  for (const p in $mediaq) {
    const interval = p.split('-').map((i, idx) => !i ? (idx == 0 ? 0 : MediaQ.Consts.maxBreakpoint) : parseInt(i))
    warning(interval.length == 2, `E.g. '-480' or '480-1024' or '1024-' expected, ${p} found`)
    mediaRuleset[intervalToSelector(interval[0], interval[1])] = $mediaq[p]
  }
  return mediaRuleset as Types.Ruleset
}



export class ComponentsMediaQ<TState extends string = string> extends ComponentsMediaQLow<TState> {

  /*
    decode $mediaq part of ruleset, e.g.
    {
      margin: 20,
      $mediaq: {
        '-480': { fontSize: '24', color:'blue' },
        '480-1024': { fontSize: '32', color:'red' },
      }
    }
  */
  processRuleset(ruleset: MediaQ.RulesetWithAddIn) {
    const { $mediaq, ...mediaRuleset } = ruleset
    if (!$mediaq) return ruleset //no $mediaq
    for (const p in $mediaq) {
      const interval = p.split('-').map((i, idx) => !i ? (idx == 0 ? 0 : MediaQ.Consts.maxBreakpoint) : parseInt(i))
      warning(interval.length == 2, `E.g. '-480' or '480-1024' or '1024-' expected, ${p} found`)
      mediaRuleset[intervalToSelector(interval[0], interval[1])] = $mediaq[p]
    }
    return mediaRuleset as Types.Ruleset
  }

  createBreakPoint(breakPoint: number) { return new BreakPointWeb(breakPoint) }
  getWindowWidth() { return window.innerWidth }
}


export class BreakPointWeb extends BreakPoint {
  constructor(breakPoint: number) {
    super(breakPoint)
    this.mediaQuery = window.matchMedia(`(min-width: ${breakPoint}px)`)
    this.active = this.mediaQuery.matches
    const onChange = (q: MediaQueryList) => {
      this.active = q.matches
      this.notify()
    }
    this.mediaQuery.addListener(onChange)
  }
  private mediaQuery: MediaQueryList
}

const intervalToSelector = (start: number, end: number) => {
  if (start === 0) return `@media (max-width: ${end - 1}px)`
  if (end === MediaQ.Consts.maxBreakpoint) return `@media (min-width: ${start}px)`
  return `@media (min-width: ${start}px) and (max-width: ${end - 1}px)`
}
