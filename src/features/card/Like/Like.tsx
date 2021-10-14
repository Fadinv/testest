import * as React from 'react';
import styles from './Like.module.sass'
import {useAppDispatch} from '../../../app/hooks';
import {like} from '../cardSlice';
import {classes} from '../utils';

const likeSvg = () => (
	<svg version="1.1" id="Capa_1" xmlns="http://www.w3.org/2000/svg" x="0px" y="0px" viewBox="0 0 51.997 51.997">
	<path d="M51.911,16.242C51.152,7.888,45.239,1.827,37.839,1.827c-4.93,0-9.444,2.653-11.984,6.905
		c-2.517-4.307-6.846-6.906-11.697-6.906c-7.399,0-13.313,6.061-14.071,14.415c-0.06,0.369-0.306,2.311,0.442,5.478
		c1.078,4.568,3.568,8.723,7.199,12.013l18.115,16.439l18.426-16.438c3.631-3.291,6.121-7.445,7.199-12.014
		C52.216,18.553,51.97,16.611,51.911,16.242z M15.999,9.904c-4.411,0-8,3.589-8,8c0,0.553-0.447,1-1,1s-1-0.447-1-1
		c0-5.514,4.486-10,10-10c0.553,0,1,0.447,1,1S16.551,9.904,15.999,9.904z"/>
	</svg>
);

interface LikeProps {
	index: number;
	liked?: boolean;
}

export const Like: React.FC<LikeProps> = ({index, liked}) => {
	const dispatch = useAppDispatch();

	return (
		<span onClick={() => dispatch(like(index))} className={classes(styles.container, liked && styles.liked)}>
			{likeSvg()}
		</span>
	);
};