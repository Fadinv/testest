import * as React from 'react';
import styles from './Card.module.sass';
import {useEffect} from 'react';
import {Like} from '../Like/Like';
import {useAppDispatch} from '../../../app/hooks';
import {deleteDog} from '../cardSlice';

interface CardProps {
	src: string;
	index: number;
	info?: string;
	liked?: boolean;
	deleted?: boolean;
}

const Card: React.FC<CardProps> = ({src, liked, deleted, index}) => {
	useEffect(() => {});
	const dispatch = useAppDispatch();
	if (deleted) return null;

	return (
		<div className={styles.container}>
			<div className={styles.inner} style={{backgroundImage: `url(${src})`}}>
				<span onClick={() => dispatch(deleteDog(index))} className={styles.delete}>
					X
				</span>
			</div>
			<div className={styles.column}>
				<div className={styles.text}>
					{src}
				</div>
				<div className={styles.info}>
					<Like liked={liked} index={index}/>
				</div>
			</div>
		</div>
	);
};

export default Card;