export class Keyboard {
  constructor(keyList) {
    this.keyList = keyList;
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
      keyboardElement.classList.add('key')

      el.className != 'specialKey' ? el.className : keyboardElement.classList.add('special')
      el.className != 'capsKey' ? el.className : keyboardElement.classList.add('special_3row')
      el.className != 'enter' ? el.className : keyboardElement.classList.add('special_3row')
      el.className != 'spaceKey' ? el.className : keyboardElement.classList.add('space')
      el.className != 'shift' ? el.className : keyboardElement.classList.add('shift')

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
