import React from 'react'
import Navbar from './Navbar'
import ModalBox from './modal/ModalBox'
import FormNewNote from './form/FormNewNote'
import ListContainer from './note/ListContainer'
import { data } from '../data.js'



export default class NoteApp extends React.Component
{	
	constructor(props){
		super(props)

		this.state = {
			keyword:'',
			notes: data,
			modal: false,
			modalType: "form",
			selectedNote: []
		}

		this.onDeleteHandler = this.onDeleteHandler.bind(this)
		this.onArchiveHandler = this.onArchiveHandler.bind(this)
		this.onChangeKeywordEventHandler = this.onChangeKeywordEventHandler.bind(this)

		this.modalToggleHandler = this.modalToggleHandler.bind(this)
		this.closeModalHandler = this.closeModalHandler.bind(this)
		this.noteModalHandler = this.noteModalHandler.bind(this)
		this.addNewNoteModalHandler = this.addNewNoteModalHandler.bind(this)

		this.onAddNewNoteHandler = this.onAddNewNoteHandler.bind(this)
		this.searchHandler = this.searchHandler.bind(this)
		this.inputHandler = this.inputHandler.bind(this)
		this.onSearchHandler = this.onSearchHandler.bind(this)
	}

	onDeleteHandler(id) {
	   const notes = this.state.notes.filter(notes => notes.id !== id);
	   this.setState({ notes });
	 }
	onArchiveHandler(id){
		const index = this.state.notes.findIndex(obj => obj.id == id)
		this.state.notes[index].archived == false ?  this.state.notes[index].archived = true : this.state.notes[index].archived = false

		this.setState( this.state.notes );
	}
	modalToggleHandler(){
		this.state.modal == false ? this.state.modal = true : this.state.modal = false
		this.setState(() => {
			return this.state.modal
		})
	}

	onChangeKeywordEventHandler(){
		this.setState(() => {
	     return {
	       keyword: event.target.value,
	     }
	   })
	}

	closeModalHandler(){
		this.state.modal = false
		this.setState(() => {
			return this.state.modal
		})
	}
	
	onAddNewNoteHandler({ title, body,archived }) {
	   const date = new Date()
	   this.state.notes = data.push({
	            id: +new Date(),
			    title,
			    body,
			    archived,
			    createdAt: `${date.toLocaleDateString("id-ID", {weekday: "long"})}, ${date.getDate()}-${date.getMonth()}-${date.getFullYear()} `
	         })
	   this.setState(() => {
	     return {
	     	notes: data
	     }
	   })
	 }

	 searchHandler(event){
		event.preventDefault()


		const filtered = this.state.notes.filter(note => {
			if(note.title == this.state.keyword.toLowerCase()){
				return note
			}
		})

		if (filtered.length <= 0){
			alert("data tidak ditemukan!,harap masukkan judul catatan dengan benar!")
			return false
		}


		this.setState(() => {
			return {
				notes: filtered,
			}
		})

	}

	onSearchHandler(){
		this.searchHandler(event)
	}

	inputHandler(event){
		const keyword = event.target.value.toLowerCase()
		let result = []
		if (keyword === '' || keyword === null || keyword === undefined){
			result = []
			this.state.notes = data
			this.setState(() => {
				return {
					notes: data
				}
			})
		}

	}

	noteModalHandler(event){
		const id = event.target.dataset.id
		if(id==null || id == undefined){
			return false
		}
		this.modalToggleHandler()




		const note = this.state.notes.filter((note) => {
			if(note.id == id){
				return note
			}
		})

		this.state.modalType = 'note'
		this.state.selectedNote = note
		this.setState(() => {
			return this.state.modalType, this.state.selectedNote

		})
	}

	addNewNoteModalHandler(){
		this.modalToggleHandler()

		this.state.modalType = 'form'
		this.setState(() => {
			return this.state.modalType
		})
	}


	render(){
		return(
		 	<main className="note-app">
				{this.state.modal ? 
					this.state.modalType == 'form' ? 
					<div className="layer">
						<ModalBox isOpen={this.state.modal} closeModal={this.closeModalHandler}>
							<FormNewNote onSubmit={this.state.modal = false} addNewNote={this.onAddNewNoteHandler}/>
						</ModalBox>
					</div>
					: <div className="layer">
						<ModalBox isOpen={this.state.modal} closeModal={this.closeModalHandler}>
							{this.state.selectedNote.map((note) => {
								return (<div key={note.id}>
									<h3>{note.title}</h3>
									<small>{note.createdAt}</small>
									<p>{note.body}</p>
								</div>)
							})}
						</ModalBox>
					</div>
					: false
				}
				<Navbar inputHandler={this.inputHandler} modalToggler={this.addNewNoteModalHandler} search={this.onSearchHandler} changeEventHandler={this.onChangeKeywordEventHandler} keyword={this.state.keyword}/>
				<ListContainer title="Catatan aktif" notes={this.state.notes} isArchived="false" onDelete={this.onDeleteHandler} onArchive={this.onArchiveHandler} noteModalHandler={this.noteModalHandler}/>

				<ListContainer title="Catatan diarsipkan" notes={this.state.notes} isArchived="true" onDelete={this.onDeleteHandler} onArchive={this.onArchiveHandler} noteModalHandler={this.noteModalHandler}/>


			</main>
		)
	}
}