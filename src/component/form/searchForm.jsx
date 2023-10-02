import React from 'react'
import {data} from '../../data'

export default function SearchForm({search, changeEventHandler, keyword, inputHandler}){
	return (
		<form className="search-form" onSubmit={() => search(event)}>
			<input type="search" placeholder="Cari Catatanmu..." onInput={() => inputHandler(event)} onChange={() => changeEventHandler()} value={keyword}/>
			<span><i className='bx bx-search'></i></span>
		</form>
	)
}

