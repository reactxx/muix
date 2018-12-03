import Fela from 'reactxx-fela'
import { assignPlatform, platform } from 'reactxx-sheeter'
import { TEngine } from 'reactxx-typings'
import { setActWidth } from './queryable/$widths/store'

export const init = () => {
  Fela.initFela$Web(platform)

  platform._sheeter.widthDirs = new Set()

  assignPlatform({
    actWidth: () => window.innerWidth || 0,

    addBreakpoint: (width: number) => {
      const { _sheeter: { widthDirs } } = platform
      if (!width || widthDirs.has(width)) return
      widthDirs.add(width)
      const mediaQuery = window.matchMedia(`(min-width: ${width}px)`)
      mediaQuery.addListener(onWidthChanged)
    },

    toPlatformAtomizeRuleset: platform.renderer.renderRuleEx,
    applyLastwinsStrategy,
    finalizeClassName: platform.renderer.finalizeClassName,
  })
}

const onWidthChanged = () => {
  const { _sheeter: s } = platform
  if (s.widthsTimer) return
  s.widthsTimer = window.setTimeout(() => {
    s.widthsTimer = 0
    setActWidth(window.innerWidth)
  }, 1)
}

// apply LAST WIN strategy for web className
const applyLastwinsStrategy: TEngine.ApplyLastwinsStrategy = (values: TEngine.AtomicWebs[]) => {

  if (!values) return null
  const { renderer } = platform
  const res: { items?: TEngine.AtomicWebLows } = {}

  for (let i = values.length - 1; i >= 0; i--) {
    const valuesi = values[i]
    if (!valuesi) continue
    for (let k = valuesi.length - 1; k >= 0; k--)
      renderer.lastWin(valuesi[k], res)
  }

  return res.items as TEngine.AtomicLow
}
