import {BrowserRouter, Route, Routes, Link, Navigate} from "react-router-dom"

const ColorsList = ({colors}) => {
    return (
        <>
            <h2>Select a Color</h2>
            {colors.map(c => <div><Link to={`/colors/${c}`}>{c}</Link></div>)}
        </>
    )
}

export default ColorsList