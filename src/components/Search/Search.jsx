import { CitySearchForm } from '../CitySearchForm';
import { SearchCityBtn } from '../../components/buttons/SearchCityBtn';
import { useSearchController } from '../../hooks/useSearchController';
import { SearchHistoryCard } from '../SearchHistoryCard/SearchHistoryCard';
import { useSearchState } from '../../state/useSearchState';
import { useEffect } from 'react';

export function Search() {
	const { isOpen, closeBtnHandler, searchCityBtnHandler } = useSearchController();

	const { isError, isLoading, response, getCity } = useSearchState((state) => state);

	useEffect(() => {
		if (!isLoading && !isError) return closeBtnHandler();
		// eslint-disable-next-line react-hooks/exhaustive-deps
	}, [isLoading, isError]);
	return (
		<>
			<div className={`search ${isOpen ? 'search_active' : ''}`}>
				<div className="search-wrapper">
					<CitySearchForm {...{ submitBtnHandler: getCity, closeBtnHandler }} />
				</div>
				<div className="search-wrapper">
					{isLoading && (<p>Загрузка...</p>)}
					{!isLoading && isError && (<p>Упс! Город не найден, попробуйте другой</p>)}
          {!isLoading && [...response]
							.reverse()
							.map((i) => <SearchHistoryCard content={i} key={i.place_id} onClick={closeBtnHandler} />)}
				</div>
			</div>
			<SearchCityBtn onClick={searchCityBtnHandler} />
		</>
	);
}

// TODO: Вынести историю в компонент
