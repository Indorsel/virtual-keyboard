import { keyCodesEng } from "../const/keyCodesEng";
import { keyCodesRu } from "../const/keyCodesRu";
import { get } from "./storage";


export const getLanguageKeys = () => {
  if (get('lang') === 'en') {
    return keyCodesEng
  } else {
    return keyCodesRu
  }
}


export const getCapsKeys = () => {
  let capsArr
  if (get('lang') === 'en') {
    capsArr = keyCodesEng
  } else {
    capsArr = keyCodesRu
  }
  capsArr.forEach(el => {
    if (get('isCapsLock') === 'true') {
      if (el.code.includes('Key') === true || (get('lang') === 'ru' && (el.code === 'BracketLeft' || 
      el.code === 'BracketRight' || el.code === 'Semicolon' || el.code === 'Quote' || 
      el.code === 'Comma' || el.code === 'Period' || el.code === 'Backquote'))) {
        el.value = el.value.toUpperCase()
      } 
      return el
    } else {
      if (el.code.includes('Key') === true || (get('lang') === 'ru' && (el.code === 'BracketLeft' || 
      el.code === 'BracketRight' || el.code === 'Semicolon' || el.code === 'Quote' || 
      el.code === 'Comma' || el.code === 'Period' || el.code === 'Backquote'))) {
        el.value = el.value.toLowerCase()
      }
      return el
    }
  })
  return capsArr
}


export const getShiftKeys = () => {
  let shiftArr
  if (get('lang') === 'en') {
    shiftArr = keyCodesEng
  } else {
    shiftArr = keyCodesRu
  }
  shiftArr.forEach(el => {
    if (get('isCapsLock') === 'true') {
      if (get('isShift') === 'true') {
        if (el.code.includes('Key') === true || (get('lang') === 'ru' && (el.code === 'BracketLeft' || 
        el.code === 'BracketRight' || el.code === 'Semicolon' || el.code === 'Quote' || 
        el.code === 'Comma' || el.code === 'Period' || el.code === 'Backquote'))) {
          el.value = el.value.toLowerCase()
        } else {
          [el.value, el.isShift] = [el.isShift, el.value]
        }
        return el
      } else {
        if (el.code.includes('Key') === true || (get('lang') === 'ru' && (el.code === 'BracketLeft' || 
        el.code === 'BracketRight' || el.code === 'Semicolon' || el.code === 'Quote' || 
        el.code === 'Comma' || el.code === 'Period' || el.code === 'Backquote'))) {
          el.value = el.value.toUpperCase()
        } else {
          [el.value, el.isShift] = [el.isShift, el.value]
        }
        return el
      }
    } else {
      if (get('isShift') === 'true') {
        if (el.code.includes('Key') === true || (get('lang') === 'ru' && (el.code === 'BracketLeft' || 
        el.code === 'BracketRight' || el.code === 'Semicolon' || el.code === 'Quote' || 
        el.code === 'Comma' || el.code === 'Period' || el.code === 'Backquote'))) {
          el.value = el.value.toUpperCase()
        } else {
          [el.value, el.isShift] = [el.isShift, el.value]
        }
        return el
      } else {
        if (el.code.includes('Key') === true || (get('lang') === 'ru' && (el.code === 'BracketLeft' || 
        el.code === 'BracketRight' || el.code === 'Semicolon' || el.code === 'Quote' || 
        el.code === 'Comma' || el.code === 'Period' || el.code === 'Backquote'))) {
          el.value = el.value.toLowerCase()
        } else {
          [el.value, el.isShift] = [el.isShift, el.value]
        }
        return el
      }
    }
  })
  return shiftArr
}


// const setContent = (...parts) => {
//   let textarea = document.getElementById('keyboard_input')
//   textarea.value = parts.join('');
// }

// export const isDelete = () => {
//   let textarea = document.getElementById('keyboard_input')
//   const currentContent = textarea.value
//   const startPosition = textarea.selectionStart
//   const endPosition = textarea.selectionEnd
//   if (startPosition < endPosition) {
//     setContent(
//       currentContent.substr(0, startPosition),
//       currentContent.substr(endPosition, currentContent.length),
//     ) 
//   } else {
//     setContent(
//       currentContent.substr(0, startPosition),
//       currentContent.substr(endPosition + 1, currentContent.length),
//     )
//   }
// }