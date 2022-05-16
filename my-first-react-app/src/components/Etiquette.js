import PropTypes from "prop-types";
import{useEffect, useState} from "react";

const Etiquette = (props) =>{

    const [loaded, setLoaded] = useState(false);

    const handleRemove = () => {
        props.handleRemove(props.id);
    }

    

    useEffect(() => {
        setTimeout(() => {
            setLoaded(true);
        }, 2000);     
    },[]);

    if(props.withLoading && !loaded) return <div>loading...</div>;


    return(
        <div className="etiquette-container">
            <div className="etiquette" style={{ backgroundColor: props.EtiquetteColor }}>{props.Etiquette}</div> 
             {
                 props.handleRemove && <div className="removeEtiquette" onClick={handleRemove}>Delete</div>
             } 
         </div>
    );
};

Etiquette.propTypes={
    EtiquetteColor: PropTypes.string,
    Etiquette: PropTypes.string,
};

Etiquette.defaultProps = {
    EtiquetteColor: "transparent",
    Etiquette: "Nimic",
};

export default Etiquette;