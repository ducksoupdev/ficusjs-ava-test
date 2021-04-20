import test from 'ava'
import { init, render } from '@ficusjs/testing'

test.before(init)

test('render basic component', async t => {
    const comp = await render('basic-comp', () => import('../src/component.mjs'))
    t.is(comp.querySelector('p').textContent, 'Basic component')
})
