import { SearchHistoryText } from "../SearchHistoryText/";
import './history-card.css'

export function SearchHistoryCard({text, onClick}) {
  return (
    <li className="history__card">
      <button className="history__btn" onClick={onClick}>
        <SearchHistoryText {...{text}}/>
      </button>
    </li>
  )
}