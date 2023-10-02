import React from 'react'
import DeleteButton from './buttons/DeleteButton'
import ArchiveButton from './buttons/ArchiveButton'

export default function CardButtons({id, onDelete,isArchived, onArchive})
{
	return (
		<div className="card-buttons">
			<DeleteButton id={id} onDelete={onDelete}/>
			<ArchiveButton id={id} isArchived={isArchived} onArchive={onArchive}/>
		</div>
	)
}