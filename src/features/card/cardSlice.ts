import { createAsyncThunk, createSlice, PayloadAction } from '@reduxjs/toolkit';
import { RootState, AppThunk } from '../../app/store';

export interface CardState {
	list: CardStateList;
}

export type CardStateList = {
	src: string;
	liked: boolean;
	deleted: boolean;
}[];

const initialState: CardState = {list: []};

export const cardSlice = createSlice({
	name: 'card',
	initialState,
	reducers: {
		setState: (state, action: PayloadAction<CardStateList>) => {
			state.list = state.list.concat(action.payload);
		},
		like: (state, action: PayloadAction<number>) => {
			state.list[action.payload].liked = !state.list[action.payload].liked;
		},
		deleteDog: (state, action: PayloadAction<number>) => {
			state.list[action.payload].deleted = true;
		},
	},
});

export const { like, setState, deleteDog } = cardSlice.actions;

export const selectLengthDogs = (state: RootState) => state.card.list.length;
export const selectDogsList = (state: RootState) => state.card.list;

export default cardSlice.reducer;
