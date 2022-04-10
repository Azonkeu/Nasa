import React, { useState} from 'react';

const Search = () => {
  const [search, setSearch] = useState();
  return (
    <div className="search">
      <input type="text" value={search ?? ""} placeholder="Search..." onChange={(e) => setSearch(e.target.value)} className="inp" />
    </div>
  )
}
export default Search;
