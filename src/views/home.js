 import axios from "axios";
 import { useState } from "react";
 import { useEffect } from "react";
 import { Navigate, useParams} from "react-router-dom";
 import { Task } from "../components/task.js";
 import { TaskForm } from "../components/taskform.js";

 function Home() {
    const [tasks, setTasks] = useState([]);
    const { userId } = useParams();
    const token = localStorage.getItem('token');
    if (!token) {
        Navigate('/login');
    }

    useEffect(() => {
        setTimeout(async () => {
            console.log('Fetching tasks for user:', userId);
            const tasks = await axios.get(`http://localhost:3001/task`, {
                headers: {
                    Authorization: `Bearer ${token}`
            }
            }
        );
        console.log('Tasks fetched:', tasks.data.tasks);
        setTasks(tasks.data.tasks);
    }, 2000);
    }, []);

    const onDelete = async (taskId) => {
        await axios.delete(`http://localhost:3001/task/delete/${taskId}`, {
            headers: {
                Authorization: `Bearer ${token}`
            }
        });
        setTasks(tasks.filter(task => task.id !== taskId));
    }

    const onCreate = async (taskData) => {
        try {
        const response = await axios.post('http://localhost:3001/task/create', taskData, {
            headers: {
                Authorization: `Bearer ${token}`
            }
        });
        //console.log('Task created:', response.data);
        setTasks([...tasks, response.data.task]);
        } catch (error) {
            console.error('Task creation failed:', error);
        }
    }

    const onChangeStatus = async (taskId) => {
        try {
            const response = await axios.patch(`http://localhost:3001/task/update/${taskId}`, 
            { completed: true }, {
                headers: {
                    Authorization: `Bearer ${token}`
                }
            });
            setTasks(tasks.map(task => task.id === taskId ? { ...task, status: true } : task));
        } catch (error) {
            console.error('Status update failed:', error);
        }
    }

   return (
    <div className="admin-container">
        <h1 className="admin-title">Task list</h1>
        <div className="admin-content">
            <div className="form-section">
                <TaskForm onCreate={onCreate} />
            </div>
            <div className="tasks-section">
                {tasks.map(task => (
                    <Task
                        key={task.id}
                        title={task.title}
                        description={task.description}
                        status={task.status}
                        onDelete={() => onDelete(task.id)}
                        onChangeStatus={() => onChangeStatus(task.id)}
                    />
                ))}
            </div>
        </div>
    </div>
   );
 }
 
 export { Home };