export const ADD_ONE = "ADD_ONE";

export const APPLY_NUMBER = "APPLY_NUMBER";
export const CHANGE_OPERATION = "CHANGE_OPERATION";
export const CLEAR_DISPLAY = "CLEAR_DISPLAY";
export const SAVE_MPLUS = "SAVE_MPLUS";
export const ADD_MEMORYTOTOTAL = "ADD_MEMORYTOTOTAL"
export const CLEAR_MEMORY = "CLEAR_MEMORY";
export const DIGIT = "DIGIT";
export const CALCULATE = "CALCULATE";

export const addOne = () => {
  return ({ type: ADD_ONE });
}

export const applyNumber = (number) => {
  return ({ type: APPLY_NUMBER, payload: Number(number) });
}

export const changeOperation = (sign) => {
  return ({type:CHANGE_OPERATION, payload:sign})
}

export const clearDisplay = () => {
  return ({type:CLEAR_DISPLAY})
}

export const saveMPLus= () => {
  return ({type:SAVE_MPLUS})
}

export const addMemoryToTotal = () => {
  return ({type:ADD_MEMORYTOTOTAL})
}

export const clearMemory = () => {
  return ({type:CLEAR_MEMORY})
}

export const screenType = (number) => {
  return ({type:DIGIT, payload:number})
}