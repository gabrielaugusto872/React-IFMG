import { createSlice } from "@reduxjs/toolkit";

const taskSlice = createSlice({
    name: 'task',
    initialState:{
        tasks: [],
        nextId: 0
    },
    reducers: {
        ADD_TASK(state , { payload }){
            state.tasks.push({ id: state.nextId, ...payload, status: "Pendente"})
            state.nextId += 1;
        },
        ATT_STATUS(state, {payload}){
            const {id, status } = payload;
            const tarefa = state.tasks.find(task => task.id === id);
            if (tarefa) {
                tarefa.status = status;
            }
        },
        REMOVE_TASK(state, {payload}){
            state.tasks = state.tasks.filter(task => task.id !== payload);
        },
        SET_TASKS(state, {payload}){
            state.tasks = payload;
            if (payload.length > 0) {
                const maxId = Math.max(...payload.map((t) => t.id));
                state.nextId = maxId + 1;
            } else {
                state.nextId = 0;
            }
        },
        INIT_TASKS(state, { payload}){
            state.tasks = payload;

            if (payload.length > 0){
                const maxId = Math.max(...payload.map(t => t.id));
                state.nextId = maxId + 1;
            } else {
                state.nextId = 0;
            }
        }

    }
})

export const { ADD_TASK, ATT_STATUS, REMOVE_TASK, SET_TASKS } = taskSlice.actions;

export default taskSlice.reducer;