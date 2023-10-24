import React, { useReducer } from 'react';

import TotalDisplay from './components/TotalDisplay';
import CalcButton from './components/CalcButton';
import reducer, { initialState } from './reducers/index';
import { /*ADD_ONE,*/ APPLY_NUMBER, CHANGE_OPERATION, CLEAR_DISPLAY, SAVE_MPLUS, ADD_MEMORYTOTOTAL, CLEAR_MEMORY, screenType, CALCULATE } from './actions/index';


function App() {
  const [calc, dispatchCalc] = useReducer(reducer, initialState);
  console.log("Returned reducer for Calc:", calc);
  //const addOne = () => dispatchCalc({type:ADD_ONE});
  //const applyNumber = (num) => dispatchCalc({ type: APPLY_NUMBER, payload: num })
  const changeOperation = (sign) => dispatchCalc({ type: CHANGE_OPERATION, payload: sign });

  return (
    <div className="App">
      <nav className="navbar navbar-dark bg-dark">
        <span className="navbar-brand"> Reducer Challenge</span>
      </nav>

      <div className="container row mt-5">
        <div className="col-md-12 d-flex justify-content-center">
          <form name="Cal">

            <TotalDisplay value={calc.screen} />
            <div className="row details">
              <span id="operation"><b>Operation:</b> {calc.operation}</span>
              <span id="memory">
                <b>Temp:</b> {calc.temp}
              </span>
              <span id="memory"><b>Memory:</b>{calc.memory}</span>
            </div>

            <div className="row">
              <CalcButton value={"M+"} onClick={() => dispatchCalc({ type: SAVE_MPLUS })} />
              <CalcButton value={"MR"} onClick={() => dispatchCalc({ type: ADD_MEMORYTOTOTAL })} />
              <CalcButton value={"MC"} onClick={() => dispatchCalc({ type: CLEAR_MEMORY })} />
            </div>

            <div className="row">
              <CalcButton value={1} onClick={(e) => dispatchCalc(screenType(e.target.value))} />
              <CalcButton value={2} onClick={(e) => dispatchCalc(screenType(e.target.value))} />
              <CalcButton value={3} onClick={(e) => dispatchCalc(screenType(e.target.value))} />
            </div>

            <div className="row">
              <CalcButton value={4} onClick={(e) => dispatchCalc(screenType(e.target.value))} />
              <CalcButton value={5} onClick={(e) => dispatchCalc(screenType(e.target.value))}/>
              <CalcButton value={6} onClick={(e) => dispatchCalc(screenType(e.target.value))} />
            </div>

            <div className="row">
              <CalcButton value={7} onClick={(e) => dispatchCalc(screenType(e.target.value))} />
              <CalcButton value={8} onClick={(e) => dispatchCalc(screenType(e.target.value))}/>
              <CalcButton value={9} onClick={(e) => dispatchCalc(screenType(e.target.value))}/>
            </div>
            <div className='row'>
              <CalcButton value={"+"} onClick={(e) => { changeOperation(e.target.value) }} />
              <CalcButton value={0} onClick={(e) => dispatchCalc(screenType(e.target.value))}/>
              <CalcButton value={"-"} onClick={(e) => { changeOperation(e.target.value) }} />
            </div>
            <div className="row">
              <CalcButton value={"*"} onClick={(e) => { changeOperation(e.target.value) }} />
              <CalcButton value={"="} onClick={(e) => { changeOperation(e.target.value) }} />
              <CalcButton value={"/"} onClick={(e) => { changeOperation(e.target.value) }} />
            </div>
            <div className="row ce_button">
              <CalcButton value={"CE"} onClick={() => dispatchCalc({ type: CLEAR_DISPLAY })} />
            </div>
          </form>
        </div>
      </div>
    </div>
  );
}

export default App;
