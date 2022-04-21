import {Link, useParams, useNavigate} from "react-router-dom"
import "./ColorView.css"
import CssColors from "./CssColors"

const ColorView = ({colors}) => {
    const {color} = useParams()
    const navigate = useNavigate()
    console.log(colors.includes(color))
    
    if (!colors.includes(color)) {
        navigate('/colors')
    }
    return (
        <>
            <div className="ColorView" style={{backgroundColor: `${color}`}}>
                <h1>
                    This is what {color} looks like
                </h1>
                <Link to="/colors">Go Back</Link>
            </div>
            
        </>
        
    )
}

export default ColorView