import { createComponent } from 'ficusjs'
import { html, renderer } from '@ficusjs/renderers'

createComponent('basic-comp', {
  renderer,
  render () {
    return html`<p>Basic component</p>`
  }
})
