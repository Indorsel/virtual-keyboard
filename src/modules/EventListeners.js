import { Keyboard } from "./Keyboard"

export class EventListeners {
  constructor() {
    // this.events = []
  }

  // listen(e) {
  //   this.events.push(e)
  // }

  // listenOff(e) {
  //   this.events.filter(el => el.type != e.type)
  //   return this.events
  // }
  
  listeners(){
    window.addEventListener('languagechange', function(lang) {
      const keyboard = new Keyboard(lang)
    })

    window.addEventListener('onkeypress', function() {

    })

    window.addEventListener('click', function() {

    })

    window.addEventListener('keydown', function(event) {
      document.getElementById(event).classList.add('active')
    })

    window.addEventListener('keyup', function() {
      document.getElementById().classList.remove('active')
    })

    document.addEventListener('keydown', function(event) {
      if (event.code == 'KeyZ' && (event.ctrlKey || event.metaKey)) {
        alert('Отменить!')
      }
    });

    document.addEventListener('keydown', function(event) {
      if (event.code == 'KeyC' && (event.ctrlKey || event.metaKey)) {
        alert('Скопировать!')
      }
    });

    document.addEventListener('keydown', function(event) {
      if (event.code == 'KeyV' && (event.ctrlKey || event.metaKey)) {
        alert('Вставить!')
      }
    });

    document.addEventListener('keydown', function(event) {
      if (event.code == 'KeyA' && (event.ctrlKey || event.metaKey)) {
        alert('Выделить всё!')
      }
    });
  }

  isListenersOn() {
    this.listeners()
  }
}