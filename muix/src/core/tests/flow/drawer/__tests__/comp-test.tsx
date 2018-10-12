/** @jsx createElement */

import { createElement, atomizeRuleset, toClassNamesWithQuery } from 'reactxx-sheeter'

import { shallow } from 'reactxx-tests'

import Comp from '../comp'

const x = atomizeRuleset({color: 'red'}, null, null)
const y = toClassNamesWithQuery(null, [{color: 'red'}])

describe('Comp 1', () => {
    it('renders correctly', () => {
        const wrapper = shallow(<Comp classNameX={y} />)
        expect(wrapper).toMatchSnapshot()
    })
})

test('Comp 2', () => {
    const wrapper = shallow(<Comp />)
    expect(wrapper).toMatchSnapshot()
})
