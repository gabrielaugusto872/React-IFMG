import { expect, test } from 'vitest'
import { Soma } from '../components/Soma.jsx'

test('adds 1 + 2 to equal 3', () => {
  expect(Soma(1, 2)).toBe(3)
})