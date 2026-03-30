import React from "react";
import { useDispatch, useSelector } from "react-redux";
import { inc, dec } from "./counterSlice";
function Counter() {
    var x = useSelector((state) => { return state.counterReducer })
    var dispatch = useDispatch()
    // console.log(dispatch)
    console.log(x)
    return (
        <div className="maincounter">
            <div className="counter">
                <h2 style={{position:"relative",bottom:"40px",letterSpacing:"1.4px",fontWeight:"700",fontFamily:"system-ui"}}> Counter:{x.count}</h2>
                <div style={{display:"flex",gap:"1em"}}>
                    <button onClick={() => { dispatch(inc()) }}>Increment</button>
                    <button onClick={() => { dispatch(dec()) }}>Decrement</button>
                </div>
            </div>
        </div>
    )
}
export default Counter