import { createSlice } from '@reduxjs/toolkit';

const shopSlice = createSlice({
    name: 'shop',
    initialState: {
        items: []
    },
    reducers: {
        ADD_ITEM(state, { payload: {nome, preco} }){
            state.items.push({ nome, preco })
        },
        REMOVE_ITEM(state){
            state.items.splice(payload, 1)
        }
    }
})

export const { ADD_ITEM, REMOVE_ITEM } = shopSlice.actions;

export default shopSlice.reducer;