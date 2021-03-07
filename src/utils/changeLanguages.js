import { keyCodesEng } from "../const/keyCodesEng";
import { keyCodesRu } from "../const/keyCodesRu";
import { get } from "./storage";


export const getLanguageKeys = () => {
  if (get('lang') === 'en') {
    console.log('1')
    return keyCodesEng
  } else {
    console.log('2')
    return keyCodesRu
  }
}