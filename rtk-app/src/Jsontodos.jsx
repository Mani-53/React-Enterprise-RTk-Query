import React from "react";
import { useGetjsontodoQuery, useDeletejsontodoMutation, useAddjsontodoMutation } from "./services/jsontodos/jsontodos";
function Jsontodos() {
    const { data, isLoading } = useGetjsontodoQuery()
    const [del] = useDeletejsontodoMutation()
    const [add] = useAddjsontodoMutation()
    var [todo, setTodo] = React.useState("")
    // console.log(del)
    // console.log(data)
    return (
        <div className="json">
            <div id="secondjson"> 
                <div id="jsoninput">
                    <input type="text" onChange={(e) => { setTodo(e.target.value) }} />
                    <button onClick={() => { add(todo) }}>ADD</button>
                </div>
                {
                    isLoading && <img src="https://cdnl.iconscout.com/lottie/premium/thumb/loading-circle-7008030-5740009.gif" alt="" className="loadingimage" />
                }
                {
                    data && (
                        <ul id="jsonul">
                            {
                                data.map((t, i) => {
                                    return <li key={i}>{t.title}
                                        <button onClick={() => { del(t.id) }}>Delete</button></li>
                                })
                            }
                        </ul>
                    )
                }
            </div>
        </div>
    )
}
export default Jsontodos