import { keyCodesEng } from "../const/keyCodesEng";
import { keyCodesRu } from "../const/keyCodesRu";
import { Keyboard } from "../modules/Keyboard";
import './storage'


window.onlanguagechange = function(event) {
  

};

export const lang = () => {
  if(lang === 'en') {
    return keyCodesEng
  } else {
    return keyCodesRu
  }
}

export const change = (lang) => {
  if(lang === 'en') {
    return keyCodesEng
  } else {
    return keyCodesRu
  }
}