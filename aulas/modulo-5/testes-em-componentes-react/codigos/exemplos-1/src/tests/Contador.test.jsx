import { describe, test, expect } from "vitest";
import { render, screen, fireEvent } from "@testing-library/react";
import { Contador } from "../components/Contador";

describe("Testes", () => {
    test("Renderiza o valor inical?", () => {
        render(<Contador />);
        expect(screen.getByText("0")).toBeInTheDocument();
    });
    test("Incrementa ao clicar no Botão", () => {
        render(<Contador />);
        const botao = screen.getByRole("button", {name: "Incrementar"});
        fireEvent.click(botao);
        expect(screen.getByText("1")).toBeInTheDocument();
    })
})