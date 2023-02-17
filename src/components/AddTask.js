import "./AddTask.css";
import { useState } from 'react';


let allInputData;

function AddTask(props) {
    const [inputData, setInputData] = useState('');


    // function to handle save click
    const clickHandlerSave = (event) => {
        if (!inputData) {

        } else {
            let newTodo = {
                id: (window.crypto.randomUUID()),
                title: inputData,
                status: false
            };
            setInputData("");
            console.log(newTodo);
            props.onAddTodo(newTodo);
        }
    }

    const clickHandlerClear = (event) => {
        setInputData("");
    }


    return (
        <div className="todoAdd">
            <form>
                <label htmlFor="title">New ToDo</label>
                <input onChange={(e) => setInputData(e.target.value)} type="text" value={inputData} />
            </form>

            {/* <button className="addBtn" onClick={function handleClick() {
                alert('You clicked me!');
            }}>Clear</button> */}
            <div className="btnCtrl">
                <button onClick={clickHandlerClear} type="button">Clear</button>
                <button onClick={clickHandlerSave} type="button">+</button>
            </div>

        </div >

    );
}

export default AddTask;

