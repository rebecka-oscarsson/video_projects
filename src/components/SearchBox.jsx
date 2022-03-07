import {useState} from 'react';
import styles from './Searchbox.module.css'

function SearchBox({setSearchTerm}) {
  const [inputText, setInputText] = useState([]);
    return (
      <form onSubmit={(e)=>{e.preventDefault (); if (inputText.length !== 0) {setSearchTerm(inputText)}}}>
      <input
      className={styles.search_box}
        type="text"
        min-width="20px"
        maxLength="20"
        placeholder="search creative projects"
        aria-label="search"
        id="searchword"
        value={inputText}
        onChange={(e) => setInputText(e.target.value)}
      />
    </form>
    );
}

export default SearchBox;