import React from "react";
import { ChevronRightIcon, DeleteIcon, Trash2Icon, TrashIcon } from "lucide-react";
import { useNavigate } from "react-router-dom";

const Tasks = ({ tasks, onTaskClick, onDeleteTaskClick }) => {
  const navigate = useNavigate()
  const onSeeDetailsClick = (task) => {
    const query = new URLSearchParams()
    query.set("title", task.title)
    query.set("description", task.description)
    
    navigate(`/task?${query.toString()}`)

  }

  return (
    <ul className="space-y-4 p-6 bg-slate-200 rounded-md shadow">
      {tasks.map((task) => (
        <li key={task.id}
          className="flex gap-2"
        >
          <button
            onClick={() => onTaskClick(task.id)}
            className={`bg-slate-400 text-left text-white p-2 rounded-md w-full ${task.isCompleted && 'line-through'}`}
          >
            {task.title}

          </button>
          <button
            className="bg-slate-400 text-white p-2 rounded-md "
            onClick={() => onSeeDetailsClick(task)}

          >
            <ChevronRightIcon />
          </button>
          <button
            onClick={() => onDeleteTaskClick(task.id)}
            className="bg-slate-400 text-white p-2 rounded-md "
          >
            <TrashIcon />
          </button>
        </li>
      ))}
    </ul>
  );
};

export default Tasks;
