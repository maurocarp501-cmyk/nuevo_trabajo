import { useState } from "react";
import Formulario from "./componentes2/Formulario";
import Listado from "./componentes2/Listado";
import "./App.css"

export default function App(){
  const tareasDefault = [
    {id: 1, nombre: "Estudiar React", prioridad: "alta", categoria: "Estudio", estado: "pendiente"},
    {id: 2, nombre: "Hacer ejercicio", prioridad: "baja", categoria: "Personal", estado: "en proceso"},
    {id: 3, nombre: "Hacer la tarea", prioridad: "media", categoria: "Trabajo", estado: "pendiente"},
  ]

  const [tareas, setTareas] = useState(tareasDefault);
  const [mostrarformulario, setmostrarformulario] = useState(false);
  const categorias = ["Trabajo", "Estudio", "Dormir"]
  const prioridades = ["alta", "media", "baja"]
  const [filtrocategoria, setFiltrocategoria] = useState("");
  const [filtroprioridad, setFiltroprioridad] = useState("");

  const Guardar = (tarea) => {
    let nuevastareas = [...tareas];
    nuevastareas.push(tarea);
    setTareas(nuevastareas);
    setmostrarformulario(false);
  }

  const eliminar = (tarea_id) => {
    const nuevastareas = tareas.filter((tarea) => tarea.id != tarea_id)
    setTareas(nuevastareas)
  }

  const cambiarEstado = (tarea_id, nuevoEstado) => {
    const cambiosnuevos = tareas.map((tarea) => tarea.id === tarea_id ? {...tarea, estado: nuevoEstado} : tarea)
    setTareas(cambiosnuevos)
  }

  const tareasfiltrada = tareas
    .filter((tarea) => filtrocategoria === "" || tarea.categoria === filtrocategoria)
    .filter((tarea) => filtroprioridad === "" || tarea.prioridad === filtroprioridad)

  return(
    <div className="App">
      <h1>pagina web</h1>
      <div className="Botones"> 
        <button onClick={() => setmostrarformulario(true)}>Agregar tarea</button>
        <select onChange={(e) => setFiltrocategoria(e.target.value)}>
          <option value="">filtrar por categoria</option>
          {categorias.map((categoria) => (
            <option key={categoria} value={categoria}>{categoria}</option>
          ))}
        </select>
        <select onChange={(e) => setFiltroprioridad(e.target.value)}>
          <option value="">filtrar por prioridad</option>
          {prioridades.map((prioridad) => (
            <option key={prioridad} value={prioridad}>{prioridad}</option>
          ))}
        </select>
      </div>
      <div className="contenido"> 
        {mostrarformulario && 
          <Formulario guardar={Guardar}/>
        }
        <Listado
          tareas={tareasfiltrada}
          eliminar={(tarea_id) => eliminar(tarea_id)}
          cambiarEstado={(tarea_id, nuevoEstado) => cambiarEstado(tarea_id, nuevoEstado)}
        />
      </div>
    </div>
  )  
}