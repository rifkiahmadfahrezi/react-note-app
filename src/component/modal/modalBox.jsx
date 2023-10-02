import React from 'react'

export default function ModalBox({children, isOpen, closeModal}){
	return (
		<div className={JSON.parse(isOpen) ? "modal-box" : "closed"}>
			{children}
			<button type="button" className="close-btn" onClick={() => closeModal()}><i className='bx bx-x'></i></button>
		</div>
	)
} 