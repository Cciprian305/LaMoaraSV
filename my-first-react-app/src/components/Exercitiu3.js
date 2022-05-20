import { useState } from "react";
import AddColorButton from "./add_color_button";
import Etiquette from "./Etiquette";

let colorList = ["Red", "Green", "Blue"];
const Example3 = () => {

    const [addColor, setAddColor] = useState([{id: 0, EtiquetteColor: "Red"},{id: 2, EtiquetteColor: "Green"},{id: 1, EtiquetteColor: "Blue"}]);
    
    const addColors = (addColord) => {
        const newColor = [...addColor];
        newColor.push(addColord)
        addColord.id=addColor.length;
        colorList.push(addColord.EtiquetteColor); 
         
        setAddColor(newColor);
    }

    const removeEtiquette = (id) =>{
        const newColor = addColor.filter((addColord) => addColord.id !== id);

        setAddColor(newColor);
    }

    
       
    return ( 
    <div className="example">Exercitul 3

        <div id="grad" style={{background: `linear-gradient(${colorList.join(',')})`}}></div>
        <AddColorButton handleClick={addColors} />
        {
            addColor.map((addColord) => (<Etiquette key={addColord.id} {...addColord} handleRemove={removeEtiquette}/>))
        }
       
    </div>);
};

export default Example3;