export class Key {
  constructor() {}

  writingInTextarea() {
    debugger
    window.addEventListener('keydown', function(e) {
      debugger
      if(e.keyCode != '20' || e.keyCode != '16' || e.keyCode != '17' || e.keyCode != '18' ||
         e.keyCode != '91' || e.keyCode != '46' || e.keyCode != '8') {
        debugger
        let textarea = document.getElementById('.keyboard_input')
        textarea.innerText += e.key
      }
    })

    // window.addEventListener('keyup', function(e) {
    //   debugger
    //   if(e.keyCode != '20' || e.keyCode != '16' || e.keyCode != '17' || e.keyCode != '18' ||
    //      e.keyCode != '91' || e.keyCode != '46' || e.keyCode != '8') {
    //     debugger
    //     this.textarea.innerHTML += e.value
    //   }
    // })
  }

  pressKey(){
    this.writingInTextarea()
  }
}