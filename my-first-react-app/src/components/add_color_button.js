import {useState} from "react";

const AddColorButton = (props) => {
    const [EtiquetteColor, setEtiquetteColor] = useState('#ffffff');

    const handleClick = () => {
        props.handleClick({ EtiquetteColor });
    };

    const updateColor = (event) => {
        setEtiquetteColor(event.target.value);
    };


    return(
        <>
       <input type="color" value={EtiquetteColor} onChange={updateColor}></input>
       <button onClick={handleClick}>ADD</button>    
       </> 
    );

};

export default AddColorButton;
