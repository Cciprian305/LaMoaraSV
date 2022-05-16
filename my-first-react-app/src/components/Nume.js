import {useState} from "react"

const Nume = (props) => {
    const [color, setColor] = useState("White");

    const toggleColor = () => {
        setColor(!color);
    }


    return(
        <>
            <div className={`numeID ${color ? "color" : ""}`} onClick={toggleColor} >{props.myName}</div>
            <div className={`textNume ${color ? "display" : "hide"}`}>Numele de alături este colorat</div>
            </> 
        
    )
}

export default Nume;