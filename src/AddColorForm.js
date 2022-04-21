import {BrowserRouter, Route, Routes, Link, Navigate} from "react-router-dom"
import {useState} from "react"
import CssColors from "./CssColors"
// import Select from "react-select"


const AddColorForm = ({addColor}) => {
    const options = CssColors.map(c => {
        return <option value={c}>{c}</option>
    })
    // console.log(options)
    const [form, setForm] = useState(false)
    const [formData, setFormData] = useState()
    const handleSubmit = (e) => {
        e.preventDefault()
        addColor(formData)
        setFormData("")
    }

    return (
        <>
            {<button onClick={() => setForm(!form)}>{!form ? 'Add New Color': 'Close'}</button>}
            {form ? 
                <form onSubmit={handleSubmit}>
                    <select value={formData} onChange={(e) => {setFormData(e.target.value); console.log(formData)}}>
                        {options}
                    </select>
                    <button>Add Color</button>
                </form> 
                : null}
        </>

    )
}

export default AddColorForm