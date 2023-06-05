import {SearchSVG} from '../components/svg';

const Search = () => {
    return (
        <div className="search_cont">
            <SearchSVG />
            <input type='text' placeholder="Поиск по транзакциям" className="search"/>
        </div>
    )
}

export default Search;