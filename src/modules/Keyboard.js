// import { keyCodeFormatter } from '../utils'
// import { pressKey } from "./pressKey";

export class Keyboard {
  constructor(keyList, options) {
    this.keyList = keyList;
    this.options = {
      isShift: false,
      isCapsLock: false,
    };
    this.lang = localStorage.getItem('lang') === 'ru' ? 'ru' : 'en';
  }
  
  isShiftDown() {
    if(document.getElementById().clicked == true) {

    }
  }

  checkKeyboard() {
    if (document.getElementById('keyboard_wrapper')) {
      document.getElementById('keyboard_wrapper').remove()
    }
  }

  generationOfKeyboard(arr){
    const wrapper = this.addKeyboardWrapper()

    let startRowGroup = 1
    arr.forEach(el => {
      if(el.group !== startRowGroup) {
        startRowGroup++ 
        wrapper.innerHTML += '<div class="clearBox">'
      }
      
      const keyboardElement = document.createElement('div')
      keyboardElement.innerText = el.value
      keyboardElement.id = el.code
      // keyboardElement.setAttribute('onclick', `${() => pressKey}`)
      keyboardElement.classList.add('key')
      el.className != 'specialKey' ? el.className : keyboardElement.classList.add('special')
      el.className != 'capsKey' ? el.className : keyboardElement.classList.add('special_3row')
      el.className != 'enter' ? el.className : keyboardElement.classList.add('special_3row')
      el.className != 'spaceKey' ? el.className : keyboardElement.classList.add('space')
      wrapper.append(keyboardElement)
    });
  }

  addKeyboardWrapper(){
    const keyboardWrapper = document.createElement('div');
    keyboardWrapper.id = 'keyboard_wrapper'
    document.body.append(keyboardWrapper);
    return keyboardWrapper;
  }

  render() {
    this.checkKeyboard()
    this.generationOfKeyboard(this.keyList)
  }
}
