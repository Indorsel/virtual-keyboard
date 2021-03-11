export class Key {
  constructor(value) {
    this.value = value
  }

  writingInTextarea(char) {
    let textarea = document.getElementById('keyboard_input')
    let textArr = Array.from(textarea.textContent)
    let currentCursor = textarea.selectionEnd

    setTimeout(() => {
      textarea.focus()
      textarea.selectionStart = currentCursor
    }, 0)

    switch (char.code) {
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

      case 'AltLeft':
        break;

      case 'AltRight':
        break;

      case 'MetaLeft':
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
        textArr.splice(currentCursor, 0, char.value)
        currentCursor++
        break;
    }
    textarea.textContent = textArr.join('')
  }

  pressKey(){
    this.writingInTextarea(this.value)
  }
}