// src/tests/tests-util.jsx
import { render } from "@testing-library/react";
import { Provider } from "react-redux";
import { configureStore } from "@reduxjs/toolkit";
import taskReducer from "../store/TaskSlicer";
import { ThemeProvider } from "../components/ThemeContext";

export function renderWithRedux(ui, { preloadedState = {}, store = null } = {}) {
    const usedStore = store || configureStore({ reducer: { tasks: taskReducer }, preloadedState });

    return render(
        <Provider store={usedStore}>
        <ThemeProvider>
            {ui}
        </ThemeProvider>
        </Provider>
    );
}