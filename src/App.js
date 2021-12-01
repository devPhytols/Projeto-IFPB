import react from 'react';
import BarraTopo from "./componentes/BarraTopo/BarraTopo";
import Cabecalho from "./componentes/cabecalho/Cabecalho";
import BarraLateral from "./componentes/barraLateral/BarraLateral";
import AreaPostagem from "./componentes/areaPostagem/AreaPostagem";
import "./App.css";

function App() {
  return (
    <>
      <BarraTopo />
      <Cabecalho />

      <div className="appInicial">      
      <AreaPostagem />
      <BarraLateral />
      </div>

    </>
  );
}

export default App;
