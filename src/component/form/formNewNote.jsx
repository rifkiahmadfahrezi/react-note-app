import React from 'react'


export default class FormNewNote extends React.Component{
	constructor(props){
		super(props)

		this.state = {
	     title: '',
	     body: '',
	     archived: false,
	     maxChar: 50
	   }
	 
	   this.onTitleChangeEventHandler = this.onTitleChangeEventHandler.bind(this);
	   this.onBodyChangeEventHandler = this.onBodyChangeEventHandler.bind(this);
	   this.onArchivedChangeEventHandler = this.onArchivedChangeEventHandler.bind(this);
	   this.onSubmitEventHandler = this.onSubmitEventHandler.bind(this);


	}

	onTitleChangeEventHandler(event) {
		
		this.state.maxChar = 50 - Number(event.target.value.length)
		this.setState(() => {
			return this.state.maxChar
		})

		if(event.target.value.length >= 50){
	   	 return false
	   }

	   this.setState(() => {
	     return {
	       title: event.target.value,
	     }
	   })
	 }

	 onBodyChangeEventHandler(event) {
	   this.setState(() => {
	     return {
	       body: event.target.value,
	     }
	   })
	 }

	 onArchivedChangeEventHandler(event) {
	   this.setState(() => {
	     return {
	       archived: event.target.checked,
	     }
	   })
	 }

	 onSubmitEventHandler(event) {
	   event.preventDefault();
	   if(this.state.title.length > 50){
	   	 alert("Panjang karakter tidak boleh lebih dari 50")
	   	 return false
	   }
	   this.props.addNewNote(this.state);
	 }

	render(){
		return (
			<form className="modal-form" onSubmit={this.onSubmitEventHandler}>

				<div className="input-wrapper">
					<label htmlFor="title">Judul :</label>
					<input type="text" required className="input"  value={this.state.title} onChange={this.onTitleChangeEventHandler} id="title"/>
					<small>Tersisa : {this.state.maxChar} karakter</small>
				</div>

				<div className="input-wrapper">
					<label htmlFor="body">Catatan : </label>
					<textarea required rows="8" className="input" value={this.state.body} onChange={this.onBodyChangeEventHandler} id="body"></textarea>
				</div>
				
				<div className="input-checkbox-wrapper">
					<label htmlFor="archived">Arsipkan :</label>
					<input type="checkbox" className="input-checkbox" checked={this.state.archived} onChange={this.onArchivedChangeEventHandler} id="archived"/>
				</div>

				<button type="submit" className="submit-btn">Tambahkan</button>
			</form>
		)
	}
}