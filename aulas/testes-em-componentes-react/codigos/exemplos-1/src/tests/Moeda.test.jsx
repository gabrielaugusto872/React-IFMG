import { describe, test, expect } from "vitest";
import { Moeda } from "../components/Moeda";

describe('Moedas', () => {
    test('Formata o número 10', () => {
        expect(Moeda(10)).toBe('R$ 10,00')
    })
})