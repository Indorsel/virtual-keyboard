import { keyCodesEng } from "../const/keyCodesEng"

export class Textarea {
  constructor(){
    this.element = document.createElement('textarea')
  }

  createTextarea() {
    const textarea = this.element
    textarea.id = 'keyboard_input'
    document.body.append(textarea)
  }

  render() {
    this.createTextarea()  }
}