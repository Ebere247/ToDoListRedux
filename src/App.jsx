import React from "react";
import { Provider } from "react-redux";
import { createStore } from "redux"; 
import AddTask from "./components/AddTask";
import ListTask from "./components/ListTask";
import taskReducer from "./Reducer/taskReducer";

const store = createStore(taskReducer);

function App() {
  return (
    <div className="w-full h-full">
      <Provider store={store}>
        <div className="flex justify-center items-center flex-col gap-5 px-10 py-14 w-[40%] rounded-lg bg-gray-500">
          <h1>ToDo App</h1>
          <AddTask />
          <ListTask />
        </div>
      </Provider>
    </div>
    
  );
}

export default App;
