import { JSDOM } from 'jsdom'
import test from 'ava'

let document
let helpers = {}

test.before(t => {
    const dom = new JSDOM('<!DOCTYPE html><html><head></head><body></body></html>')
    document = dom.window.document
    globalThis.window = dom.window
    globalThis.document = document
    globalThis.customElements = window.customElements
    globalThis.HTMLElement = window.HTMLElement
})

test.beforeEach(async t => {
    if (helpers.createComponent) return
    const { createComponent } = await import('ficusjs')
    const { html, renderer } = await import('@ficusjs/renderers')
    helpers = { createComponent, html, renderer }
})

test('render basic component', t => {
    const { createComponent, html, renderer } = helpers
    const body = document.body
    createComponent('basic-comp', {
        renderer,
        render() {
            return html`<p>Basic component</p>`
        }
    })
    const basicComp = document.createElement('basic-comp')
    body.appendChild(basicComp)
    t.is(document.querySelector('basic-comp p').textContent, 'Basic component')
})
