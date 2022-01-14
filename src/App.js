import BarraTopo from "./componentes/BarraTopo/BarraTopo";
import Inicial from "./paginas/inicial/inicial";
import Sobre from "./paginas/sobre/sobre";
import Tutoriais from "./paginas/tutoriais/tutoriais";

import { BrowserRouter as Router, Switch, Route } from "react-router-dom";

function App() {
  return (
    <Router>

      <BarraTopo />

      <Switch>

        <Route exact path="/">
          <Inicial />
        </Route>

        <Route path="/sobre">
          <Sobre />
        </Route>

        <Route path="/tutoriais">
          <Tutoriais />
        </Route>

      </Switch>

    </Router>
  );
}

export default App;