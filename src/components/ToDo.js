import "./ToDo.css";
import { useState } from 'react';

function ToDo(props) {
    const [CompltedStatus, setCompltedStatus] = useState(props.status);

    const clickHandler = (event) => {
        if (!CompltedStatus) {
            setCompltedStatus(!CompltedStatus);
        } else {
            console.log("Delete");
        }

    }


    console.log("..", CompltedStatus);

    return (
        <div className={CompltedStatus ? "todo completed" : "todo"}>
            <h3 className="todo-title">{props.title}</h3>
            <div className="statusCtrl">
                <p> Status : {CompltedStatus ? "✔" : "Incompleted"}</p>
                <button onClick={clickHandler}>{CompltedStatus ? "Delete" : "Done"}</button>
            </div>
        </div>

    );
}

export default ToDo;