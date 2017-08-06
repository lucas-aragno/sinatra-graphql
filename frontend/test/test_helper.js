import { JSDOM } from 'jsdom'
import chai from 'chai'
import chaiEnzyme from 'chai-enzyme'
import sinonChai from 'sinon-chai'

const doc = new JSDOM('<!doctype html><html><body></body></html>')
const win = doc.window

global.document = doc
global.window = win
global.__DEV__ = false

Object.keys(window).forEach((key) => {
  if (!(key in global)) {
    global[key] = window[key]
  }
})

chai.use(chaiEnzyme())
chai.use(sinonChai)
