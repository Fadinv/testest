export const classes = (...classNames: (string | undefined | false | null)[]) => {
	classNames = classNames.filter(cl => !!cl);
	return (classNames || []).join(' ');
};