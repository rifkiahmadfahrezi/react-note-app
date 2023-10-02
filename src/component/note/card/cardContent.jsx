import React from 'react'
import NoteTitle from './content/NoteTitle'
import NoteCreatedAt from './content/NoteCreatedAt'
import NoteBody from './content/NoteBody'

export default function CardContent({id,title , createdAt, body})
{
	return (
		<div className="card-content" data-id={id}>
			<NoteTitle title={title}/>
			<NoteCreatedAt createdAt={createdAt}/>
			<NoteBody body={body}/>
		</div>	
	)
}
