import './buttons.css'
export function Btn({ children, classes, onClick, type = "button" }) {
	return (
		<button className={classes} onClick={onClick} type={type}>
			{children}
		</button>
	);
}
