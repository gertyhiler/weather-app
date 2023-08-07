import { Btn } from '../Btn';

export function SearchBtn({ onClick }) {
	return (
		<Btn classes={'btn btn_search'} onClick={onClick}>
			Найти
		</Btn>
	);
}
