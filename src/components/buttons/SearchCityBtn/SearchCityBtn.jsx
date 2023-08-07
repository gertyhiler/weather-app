import { Btn } from '../Btn';

export function SearchCityBtn({ onClick }) {
	return (
		<Btn classes={'btn btn_search-city'} onClick={onClick}>
			Поиск города
		</Btn>
	);
}
