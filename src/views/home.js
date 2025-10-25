 import axios from "axios";
 import { useState } from "react";
 import { useEffect } from "react";
 import { Navigate, useParams} from "react-router-dom";
 import { Task } from "../components/task.js";
 import { TaskForm } from "../components/taskform.js";

 // Define the Home page
 function Home() {
    const [tasks, setTasks] = useState([]);
    const { userId } = useParams();
    // Check if user is authenticated
    const token = localStorage.getItem('token');
    // Redirect to login if not authenticated
    if (!token) {
        Navigate('/login');
    }

    useEffect(() => {
        setTimeout(async () => {
            console.log('Fetching tasks for user:', userId);
            const tasks = await axios.get(`https://prueba-tecnica-to-do-app-0f94617e0f2f.herokuapp.com/task`, {
                headers: {
                    Authorization: `Bearer ${token}`
            }
            }
        );
        console.log('Tasks fetched:', tasks.data.tasks);
        setTasks(tasks.data.tasks);
    }, 1000);
    }, []);

    // Handle task deletion
    const onDelete = async (taskId) => {
        await axios.delete(`https://prueba-tecnica-to-do-app-0f94617e0f2f.herokuapp.com/task/delete/${taskId}`, {
            headers: {
                Authorization: `Bearer ${token}`
            }
        });
        setTasks(tasks.filter(task => task.id !== taskId));
    }

    // Handle task creation
    const onCreate = async (taskData) => {
        try {
        const response = await axios.post('https://prueba-tecnica-to-do-app-0f94617e0f2f.herokuapp.com/task/create', taskData, {
            headers: {
                Authorization: `Bearer ${token}`
            }
        });
        setTasks([...tasks, response.data.task]);
        } catch (error) {
            console.error('Task creation failed:', error);
        }
    }

    // Handle task status change to completed
    const onChangeStatus = async (taskId) => {
        try {
            const response = await axios.patch(`https://prueba-tecnica-to-do-app-0f94617e0f2f.herokuapp.com/task/update/${taskId}`, 
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