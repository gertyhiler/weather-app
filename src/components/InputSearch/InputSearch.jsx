import { useState } from 'react';
import './input.css';

export function InputSearch() {
	const [value, setValue] = useState('');
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
