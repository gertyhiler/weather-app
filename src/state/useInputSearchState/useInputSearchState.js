import { create } from 'zustand';

export const useInputSearchState = create((set) => ({
	value: '',
	setValue: (value) => { return set({ value }) },
}));
