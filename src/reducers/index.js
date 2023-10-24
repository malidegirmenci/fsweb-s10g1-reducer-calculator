import { ADD_ONE, APPLY_NUMBER, CHANGE_OPERATION, CLEAR_DISPLAY, SAVE_MPLUS, ADD_MEMORYTOTOTAL,CLEAR_MEMORY,DIGIT, CALCULATE } from './../actions';

export const initialState = {
  total: 0,
  operation: "+",
  memory: 0,
  screen:"0",
  temp:0,
}

const calculateResult = (num1, num2, operation) => {
  switch (operation) {
    case ("+"):
      return num1 + num2;
    case ("*"):
      return num1 * num2;
    case ("-"):
      return num1 - num2;
    case ("/"):
      return num2 !== 0 ? num1 / num2 : "Error 404";
    default:
      return;
  }
}

const typeDigit = (screen, numKey) => {
  return `${screen}${numKey}`;
}

const reducer = (state, action) => {
  switch (action.type) {
    case (ADD_ONE):
      return ({
        ...state,
        total: state.total + 1
      });

    case (APPLY_NUMBER):
      return ({
        ...state,
        total: calculateResult(state.total, action.payload, state.operation)
      });

    case (CHANGE_OPERATION):
      return ({
        ...state,
        operation: action.payload,
        temp:state.screen,
        screen:0,
      });
    case (CLEAR_DISPLAY):
      return({
        ...state,
        total:0,
        screen:0,
        temp:0,

      })
    case (SAVE_MPLUS):
      return({
        ...state,
        memory:state.total,
      })
    case (ADD_MEMORYTOTOTAL): 
      return ({
        ...state,
        screen: calculateResult(state.screen, state.memory, state.operation),
        total: calculateResult(state.screen, state.memory, state.operation),
      })
    case (CLEAR_MEMORY):
      return({
        ...state,
        memory:0,
      })
    case DIGIT:{
      return{
        ...state,
        screen:state.screen == 0 ? action.payload : typeDigit(state.screen, action.payload),
      }
    }
    case CALCULATE:{
      const calculation = calculateResult(
        state.screen,
        state.temp,
        state.operation
      )
      return {...state, total:calculation, screen:calculation, temp:0}
    }
    default:
      return state;
  }
}

export default reducer;