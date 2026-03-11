import { describe, test, expect } from "vitest";
import { render, screen, fireEvent } from "@testing-library/react";
import Formulario from "../components/Formulario";

describe("Testes", ()=> {
    test("Renderiza corretamente?", () => {
        render(<Formulario />);
        expect(screen.getByPlaceholderText("Nome")).toBeInTheDocument();
    });
    test("O usuário consegue digitar?", () => {
        render(<Formulario />);
        const input = screen.getByPlaceholderText("Nome");
        fireEvent.change(input, {target: {value: 'Gabriel'}});
        expect(input.value).toBe("Gabriel");
    });
    test("A mensagem de agradecimento é renderizada?", async () => {
        render(<Formulario />);

        const input = screen.getByPlaceholderText("Nome");

        fireEvent.change(input, {target: {value: 'Gabriel'}});
        fireEvent.click(screen.getByRole("button", {name: "Enviar"}));

        const mensagem = await screen.findByText("Obrigado, Gabriel! 🎉")
        expect(screen.getByText("Obrigado, Gabriel! 🎉")).toBeInTheDocument();

    })
})