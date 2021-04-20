export function createBasicComponent ({ createComponent, html, renderer }) {
  createComponent('basic-comp-func', {
    renderer,
    render () {
      return html`<p>Basic component</p>`
    }
  })
}
