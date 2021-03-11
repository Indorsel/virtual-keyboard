import { keyCodesEng } from '../const/keyCodesEng'
import { getCapsKeys, getShiftKeys } from '../utils/keyBindsUtils'
import { get, set } from '../utils/storage'
import { Keyboard } from './Keyboard'

export class EventListeners {
  constructor() {}
  
  listeners(){
    //добавление класса active кнопкам
    let arr = []
    document.addEventListener('keydown', function(event) {
      keyCodesEng.forEach(el => {
        if (el.keyCode == event.keyCode) {
          arr.push(el)
        }})
      if (arr.length !== 0)  {
        document.querySelector(`#${event.code}`).classList.add('active')
      }
    })

    document.addEventListener('keyup', function(event) {
      if (arr.length != 0) {
        document.querySelector(`#${event.code}`).classList.remove('active')
        arr.pop()
      }
    })


    let activeChar //переменная для того же элемента, по которому кликнули, чтобы форма клавиши возвращалась

    document.addEventListener('mousedown', function(event) {
      if(event.target.id != 'keyboard_wrapper' && event.target.id != 'keyboard_input' && event.target.id != '') {
        activeChar = document.querySelector(`#${event.target.id}`)
        document.querySelector(`#${event.target.id}`).classList.add('active')
      }
    })

    document.addEventListener('mouseup', function(event) {
      if (activeChar != undefined) {
        activeChar.classList.remove('active')
      }
    })

    //переключение языка
    document.addEventListener('keydown', function(event) {
      if ((event.shiftKey || event.ctrlKey) && event.altKey) {
        if (get('lang') === 'en') {
          set('lang', 'ru')
        } else {
          set('lang', 'en')
        }

        let keyboard = new Keyboard(getCapsKeys())
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
        // const capsLockOption = get('isCapsLock');
        // set('isCapsLock', !capsLockOption)

        let keyboard = new Keyboard(getCapsKeys())
        keyboard.render()
      }
    })

    let shiftOn = false     // флаг для одного действия shift в keydown 
    //Shift подписка
    document.addEventListener('keydown', function(event) {
      if (shiftOn === false) {
        if (event.code === 'ShiftLeft' || event.code === 'ShiftRight') {
          if (get('isShift') === 'false') {
            set('isShift', 'true')
          } else {
            set('isShift', 'false')
          }
          
          let keyboard = new Keyboard(getShiftKeys())
          keyboard.render()
        }
      }
      shiftOn = true
    })

    //Shift отписка
    document.addEventListener('keyup', function(event) {
      if (event.code === 'ShiftLeft' || event.code === 'ShiftRight') {
        if (get('isShift') === 'false') {
          set('isShift', 'true')
        } else {
          set('isShift', 'false')
        }
        
        let keyboard = new Keyboard(getShiftKeys())
        keyboard.render()
      }
      shiftOn = false
    })

    //переключение языка на Win по клику мышкой
    document.addEventListener('click', function(event) {
      if (event.target.id === 'MetaLeft') {
        if (get('lang') === 'en') {
          set('lang', 'ru')
        } else {
          set('lang', 'en')
        }

        let keyboard = new Keyboard(getShiftKeys())
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