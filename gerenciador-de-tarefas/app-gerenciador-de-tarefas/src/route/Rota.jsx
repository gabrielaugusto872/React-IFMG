import {BrowserRouter, Routes, Route, NavLink} from 'react-router-dom';
import TaskList from '../components/TaskList';
import ProjectList from '../components/ProjectList';
import TaskProject from '../components/TaskProject';
import CompletedTasks from '../components/CompletedTasks';
import Stats from '../components/Stats';

import { useState } from 'react';
import { useEffect } from "react";
import { useDispatch } from "react-redux";
import { SET_TASKS, SET_HISTORY } from "../store/TaskSlicer";
import Sobre from '../components/Sobre';

const navLinkStyles = ({isActive}) => ({
    color: isActive ? '#0014c7' : '#007bff' ,
    textDecoration: isActive ? 'none' : 'underline',
    fontWeight: isActive ? 'bold' : 'normal',
    padding: '5px 10px'
})

function Rota(){
    const dispatch = useDispatch();

    useEffect(() => {
        const savedTasks = JSON.parse(localStorage.getItem("tasks")) || [];
        const savedHistory = JSON.parse(localStorage.getItem("history")) || [];

        dispatch(SET_TASKS(savedTasks));
        dispatch(SET_HISTORY(savedHistory));
    }, [dispatch]);
    
    const [tasks, setTasks] = useState([]);
    

    return (
        <div className='nav'>
            <BrowserRouter>
                <nav style={{ marginBottom: '20px' }}>
                    <NavLink to="/" style={navLinkStyles}>Lista de Tarefas do dia</NavLink> | {" "}
                    <NavLink to="/projects" style={navLinkStyles}>Lista de Projetos</NavLink> | {" "}
                    <NavLink to="/completed" style={navLinkStyles}>Histórico: Apenas tarefas concluídas</NavLink> | {" "}
                    <NavLink to="/stats" style={navLinkStyles}>Estatísticas</NavLink>| {" "}
                    <NavLink to="/about" style={navLinkStyles}>Sobre o App e o Desenvolvedor</NavLink>
                </nav>

                <Routes>
                    <Route path='/' element={<TaskList tasks={tasks} setTasks={setTasks} />} />

                    <Route path="projects" element={<ProjectList />} />
                    <Route path="/projetos/:id"  element={<TaskProject tasks={tasks} setTasks={setTasks} />} />

                    <Route path="/completed" element={<CompletedTasks />} />

                    <Route path="/about" element={<Sobre />} />

                    <Route path="/stats" element={<Stats />} />

                </Routes>
            </BrowserRouter>
        </div>
    )
}

export default Rota;