import React from 'react'
import ModalBox from '../modal/ModalBox'
import Card from './card/Card'

export default class ListContainer extends React.Component{
	constructor(props){
		super(props)

		this.state = {
			modal: false
		}

		this.modalToggleHandler = this.modalToggleHandler.bind(this)
		this.closeModalHandler = this.closeModalHandler.bind(this)
	}

	modalToggleHandler(e){
		console.log(e.currentTarget.id)
		this.state.modal == false ? this.state.modal = true : this.state.modal = false
		this.setState(() => {
			return this.state.modal
		})
	}
	closeModalHandler(){
		this.state.modal = false
		this.setState(() => {
			return this.state.modal
		})
	}
	render(){	
		return(
			<>
			{this.state.modal && 
						<ModalBox isOpen={this.state.modal} closeModal={this.closeModalHandler}>
							
						</ModalBox>
				}
			<div className="note-list-wrapper">
				<h3>{this.props.title}</h3>
					<div className="notes-wrapper">
						{this.props.notes.filter(note => note.archived == JSON.parse(this.props.isArchived)).length > 0 ?
							this.props.notes.map(note => note.archived === JSON.parse(this.props.isArchived) ? 
							<Card noteModalHandler={this.props.noteModalHandler} key={note.id} archived={this.props.archived} id={note.id} noteTitle={note.title} createdAt={note.createdAt} body={note.body} onDelete={this.props.onDelete} isArchived={this.props.isArchived} onArchive={this.props.onArchive}/> 
							: false)

							: <p className="grey-text">Belum ada catatan untuk ditampilkan</p>
						}
						
					</div>	
			 </div>
			 </>
			
		)
	}
}
