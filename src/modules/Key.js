import { keyCodesEng } from "../const/keyCodesEng";
import { getLanguageKeys } from "../utils/keyBindsUtils";


export class Key {
  constructor() { }

  writingInTextarea() {
    window.addEventListener('keydown', function (e) {
      let arr
      keyCodesEng.forEach(el => {
        if (el.keyCode == e.keyCode) {
          arr = el
        }})
      if (arr != undefined)  {
        document.getElementById('keyboard_input').focus();
        let keyValue = getLanguageKeys().find(el => el.code === e.code).value
        let textarea = document.getElementById('keyboard_input')
        let textArr = Array.from(textarea.textContent)
        let currentCursor = textarea.selectionEnd
        e.preventDefault();

        
        setTimeout(() => {
          textarea.focus()
          textarea.selectionStart = currentCursor
        }, 0)

        switch (e.keyCode) {
          case 20:       // Caps Lock
            break;
  
          case 16:      // Shift'ы
            break;
  
          case 17:      // Ctrl
            break;
  
          case 18:      // Alt
            break;

          case 91:      // Win
            break;
  
          case 46:      // Del
            if (currentCursor < textArr.length) {
              textArr.splice(currentCursor, 1)
            }
            break;

          case 8:       // Backspace
            if (currentCursor > 0) {
              currentCursor--
              textArr.splice(currentCursor, 1)
            }
            break;
  
          case 13:      // Enter
            textArr.splice(currentCursor, 0, '\n')
            currentCursor++
            break;
  
          case 9:       // Tab
            textArr.splice(currentCursor, 0, '  ')
            currentCursor += 2
            break;
  
          default:
            textArr.splice(currentCursor, 0, keyValue)
            currentCursor++
            break;
        }
      textarea.textContent = textArr.join('')
      }
    })

    document.addEventListener('mousedown', function(e) {
      if(e.target.id != 'keyboard_wrapper' && e.target.id != 'keyboard_input' && e.target.id != '') {
        document.getElementById('keyboard_input').focus();
        let keyValue = getLanguageKeys().find(el => el.code === e.target.id).value
        let textarea = document.getElementById('keyboard_input')
        let textArr = Array.from(textarea.textContent)
        let currentCursor = textarea.selectionEnd
        e.preventDefault();

        setTimeout(() => {
          textarea.focus()
          textarea.selectionStart = currentCursor
        }, 0)

        switch (e.target.id) {
          case 'CapsLock':
            break;
  
          case 'ShiftLeft':
            break;
            
          case 'ShiftRight':
            break;
  
          case 'ControlLeft':
            break;

          case 'ControlRight':
            break;
  
          case 'MetaLeft':
            break;

          case 'AltLeft':
            break;

          case 'AltRight':
            break;
  
          case 'Delete':
            if (currentCursor < textArr.length) {
              textArr.splice(currentCursor, 1)
            }
            break;
  
          case 'Backspace':
            if (currentCursor > 0) {
              currentCursor--
              textArr.splice(currentCursor, 1)
            }
          break;
  
          case 'Enter':
            textArr.splice(currentCursor, 0, '\n')
            currentCursor++
          break;
  
          case 'Tab':
            textArr.splice(currentCursor, 0, '  ')
            currentCursor += 2
          break;
  
          default:
            textArr.splice(currentCursor, 0, keyValue)
            currentCursor++
            break;
        }
        textarea.textContent = textArr.join('')
      }
    })
  }

  pressKey(){
    this.writingInTextarea()
  }
}