import React from 'react'
import { Fragment, useState, useCallback, useEffect } from "react";
import { useSelector, useDispatch } from "react-redux";
import "./Counter.css"

import { counterAction } from "../../store/counterSlice"
import { authActions } from '../../store/authSlice';
// const { increase, decrease, toggleConter } = counterAction

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
            {golobalState.auth.logedIn &&
                <Fragment>
                    {golobalState.counter.showCounter &&
                        <Fragment>
                            <div className="">counter:
                                <span className="counter">{golobalState.counter.value}</span>
                            </div>
                        </Fragment>
                    }


                    <div className="CounterContainer">

                        <button onClick={() => dispatch(counterAction.increase(5))} >increase +</button>
                        <button onClick={() => dispatch(counterAction.decrease(2))}>decrease -</button>
                        <button onClick={() => dispatch(counterAction.toggleConter())}>show content</button>

                    </div>
                </Fragment>
            }

            <button className='logedIn' onClick={() => dispatch(authActions.setLogedIn())}>
                {golobalState.auth.logedIn ? 'logOut' : 'logIn'}
            </button>
        </div>



    )
}

export default Counter