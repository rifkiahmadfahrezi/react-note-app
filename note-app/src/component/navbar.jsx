import React from 'react'
import SearchForm  from './form/SearchForm'


export default function Navbar({modalToggler, search, inputHandler, changeEventHandler, keyword}){
	return(
		<nav className="navbar">
			<div className="logo-wrappper" href="#">
				<h1 className="logo">My Note</h1>
			</div>


			<div className="link-wrapper">
			<SearchForm search={search} inputHandler={inputHandler} changeEventHandler={changeEventHandler} keyword={keyword}/>
				<a className="link" href="#" onClick={() => modalToggler()}><span><i className='bx bx-plus'></i></span>Tambah </a>
			</div>
		</nav>
	)
}
