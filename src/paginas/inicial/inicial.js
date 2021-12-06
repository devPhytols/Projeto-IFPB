import Cabecalho from "../../componentes/cabecalho/Cabecalho";
import BarraLateral from "../../componentes/barraLateral/BarraLateral";
import AreaPostagem from "../../componentes/areaPostagem/AreaPostagem";
import "./inicial.css";

function inicial() {
    return (
      <>
        <Cabecalho />
  
        <div className="appInicial">      
        <AreaPostagem />
        <BarraLateral />
        </div>
      </>
    );
  }
  
  export default inicial;