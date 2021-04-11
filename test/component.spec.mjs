import { JSDOM } from 'jsdom'
import test from 'ava'

test.before(t => {
    const dom = new JSDOM('<!DOCTYPE html><html><head></head><body></body></html>')
    globalThis.window = dom.window
    globalThis.document = dom.window.document
    globalThis.customElements = window.customElements
    globalThis.HTMLElement = window.HTMLElement
})

test('render basic component', async t => {
    await import('../src/component.mjs')
    const document = globalThis.document
    const basicComp = document.createElement('basic-comp')
    document.body.appendChild(basicComp)
    t.is(document.querySelector('basic-comp p').textContent, 'Basic component')
})
