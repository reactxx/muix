import React from 'react'
import ReactN from 'react-native'
import warning from 'warning'

import { AnimationDriver } from 'reactxx-animation' //NATIVE or WEB animation driver
import { TAnimation } from '../typings/animation'

export interface AnimState<T extends TAnimation.Shapes = TAnimation.Shapes> {
  animations?: Animations<T>
  self: React.Component<{}, AnimState<T>>
  refreshCounter: number
}
export interface AnimProps<T extends TAnimation.Shapes = TAnimation.Shapes> {
  $initAnimations: TAnimation.SheetsX<T>
  children: (animations: Animations<T>) => React.ReactNode
}

export class AnimationsComponent<T extends TAnimation.Shapes = TAnimation.Shapes> extends React.Component<AnimProps<T>, AnimState<T>> {

  animations: Animations<T>

  render() {
    const { animations, props: { $initAnimations } } = this
    if (animations) animations.reset()
    delete this.animations
    this.animations = new Animations(this, $initAnimations)
    return this.props.children(this.animations)
  }

}

export class Animations<T extends TAnimation.Shapes = TAnimation.Shapes> implements TAnimation.Drivers<T> {

  constructor(public statefullComponent: React.Component, sheetsDef: TAnimation.SheetsX<T>) {
    if (!sheetsDef) return
    const sheets: any = {}
    for (const p in sheetsDef) {
      if (p.startsWith('$')) continue
      sheets[p] = new AnimationDriver(sheetsDef[p], this)
    }
    this.sheets = sheets
  }
  sheets: { [P in keyof T]: TAnimation.Driver<T[P]> }

  reset(justRunning?: TAnimation.Driver<{}>) {
    for (const p in this.sheets) {
      const driver = this.sheets[p]
      if (!driver.reset || driver === justRunning) continue
      driver.reset()
    }
  }
}

//export const getAnimations = <T extends TAnimation.Shapes>(sheets: TAnimation.SheetsX<T>, statefullComponent: React.Component) => {
//  if (!sheets) return null
//  const drivers: TAnimation.Drivers<T> = {} as any
//  for (const p in sheets) {
//    if (p.startsWith('$')) continue
//    drivers[p] = new AnimationDriver(sheets[p], drivers) as any
//  }
//  drivers.reset = (caller?: TAnimation.Driver<{}>) => {
//    for (const p in drivers) {
//      const driver = drivers[p]
//      if (driver === caller || !driver.reset) continue
//      driver.reset()
//    }
//  }
//  drivers.statefullComponent = statefullComponent
//  return drivers
//}

export abstract class DriverLow<T extends TAnimation.Shape> implements TAnimation.Driver<T> {
  constructor(sheet: TAnimation.SheetX<T>, public animations: Animations) {
    this.opened = !!sheet.$opened
    const { $delay = 0, $duration = 0, $easing = 'ease-in', $opened } = sheet
    this.$config = { $delay, $duration, $easing, $opened }
  }
  $config: TAnimation.AnimationConfig
  opened = false
  set(isOpen: boolean) {
    this.animations.reset(this)
    this.doOpen(isOpen)
  }
  toggle() { this.set(!this.opened) }
  open() { this.set(true) }
  close() { this.set(false) }
  sheet: TAnimation.Sheet<T>
  reset() { }
  abstract doOpen(toOpened: boolean) //platform specific action: forceUpdate for web, Animated.value.setValue for native
}

export const getGaps = (modifier: string, $duration: number) => {
  let leftGap = 0, rightGap = 0
  if (modifier) {
    const mores = modifier.trim().split('-')
    const error = `Expected -<number> | <number>- | <number>-<number> (where number can end with '%' and is in <0..100> interval), but "${modifier}" found`
    warning(mores.length == 2, error)
    const ints = mores.map(m => m ? parseFloat(m.replace('%', '')) / 100 * $duration : 0)
    if (ints[0] === 0) { rightGap = $duration - ints[1] }
    else if (ints[1] === 0) leftGap = ints[0]
    else { leftGap = ints[0]; rightGap = $duration - ints[1] }
    warning(rightGap >= 0 && leftGap >= 0 && rightGap + leftGap < $duration, error)
  }
  const duration = $duration - rightGap - leftGap
  return { leftGap, rightGap, duration }
}