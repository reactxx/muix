import * as React from 'react'

import { meta as navigation } from './navigation'
import { meta as responsibleDrawer } from '../responsible-drawer/responsible-drawer'
import { meta as primitives1 } from '../primitives/e1'
import { meta as primitives2 } from '../primitives/e2'
import { meta as primitives3 } from '../primitives/e3'
import { meta as primitives4 } from '../primitives/e4'
import { meta as primitives5 } from '../primitives/e5'
import { meta as primitives6 } from '../primitives/e6'
import { meta as primitives7 } from '../primitives/e7'

export namespace KSink {

  //export const Consts = {
  //  navigationName: 'app/navigation',
  //}

  export interface Example {
    name: string
    title: string
    Component: React.ComponentType
    descr?: string
  }

}

export let navigationExample: KSink.Example

export const primitives: KSink.Example[] = [
  primitives1, primitives2, primitives3, primitives4, primitives5, primitives6, primitives7,
]

export const components: KSink.Example[] = [
  responsibleDrawer,
]

export const examples: KSink.Example[] = [
  navigationExample = navigation,
  ...components,
  ...primitives
]

export const nameToExample = (name: string) => examples.find(e => e.name===name) || navigationExample
export const exampleToElement = (ex: KSink.Example) => (<ex.Component />)

const RootApp: React.SFC = props => {
  const name = (window.location ? window.location.pathname : null) as string
  const example = nameToExample(name)
  return exampleToElement(example)
};

export default RootApp
