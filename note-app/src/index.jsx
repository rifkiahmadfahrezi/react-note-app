import React from "react"
import { createRoot } from 'react-dom/client'
import NoteApp from './component/NoteApp'


const root = createRoot(document.querySelector('#root'))
root.render(<NoteApp/>)
