import { RootState } from "#/store/store";
import { createSlice, createStore } from "@reduxjs/toolkit";
interface ISearchSlice {
    query: string,
    modalResultOpen: boolean
}

const initialState: ISearchSlice = {
    query: "Ahh Gelo",
    modalResultOpen: false,
};
export const search = createSlice({
    name: "search",
    initialState,
    reducers: {
        SET_QUERY(state, { payload }: { payload: ISearchSlice['query'] }) {
            state.query = payload;
        },
        SET_MODAL_RESULT_OPEN(state, { payload }) {
            if (!payload) {
                state.query = "";
            }
            state.modalResultOpen = payload;
        }
    }
})
export const searchReducer = search.reducer;
export const { SET_QUERY, SET_MODAL_RESULT_OPEN } = search.actions;
export const getSearchQuery = (state: RootState) => state.search.query;
export const getModalResultOpen = (state: RootState) => state.search.modalResultOpen;
