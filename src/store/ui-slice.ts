import { createSlice } from '@reduxjs/toolkit'
import type { PayloadAction } from '@reduxjs/toolkit'

export interface UIState {
	drawerIsVisible: boolean
}
const initialUIState: UIState = {
	drawerIsVisible: false,
};

const uiSlice = createSlice({
	name: "ui",
	initialState: initialUIState,
	reducers: {
		closeDrawer(state) {
			state.drawerIsVisible = false;
		},
		openDrawer(state) {
			state.drawerIsVisible = true;
		},
	},
});

export const uiActions = uiSlice.actions;

//uiReducer
export default uiSlice.reducer;
