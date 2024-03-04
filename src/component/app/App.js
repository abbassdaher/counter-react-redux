import { Fragment, useState, } from "react";
import { useSelector, useDispatch } from "react-redux";
import "./App.css";
import ButtonComponent from "../button/ButtonComponent";

function App() {
  const [counter, setCounter] = useState(0);
  const golobalState = useSelector((state) => state)
  const dispatch = useDispatch()

  const counterOperations = (type , payload)=>{
    dispatch({ type , payload })
  }
  // const increase = () => {
  //   dispatch({ type: 'increase' })
  // }
  // const decrease = () => {
  //   dispatch({ type: 'decrease' })
  // }
  const toggleConter = () => {
    dispatch({ type: 'toggleConter' })
  }

  return (

    <div className="App">
      <h1>hello redux basic</h1>
      {golobalState.showCounter && <Fragment>
        <div className="">counter:
          <span className="counter">{golobalState.value}</span>
        </div>
      </Fragment>}

      <div className="container">

        <button onClick={()=>counterOperations('increase',3)} >increase +</button>
        <button onClick={()=>counterOperations('decrease')}>decrease -</button>
        <button onClick={toggleConter}>show content</button>

      </div>


    </div>
  );
}

export default App;
