import { useState, useEffect } from "react";
import {Router, Route, Switch} from 'wouter'
import axios from 'axios'
import Formulario from "./componentes2/Formulario";
import Listado from "./componentes2/Listado";
import Header from "./componentes2/Header";
import Inicio from "./componentes2/Inicio";
import Footer from "./componentes2/Footer";
import "./App.css"


export default function App() {
 

  return(
    <div className="App">
      <Header/>
      <Router>
        <Switch>
          <Route path="/nueva">
            <Formulario/>
            </Route>
            <Route path="/Listado">
            <Listado/>
          </Route>
          <Route path="/">
            <Inicio/>
          </Route>
          <Route>
            <h1>Pagina no encontrada</h1>
          </Route>
        </Switch>
      </Router>
        <Footer/>
     </div>
  )  
}