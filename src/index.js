import { keyCodesEng } from './const/keyCodesEng';
import { keyCodesRu } from './const/keyCodesRu';
import { Keyboard } from './modules/Keyboard';
import { Textarea } from './modules/CreateTextarea';
// import { change } from './utils/changeLanguages'
import { Key } from './modules/Key'
import { EventListeners } from './modules/EventListeners'
import './index.less'

const textarea = new Textarea()
textarea.render()

const keyboard = new Keyboard(keyCodesEng)
keyboard.render()

// const eventListeners = new EventListeners()
// eventListeners.isListenersOn()

const pressKey = new Key()
pressKey.pressKey()