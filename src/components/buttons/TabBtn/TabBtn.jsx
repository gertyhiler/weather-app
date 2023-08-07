import { Btn } from "../Btn";
import './tab-btn.css';

export function TabBtn ({text, isActive, onClick }) {
  return (
    <Btn classes={`switcher__btn ${isActive ? 'switcher__btn_active' : ''}`} onClick={onClick}>
      { text }
    </Btn>
  )
}