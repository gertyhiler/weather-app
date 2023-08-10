import { useInputSearchState } from '../../state/useInputSearchState/useInputSearchState'
import './input.css';

export function InputSearch() {
	const { value, setValue } = useInputSearchState((state) => state);
	return (
		<input
			className="input"
			type="search"
			placeholder="Москва"
			name="search"
			id="search"
			value={value}
			onChange={(e) => {
				setValue(e.target.value);
			}}
		/>
	);
}
