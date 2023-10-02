import React from 'react'
import CardContent from './CardContent'
import CardButtons from './CardButtons'

export default function Card({modalToggler,id, noteModalHandler, noteTitle, isArchived, createdAt, body, onDelete, onArchive})
{	
	return (
		<div className="card" onClick={()=> noteModalHandler(event)}>
			<CardContent title={noteTitle} id={id} createdAt={createdAt} body={body} />
			<CardButtons id={id} isArchived={isArchived}onDelete={onDelete} onArchive={onArchive}/>
		</div>
	)
}