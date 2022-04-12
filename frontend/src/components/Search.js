import React, { useState} from 'react';
import HomePage from './HomePage';

const Search = () => {
  const [search, setSearch] = useState();
  return (
    <div className="search">
      <input type="text" value={search ?? ""} placeholder="Search..." onChange={(e) => setSearch(e.target.value)} className="inp" />
      <div className="page">
        <HomePage search={search} />
      </div>
    </div>
  )
}
export default Search;
