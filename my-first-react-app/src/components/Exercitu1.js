import Etiquette from "./Etiquette";

const Example1 = () => {
    return <div className="example">Exercitiul 1
    <div className="d-flex">
        <Etiquette Etiquette="Lays" EtiquetteColor="red"/>
        <Etiquette Etiquette="7.00 Ron" EtiquetteColor="azure"/>
        <Etiquette Etiquette="Dulciuri" EtiquetteColor="yellow"/>
        <Etiquette />
    </div>
    
    </div>;
}

export default Example1;