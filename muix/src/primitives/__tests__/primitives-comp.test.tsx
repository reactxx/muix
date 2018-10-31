import React, { useState, useContext, memo } from 'react'
import { initPlatform, mount, adjustSnashotSerializer } from "reactxx-tests"
import * as Primitives from 'reactxx-primitives'
import * as PrimitivesN from 'reactxx-primitives-native'
import renderer from 'react-test-renderer'

jest.mock('react-native', () => ({
  Text: props => <text {...props} />, //({ children }) => children,
  View: ({ children }) => children,
  ScrollView: ({ children }) => children,
  Image: ({ children }) => children,
  Animated: {
    Text: ({ children }) => children,
    View: ({ children }) => children,
    ScrollView: ({ children }) => children,
    Image: ({ children }) => children,
    createAnimatedComponent: comp => ({ children }) => children
  },
}))

jest.mock('@expo/vector-icons', () => ({
  MaterialCommunityIcons: props => <svg {...props} />,
}))

const context = React.createContext(1)

const StateComp: React.SFC = memo(props => {
  const [count, setCount] = useState(1)
  const ctx = useContext(context)

  return <div onClick={() => {
    setCount(count + ctx)
  }
  }>{`Count=${count}, ctx=${ctx}`}</div>
})

const ContextComp: React.SFC = memo(props => {
  const [value, setValue] = useState(1)

  return <context.Provider value={value}>
    <StateComp />
    <span onClick={() => {
      setValue(value + 1)
    }
    }>Value={value}</span>
  </context.Provider>

})


describe("PRIMITIVES SIMPLE", () => {
  //it("NATIVE", () => traceTest(false, PrimitivesN))
  it("WEB", () => traceTest(true, Primitives))
})

const traceTest = (isWeb: boolean, prim: typeof Primitives | typeof PrimitivesN) => {
  const component = renderer.create(<ContextComp />)
  // const tree = component.toTree()
  // const treeStr = JSON.stringify(tree, null, 2)
  //expect(tree).toMatchSnapshot()
  expect(component.toJSON()).toMatchSnapshot()
  let onClick = (component.root.findByType('div') as any).props.onClick
  onClick()
  // const json = component.toJSON()
  // const jsonStr = JSON.stringify(json, null, 2)
  expect(component.toJSON()).toMatchSnapshot()

  const onClickSpan = (component.root.findByType('span') as any).props.onClick
  onClickSpan()
  expect(component.toJSON()).toMatchSnapshot()

  onClick = (component.root.findByType('div') as any).props.onClick
  onClick()
  expect(component.toJSON()).toMatchSnapshot()
}

const traceTest_ = (isWeb: boolean, prim: typeof Primitives | typeof PrimitivesN) => {
  initPlatform(isWeb)
  window.__TRACELEVEL__ = 2
  adjustSnashotSerializer()

  let
    wrapper = mount(<prim.Icon>Icon</prim.Icon>)
  expect(wrapper).toMatchSnapshot()
  return

  wrapper = mount(<prim.Text>Text</prim.Text>)
  expect(wrapper).toMatchSnapshot()
  wrapper = mount(<prim.AnimatedText>AnimatedText</prim.AnimatedText>)
  expect(wrapper).toMatchSnapshot()
  wrapper = mount(<prim.View>View</prim.View>)
  expect(wrapper).toMatchSnapshot()
  wrapper = mount(<prim.AnimatedView>AnimatedView</prim.AnimatedView>)
  expect(wrapper).toMatchSnapshot()
  wrapper = mount(<prim.Icon>Icon</prim.Icon>)
  expect(wrapper).toMatchSnapshot()
  wrapper = mount(<prim.AnimatedIcon>AnimatedIcon</prim.AnimatedIcon>)
  expect(wrapper).toMatchSnapshot()
  wrapper = mount(<prim.ScrollView>ScrollView</prim.ScrollView>)
  expect(wrapper).toMatchSnapshot()
}