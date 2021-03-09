import { Keyboard } from './Keyboard';
import { Textarea } from './CreateTextarea';
// import { change } from './utils/changeLanguages'
import { Key } from './Key'
import { EventListeners } from './EventListeners'
import { set } from '../utils/storage';
import { getLanguageKeys } from '../utils/keyBindsUtils';

export class Main {

  render() {
    const textarea = new Textarea()
    textarea.render()                                           //отрисовка textarea
  
    set('lang', 'en')                                           //установка начального языка в локал сторадже
    set('isCapsLock', 'false')
    set('isShift', 'false')
    const keyboard = new Keyboard(getLanguageKeys())
    keyboard.render()                                           //рендер клавы
  
    const eventListeners = new EventListeners()
    eventListeners.isListenersOn()                              //отлов событий
  
    const pressKey = new Key()
    pressKey.pressKey()                                          //вывод текста в textarea
  }
}