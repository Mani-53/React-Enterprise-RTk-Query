import React from "react";
import { useDispatch, useSelector } from "react-redux";
import { addtodo, deltodo, updatetodo } from "./todoSlice";
function Todos() {
  var x = useSelector((state) => {
    return state.todoReducer;
  });
  var dispatch = useDispatch();
  var [t, sett] = React.useState("");
  var [e, setE] = React.useState("");
  function add(t) {
    dispatch(addtodo(t));
    sett("");
  }
  function set(e) {
    sett(e.target.value);
  }
  function edit(t) {
    setE(t);
    sett(t);
  }
  return (
    <div>
      <input
        type="text"
        onChange={(e) => {
          set(e);
        }}
        value={t}
      />
      {t && !e && (
        <button
          onClick={() => {
            add(t);
          }}
        >
          Add todo
        </button>
      )}
      {e && (
        <button
          onClick={() => {
            // save(e);
            dispatch(updatetodo(e));
          }}
        >
          save
        </button>
      )}
      <ul>
        {x.todos &&
          x.todos.map((t, i) => {
            return (
              <li key={i}>
                {t}
                <button
                  onClick={() => {
                    dispatch(deltodo(i));
                  }}
                >
                  Delete
                </button>
                <button
                  onClick={() => {
                    edit(t);
                  }}
                >
                  Edit
                </button>
              </li>
            );
          })}
      </ul>
    </div>
  );
}
export default Todos;
