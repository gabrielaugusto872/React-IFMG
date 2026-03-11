import { describe, test, expect } from "vitest";
import { render, screen, fireEvent } from "@testing-library/react";
import App from "../components/App";
import { renderWithRedux } from "./tests-util"
import userEvent from "@testing-library/user-event";
import TaskList from "../components/TaskList";

describe ("Testes", () => {
    test("Verificar se o título Gerenciador de Tarefas aparece na tela", () => {
        renderWithRedux(<App />);

        expect(screen.getByText("Gerenciador de Tarefas")).toBeInTheDocument();
    });
    test("Verifica se uma nova tarefa é adicionada", async () => {
        const user = userEvent.setup();
        renderWithRedux(<TaskList />);

        fireEvent.click(screen.getByRole("button", {value: "➕ Nova tarefa"}));

        const select = screen.getByTestId("task-select");

        const taskTitle = screen.getByPlaceholderText("Título da tarefa");
        const taskDescription = screen.getByPlaceholderText("Descrição da tarefa");
        const taskCategory = screen.getByTestId("task-select")

        fireEvent.change(taskTitle, {target: {value: "Realizar Matrícula"}});
        fireEvent.change(taskDescription, {target: {value: "Realizar matrícula da faculdade"}})
        fireEvent.change(taskCategory, )
        await user.selectOptions(select, "Estudo");
        fireEvent.click(screen.getByRole("button", {name : "Enviar"}));

        expect(await screen.findByText(/Realizar matrícula/i)).toBeInTheDocument();
    })
})