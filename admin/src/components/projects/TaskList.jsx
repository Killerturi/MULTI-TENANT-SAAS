import { useState } from "react";

export default function TaskList() {
    const [tasks, setTasks] = useState([
        { id: 1, title: "Design UI", done: true },
        { id: 2, title: "Setup backend", done: false },
        { id: 3, title: "Integrate API", done: false },
    ]);

    return (
        <div className="bg-white dark:bg-gray-800 p-6 rounded-2xl shadow">
            <h3 className="font-semibold mb-4">Tasks</h3>

            <ul className="space-y-2">
                {tasks.map((task) => (
                    <li
                        key={task.id}
                        className="flex items-center gap-3"
                    >
                        <input type="checkbox" checked={task.done} readOnly />
                        <span className={task.done ? "line-through text-gray-400" : ""}>
                            {task.title}
                        </span>
                    </li>
                ))}
            </ul>
        </div>
    );
}
