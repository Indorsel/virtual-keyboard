import { Keyboard } from './Keyboard';
import { Textarea } from './Textarea';
import { Key } from './Key'
import { EventListeners } from './EventListeners'
import { set } from '../utils/storage';
import { getLanguageKeys } from '../utils/keyBindsUtils';


export class Main {
  defaultSettings() {
    set('lang', 'en')                                           //установка начального языка в локал сторадже
    set('isCapsLock', 'false')
    set('isShift', 'false')
  }

  render() {
    const textarea = new Textarea()
    textarea.render()                                           //отрисовка textarea
  
    this.defaultSettings()
    const keyboard = new Keyboard(getLanguageKeys())
    keyboard.render()                                           //рендер клавиатуры
  
    const eventListeners = new EventListeners()
    eventListeners.isListenersOn()                              //отлов событий
  
    const pressKey = new Key()
    pressKey.pressKey()                                          //вывод текста в textarea
  }
}