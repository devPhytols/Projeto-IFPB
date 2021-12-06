import Cabecalho from "../../componentes/cabecalho/Cabecalho";
//import BarraLateral from "../../componentes/barraLateral/BarraLateral";
import AreaPostagem from "../../componentes/areaPostagem/AreaPostagem";
import Footer from "../../componentes/footer/Footer";
import "./inicial.css";

function inicial() {
    return (
      <>
        <Cabecalho />
  
        <div className="appInicial">      
        <AreaPostagem />
        </div>
      </>
    );
  }
  
  export default inicial;