import { Keyboard } from './Keyboard';
import { Textarea } from './CreateTextarea';
// import { change } from './utils/changeLanguages'
import { Key } from './Key'
import { EventListeners } from './EventListeners'
import { set } from '../utils/storage';
import { getLanguageKeys } from '../utils/changeLanguages';

export class Main {

  render() {
    const textarea = new Textarea()
    textarea.render()
  
    set('lang', 'en')
    // this.lang = localStorage.setItem('lang') === 'ru' ? 'ru' : 'en' // потом прокидываем в Keyboard
    const keyboard = new Keyboard(getLanguageKeys())
    keyboard.render()
  
    const eventListeners = new EventListeners()
    eventListeners.isListenersOn()
  
    const pressKey = new Key()
    pressKey.pressKey()
  }
}