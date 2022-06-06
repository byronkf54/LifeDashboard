import React from "react";
import $ from 'jquery';

export default function ToDoList() {

    const [data, setData] = React.useState(null);

    React.useEffect(() => {
        fetch("/toDoList")
        .then((res) => res.json())
        .then((data) => setData(data.message));
    }, []);

    return (
        <div id="ToDoListBox">
            <h1 className="module-title">To Do List</h1>
            <ul>
                <li className="ToDoListItem" id="item1">Test ToDo 1</li>
                <li className="ToDoListItem" id="item2">Test ToDo 2</li>
                <li className="ToDoListItem" id="item3">Test ToDo 3</li>
            </ul>            
        </div>
    )
    
};
