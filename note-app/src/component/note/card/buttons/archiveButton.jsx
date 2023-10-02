import React from 'react'

export default function ArchiveButton({id, onArchive, isArchived}){
	if (!JSON.parse(isArchived)){
		return <button type="button" onClick={() => onArchive(id)} className="archive"><i className="bx bxs-archive-in"></i> <span>Arsipkan</span></button>
	}else{
		return <button type="button" onClick={() => onArchive(id)} className="activate"><i className="bx bxs-archive-out"></i> <span>Aktifkan</span></button>
	}
}