import React from 'react'
import { Fragment, useState, useCallback, useEffect } from "react";
import { useSelector, useDispatch } from "react-redux";
import "./Counter.css"

import { counterAction } from "../../store/index"
const { increase, decrease, toggleConter } = counterAction

function Counter() {
    const golobalState = useSelector((state) => state)
    const dispatch = useDispatch()
    const [counter, setCounter] = useState(0);

    // const counterOperations = useCallback((type, payload) => {
    //     // console.log("run counterOperation");
    //     dispatch({ type, payload })
    // }, [dispatch])

    // useEffect(() => {
    //     counterOperations('increase', 2);
    //     // console.log("fire");
    // }, [counterOperations])

    // const increase = () => {
    //   dispatch({ type: 'increase' })
    // }
    // const decrease = () => {
    //   dispatch({ type: 'decrease' })
    // }

    // const toggleConter = () => {
    //     dispatch({ type: 'toggleConter' })
    // }

    return (
        <div className="counterApp">
            <h1>Redux</h1>
            {golobalState.showCounter &&
                <Fragment>
                    <div className="">counter:
                        <span className="counter">{golobalState.value}</span>
                    </div>
                </Fragment>
            }

            <div className="container">

                <button onClick={() => dispatch(increase(5))} >increase +</button>
                <button onClick={() => dispatch(decrease(2))}>decrease -</button>
                <button onClick={() => dispatch(toggleConter())}>show content</button>

            </div>
        </div>



    )
}

export default Counter