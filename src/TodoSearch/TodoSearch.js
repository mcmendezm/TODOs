import React from 'react';
import './TodoSearch.css';
import { TodoContext } from '../TodoContext/TodoContext';

function TodoSearch() {
  const {searchValue, setSearchValue} = React.useContext(TodoContext)
    return (
      <input
        placeholder="Agrega una tarea"
        className="todoSearch"
        value={searchValue}
        onChange={(event) => {
        setSearchValue(event.target.value)
      }}/>
  )
}
export{TodoSearch}