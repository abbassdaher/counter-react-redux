import React from 'react'
import { Fragment, useState, useCallback, useEffect } from "react";
import { useSelector, useDispatch } from "react-redux";
import "./Counter.css"
function Counter() {
    const golobalState = useSelector((state) => state)
    const dispatch = useDispatch()
    const [counter, setCounter] = useState(0);

    const counterOperations = useCallback((type, payload) => {
        // console.log("run counterOperation");
        dispatch({ type, payload })
    }, [dispatch])

    useEffect(() => {
        counterOperations('increase', 2);
        // console.log("fire");
    }, [counterOperations])

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
        <div className="counterApp">
            <h1>hello redux basic</h1>
            {golobalState.showCounter &&
                <Fragment>
                    <div className="">counter:
                        <span className="counter">{golobalState.value}</span>
                    </div>
                </Fragment>
            }

            <div className="container">

                <button onClick={() => counterOperations('increase', 5)} >increase +</button>
                <button onClick={() => counterOperations('decrease', 1)}>decrease -</button>
                <button onClick={toggleConter}>show content</button>

            </div>
        </div>



    )
}

export default Counter