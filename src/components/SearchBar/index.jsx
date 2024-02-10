import PropTypes from 'prop-types'
import { useEffect, useState } from 'react';

// css
import './SearchBar.css'

const SearchBar = ({ searchQuery, setSearchQuery }) => {
  const [str, setStr] = useState('');

  const handleEnterKeyPress = (ev) => {
    if(ev.key === 'Enter' || ev.keyCode === 13) {
      setSearchQuery(str);
    }
  }

  useEffect(() => {
    if(searchQuery !== '') {
      setStr(searchQuery);
    }
  }, [searchQuery])

  return (
    <div id="search-container">
      <input 
        type="text" 
        placeholder='Search by email, name or role' 
        value={str} 
        onChange={(ev) => setStr(ev.target.value)} 
        onKeyUp={handleEnterKeyPress}
      />
    </div>
  )
}

SearchBar.propTypes = {
  searchQuery: PropTypes.string,
  setSearchQuery: PropTypes.func
}
export default SearchBar
