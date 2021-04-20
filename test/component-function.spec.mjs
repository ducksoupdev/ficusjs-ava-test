import test from 'ava'
import { init, render } from '@ficusjs/testing'
import { createBasicComponent } from '../src/component-function.mjs'

test.before(init)

test('render basic component function', async t => {
    const comp = await render('basic-comp-func', () => {
        return Promise.all([
          import('ficusjs'),
          import('@ficusjs/renderers')
        ])
          .then(([
            { createComponent },
              { html, renderer }
          ]) => createBasicComponent({ createComponent, html, renderer }))
    })
    t.is(comp.querySelector('p').textContent, 'Basic component')
})
