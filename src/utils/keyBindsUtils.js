import { keyCodesEng } from "../const/keyCodesEng";
import { keyCodesRu } from "../const/keyCodesRu";
import { notALetterArr } from "../const/notALetterArr";
import { EN, RU } from "../const/languages";
import { get } from "./storage";


export const getLanguageKeys = () => {
  if (get('lang') === EN) {
    return keyCodesEng
  } else {
    return keyCodesRu
  }
}


export const getCapsKeys = () => {
  let capsArr
  if (get('lang') === EN) {
    capsArr = keyCodesEng
  } else {
    capsArr = keyCodesRu
  }
  capsArr.forEach(el => {
    if (get('isCapsLock') === 'true') {
      if (el.code.includes('Key') === true || (get('lang') === RU && notALetterArr.includes(el.code))) {
        el.value = el.value.toUpperCase()
      } 
      return el
    } else {
      if (el.code.includes('Key') === true || (get('lang') === RU && notALetterArr.includes(el.code))) {
        el.value = el.value.toLowerCase()
      }
      return el
    }
  })
  return capsArr
}


export const getShiftKeys = () => {
  let shiftArr
  if (get('lang') === EN) {
    shiftArr = keyCodesEng
  } else {
    shiftArr = keyCodesRu
  }
  shiftArr.forEach(el => {
    if (get('isCapsLock') === 'true') {
      if (get('isShift') === 'true') {
        if (el.code.includes('Key') === true || (get('lang') === RU && notALetterArr.includes(el.code))) {
          el.value = el.value.toLowerCase()
        } else {
          [el.value, el.isShift] = [el.isShift, el.value]
        }
        return el
      } else {
        if (el.code.includes('Key') === true || (get('lang') === RU && notALetterArr.includes(el.code))) {
          el.value = el.value.toUpperCase()
        } else {
          [el.value, el.isShift] = [el.isShift, el.value]
        }
        return el
      }
    } else {
      if (get('isShift') === 'true') {
        if (el.code.includes('Key') === true || (get('lang') === RU && notALetterArr.includes(el.code))) {
          el.value = el.value.toUpperCase()
        } else {
          [el.value, el.isShift] = [el.isShift, el.value]
        }
        return el
      } else {
        if (el.code.includes('Key') === true || (get('lang') === RU && notALetterArr.includes(el.code))) {
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