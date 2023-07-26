

//===================================

// class Button {
//   id;
//   state = {
//     label: 1,
//   }

//   setState(newState) {
//     this.state = {
//       // spread operator
//       ...this.state,
//       ...newState,
//     }
//     this.render()
//   }

//   constructor(label) {
//     // this.state.label = label
//     this.element = document.createElement('button')

//     this.element.addEventListener('click', () => {
//       this.incrementValue()
//       // this.updateButtonText()
//     })

//     this.render()

//     // this.updateButtonText()
//   }

//   incrementValue() {
//     this.setState({
//       label: this.state.label + 1,
//     })
//   }

//   render() {
//     const html = `
//         ${this.state.label}
//         `

//     this.element.innerHTML = html
//     // let buttonConteiner = document.getElementsByTagName('button')
//     // buttonConteiner.innerHTML = html
//     // this.element = html
//     // document.body.append(html)
//     // add to parent
//     // add listeners
//   }
// }

// export default Button

// import { v4 as uuidv4 } from 'uuid'

// class Button {
//   id = uuidv4()
//   state = {
//     count: 1,
//     container: undefined,
//   }

//   setState(newState) {
//     this.state = {
//       // spread operator
//       ...this.state,
//       ...newState,
//     }
//     this.render()
//   }

//   constructor(container, init) {
//     if (init) {
//       this.state.count = init
//     }
//     if (container) {
//       this.state.container = container
//     }

//     this.render()
//   }

//   incrementValue() {
//     this.setState({
//       count: this.state.count + 1,
//     })
//   }

//   render() {
//     const html = `<button id="${this.id}">
//         ${this.state.count}
//         </button>
//         `

//     this.state.container.innerHTML = html

//     this.element = document.getElementById(this.id)
//     this.element.addEventListener('click', () => {
//       this.incrementValue()
//     })
//   }
// }

// export default Button