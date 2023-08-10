import { InputSearch } from '../InputSearch';
import { SearchBtn, CloseBtn } from '../buttons';
export function CitySearchForm({ submitBtnHandler, closeBtnHandler }) {
	return (
		<form
			action="#search-action"
			className="search__form"
			onSubmit={(e) => {
				e.preventDefault();
				submitBtnHandler();
			}}
		>
			<InputSearch />
			<SearchBtn onClick={submitBtnHandler} />
			<CloseBtn onClick={closeBtnHandler} />
		</form>
	);
}
