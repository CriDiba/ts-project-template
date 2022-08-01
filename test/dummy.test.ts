import { expect } from 'chai'
import 'mocha'
import { even } from '../src'

describe('dummy test', () => {
  it('even is even', () => {
    expect(even(0)).to.be.true
  })

  it('odd is not even', () => {
    expect(even(1)).to.be.false
  })
})
