import {BrowserRouter, Route, Routes, Link, Navigate} from "react-router-dom"
import {useState, useEffect} from "react"
import ColorsList from "./ColorsList"
import AddColorForm from "./AddColorForm"


const Colors = ({colors, setColors}) => {
    // const [colors, setColors] = useState(['red', 'green', 'blue'])

    // useEffect(() => {
    //     // setColors(['red', 'green', 'blue'])
    // },[])

    const addColor = (newColor) => {
        setColors(color => {
           return [newColor, ...color]
        })
    }
    return (
        <div>
            <h2>Welcome to the Color Factory</h2>
            <AddColorForm addColor={addColor}/>
            <ColorsList colors={colors}/>
        </div>
    )
}

export default Colors