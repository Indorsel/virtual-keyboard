import { getLanguageKeys, getCapsKeys, getShiftKeys } from '../utils/keyBindsUtils'
import { get, set } from '../utils/storage'
import { Keyboard } from './Keyboard'

export class EventListeners {
  constructor() {}
  
  listeners(){
    //добавление класса active кнопкам

    document.addEventListener('keydown', function(event) {
      // debugger
      document.querySelector(`#${event.code}`).classList.add('active')
    })

    document.addEventListener('keyup', function(event) {
      document.querySelector(`#${event.code}`).classList.remove('active')
    })

    document.addEventListener('mousedown', function(event) {
      if(event.target.id != 'keyboard_wrapper' && event.target.id != 'keyboard_input' && event.target.id != '') {
        document.querySelector(`#${event.target.id}`).classList.add('active')
      }
    })

    document.addEventListener('mouseup', function(event) {
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

    //CapsLock
    document.addEventListener('keydown', function(event) {
      if (event.code === 'CapsLock') {
        if (get('isCapsLock') === 'false') {
          set('isCapsLock', 'true')
        } else {
          set('isCapsLock', 'false')
        }

        let keyboard = new Keyboard(getCapsKeys())
        keyboard.render()
      }
    })

    //Shift подписка
    document.addEventListener('keydown', function(event) {
      if (event.code === 'ShiftLeft' || event.code === 'ShiftRight') {
        // debugger
        if (get('isShift') === 'false') {
          set('isShift', 'true')
        } else {
          set('isShift', 'false')
        }
        
        let keyboard = new Keyboard(getShiftKeys())
        keyboard.render()
      }
    })

    //Shift отписка
    document.addEventListener('keyup', function(event) {
      if (event.code === 'ShiftLeft' || event.code === 'ShiftRight') {
        // debugger
        if (get('isShift') === 'false') {
          set('isShift', 'true')
        } else {
          set('isShift', 'false')
        }
        
        let keyboard = new Keyboard(getShiftKeys())
        keyboard.render()
      }
    })

    //переключение на Win по клику мышкой
    document.addEventListener('click', function(event) {
      if (event.target.id === 'MetaLeft') {
        if (get('lang') === 'en') {
          set('lang', 'ru')
        } else {
          set('lang', 'en')
        }
        let keyboard = new Keyboard(getLanguageKeys())
        keyboard.render()
      }

      //CapsLock
      if (event.target.id === 'CapsLock') {
        if (get('isCapsLock') === 'false') {
          set('isCapsLock', 'true')
        } else {
          set('isCapsLock', 'false')
        }
        let keyboard = new Keyboard(getCapsKeys())
        keyboard.render()
      }

      //Shift
      if (event.target.id === 'ShiftLeft' || event.target.id === 'ShiftRight') {
        if (get('isShift') === 'false') {
          set('isShift', 'true')
        } else {
          set('isShift', 'false')
        }
        
        let keyboard = new Keyboard(getShiftKeys())
        keyboard.render()
      }
    })
  }

  isListenersOn() {
    this.listeners()
  }
}