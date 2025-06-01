import { useState } from "react";
import AddTask from "./components/AddTask";
import Tasks from "./components/Tasks";
import { TableCellsSplit } from "lucide-react";
import { v4 } from "uuid";

function App() {
  const [tasks, setTasks] = useState([
    {
      id: 1,
      title: "Estudar programação",
      description: "Estudar programação para se tornar um foda",
      isCompleted: false,
    },
    {
      id: 2,
      title: "Estudar Portugues",
      description: "Estudar Portugues para se tornar um foda",
      isCompleted: false,
    },
    {
      id: 3,
      title: "Estudar Biologia",
      description: "Estudar Biologia para se tornar um foda",
      isCompleted: false,
    },
  ]);

  function onTaskClick(taskId) {
    const newTasks = tasks.map((task) => {
      if (task.id === taskId) {
        return {
          ...task,
          isCompleted: !task.isCompleted,
        };
      }
      return task;
    });
    setTasks(newTasks)
  }

  function onDeleteTaskClick(taskId) {
    const newTasks = tasks.filter(task => task.id != taskId)
    setTasks(newTasks)
  }

  function onAddTaskSubimit(title, description) {
    const newTasks = {
      id: v4(),
      title,
      description,
      isCompleted: false,

    }
    setTasks([...tasks, newTasks])

  }

  return (
    <div className="w-screen h-screen bg-slate-500 flex justify-center p-6">
      <div className="w-[500px] space-y-4">
        <h1 className="text-3xl text-slate-100 font-bold text-center">
          Gerenciador de Tarefas
        </h1>
        <AddTask onAddTaskSubimit={onAddTaskSubimit}/>
        <Tasks tasks={tasks} onTaskClick={onTaskClick} onDeleteTaskClick={onDeleteTaskClick} />
      </div>
    </div>
  );
}

export default App;
