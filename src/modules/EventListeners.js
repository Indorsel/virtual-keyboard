import { getLanguageKeys } from '../utils/changeLanguages'
import { get, set } from '../utils/storage'
import { Keyboard } from './Keyboard'

export class EventListeners {
  constructor() {}
  
  listeners(){
    document.addEventListener('keydown', function(event) {
      document.querySelector(`#${event.code}`).classList.add('active')
      let textarea = document.getElementById('keyboard_input')
      textarea.innerHTML += event.key
    })

    document.addEventListener('keyup', function(event) {
      document.querySelector(`#${event.code}`).classList.remove('active')
    })

    window.addEventListener('click', function(event) {
      document.getElementById('keyboard_input').focus();
    })


    //добавление класса active кнопкам
    document.querySelector('#keyboard_wrapper').addEventListener('mousedown', function(event) {
      document.querySelector(`#${event.target.id}`).classList.add('active')
      // let textarea = document.getElementById('keyboard_input')
      // textarea.innerHTML += e.key
    })

    document.querySelector('#keyboard_wrapper').addEventListener('mouseup', function(event) {
      document.querySelector(`#${event.target.id}`).classList.remove('active')
    })


    //переключение языка
    document.addEventListener('keydown', function(event) {
      if ((event.shiftKey || event.ctrlKey) && event.altKey) {
        if (get('lang') === 'en') {
          set('lang', 'ru')
        } else {
          set('lang', 'en')
        }
        let keyboard = new Keyboard(getLanguageKeys())
        keyboard.render()
      }
    })

    // window.addEventListener('keyup', function() {
    //   document.getElementById().classList.remove('active')
    // })

    // document.addEventListener('keydown', function(event) {
    //   if (event.code == 'KeyZ' && (event.ctrlKey || event.metaKey)) {
    //     alert('Отменить!')
    //   }
    // });

    // document.addEventListener('keydown', function(event) {
    //   if (event.code == 'KeyC' && (event.ctrlKey || event.metaKey)) {
    //     alert('Скопировать!')
    //   }
    // });

    // document.addEventListener('keydown', function(event) {
    //   if (event.code == 'KeyV' && (event.ctrlKey || event.metaKey)) {
    //     alert('Вставить!')
    //   }
    // });

    // document.addEventListener('keydown', function(event) {
    //   if (event.code == 'KeyA' && (event.ctrlKey || event.metaKey)) {
    //     alert('Выделить всё!')
    //   }
    // });
  }

  isListenersOn() {
    this.listeners()
  }
}