import {TypedUseSelectorHook, useDispatch, useSelector} from 'react-redux';
import type {RootState, AppDispatch} from './store';
import {useEffect} from 'react';
import {CardState, CardStateList, setState} from '../features/card/cardSlice';

export const useAppDispatch = () => useDispatch<AppDispatch>();
export const useAppSelector: TypedUseSelectorHook<RootState> = useSelector;

const fetchDogs = (): Promise<{ message: string[] }> => fetch('https://dog.ceo/api/breed/hound/images').then(res => res.json());

export const useDogs = () => {
	const dispatch = useAppDispatch();
	useEffect(() => {
		fetchDogs()
			.then((res) => {
				const newDogs: CardStateList = res.message.map(src => ({src, deleted: false, liked: false}));
				dispatch(setState(newDogs));
			})
			.catch(console.error);
	}, [dispatch]);
};