import { CitySearchForm } from '../CitySearchForm';
import { SearchCityBtn } from '../../components/buttons/SearchCityBtn';
import { useSearchController } from '../../hooks/useSearchController';

export function Search() {
	const { isOpen, submitBtnHandler, closeBtnHandler, searchCityBtnHandler } = useSearchController();
	return (
		<>
			<div className={`search ${isOpen ? 'search_active' : ''}`}>
				<div className="search-wrapper">
					<CitySearchForm {...{ submitBtnHandler, closeBtnHandler }} />
				</div>
			</div>
			<SearchCityBtn onClick={searchCityBtnHandler} />
		</>
	);
}
