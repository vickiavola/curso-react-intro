import React from 'react';
import './index.css';

function TodoSearch({
  searchValue,
  setSearchValue,
}) {


  return (
    <input
      placeholder="Cortar cebolla"
      className="TodoSearch"
      value={searchValue}
      onChange={(event) => {
        setSearchValue(event.target.value);
      }}
    />
  )
}

export { TodoSearch };