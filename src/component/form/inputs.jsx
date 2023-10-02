import React from 'react'

export function Textarea({type,label, inpID, onChange, val}){
	return (
		<div className="input-wrapper">
			<label htmlFor={inpID}>{label}</label>
			<textarea rows="8" className="input" onChange={() => onChange()} id={inpID} value={val}></textarea>
		</div>
	)
}

export function Input({type,label, inpID, onChange, val}){
	return (
		<div className="input-wrapper">
			<label htmlFor={inpID}>{label}</label>
			<input type={type} className="input"  value={val} onChange={() => onChange()} id={inpID}/>
		</div>
	)
}
export function Checkbox({label, inpID, onChange, val}){
	return (
		<div className="input-checkbox-wrapper">
			<label htmlFor={inpID}>{label}</label>
			<input type="checkbox" className="input-checkbox" value={val} onChange={() => onChange()} id={inpID}/>
		</div>
	)
}