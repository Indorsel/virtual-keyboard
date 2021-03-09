import { getLanguageKeys } from "../utils/keyBindsUtils";
import { get, set } from '../utils/storage'
import { Keyboard } from './Keyboard'


export class Key {
  constructor() { }

  writingInTextarea() {
    window.addEventListener('keydown', function (e) {
      // debugger
      document.getElementById('keyboard_input').focus();
      let keyValue = getLanguageKeys().find(el => el.code === e.code).value
      let textarea = document.getElementById('keyboard_input')
      e.preventDefault();
      // debugger
      switch (e.keyCode) {
        case 20:       // Caps Lock
          break;

        case 16:      // Shift'ы
          break;

        case 17:
          break;

        case 18:
          break;

        case e.ctrlKey && 65:      // Ctrl'ы + A
          textarea.select()
          break;

        case 91:// Win
          break;

        case 46:// Del

          break;

        case 8:// Backspace
        // debugger
          textarea.innerHTML = textarea.value.substring(0, textarea.value.length - 1)
        break;

        case 13:// Enter
         textarea.innerHTML += '\n'
        break;

        case 9:// Tab
          textarea.innerHTML += '  '
        break;

        default:
          textarea.innerHTML += keyValue
          break;
      }
    })

    document.addEventListener('click', function(e) {
      if(event.target.id != 'keyboard_wrapper' && event.target.id != 'keyboard_input' && event.target.id != '') {
        let keyValue = getLanguageKeys().find(el => el.code === e.target.id).value
        let textarea = document.getElementById('keyboard_input')
        e.preventDefault();
        switch (e.target.id) {
          case 'CapsLock':
            break;
  
          case 'ShiftLeft':
            break;
            
          case 'ShiftRight':
            break;
  
          case 'ControlLeft':
            if (e.target.code == 'KeyA' && e.target.code == 'Ctrl') {
              textarea.select()
            }
            break;

          case 'ControlRight':
            if (e.target.code == 'KeyA' && e.target.code == 'Ctrl') {
              textarea.select()
            }
            break;
  
          case 'MetaLeft':
            break;

          case 'AltLeft':
            break;

          case 'AltRight':
            break;
  
          case 'Delete':
            textarea.
            break;
  
          case 'Backspace':
            textarea.innerHTML = textarea.value.substring(0, textarea.value.length - 1)
          break;
  
          case 'Enter':
            textarea.innerHTML += '\n'
          break;
  
          case 'Tab':
            textarea.innerHTML += '  '
          break;
  
          default:
            textarea.innerHTML += keyValue
            break;
        }
      }
    })
  }

  pressKey(){
    this.writingInTextarea()
  }
}