import React from "react";
import './styles/App.css';
import Investments from './components/Investments';
import ToDoList from "./components/ToDoList";

function App() {

  const [data, setData] = React.useState(null);

  React.useEffect(() => {
    fetch("/api")
      .then((res) => res.json())
      .then((data) => setData(data.message));
  }, []);

  return (
    <div className="App">
      <div className="App-body">
        <ToDoList></ToDoList>
      </div>
    </div>
  );
}

export default App;
