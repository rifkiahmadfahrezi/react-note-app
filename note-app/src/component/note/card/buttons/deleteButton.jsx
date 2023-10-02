import React from 'react'

export default function DeleteButton({id, onDelete}){
	return <button type="button" className="trash" onClick={() => onDelete(id)}><i className="bx bxs-trash"></i> <span>Hapus</span></button>
}