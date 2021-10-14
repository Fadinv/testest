import * as React from 'react';
import styles from './CardField.module.sass';
import {useAppDispatch, useAppSelector, useDogs} from '../../../app/hooks';
import Card from '../Card/Card';
import {selectDogsList, selectLengthDogs} from '../cardSlice';

interface CardFieldProps {
}

const CardField: React.FC<CardFieldProps> = () => {
	useDogs();

	const dogs = useAppSelector(selectDogsList);

	return (
		<div className={styles['container']}>
			{(dogs || []).map((dog, key) => <Card key={key} index={key} src={dog.src} liked={dog.liked} deleted={dog.deleted}/>)}
		</div>
	);
};

export default CardField;