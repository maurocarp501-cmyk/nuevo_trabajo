import {useState, useEffect} from "react"
import axios from "axios";
import Tarjeta from "./Tarjeta";

export default function Listado(){
const [tareas, setTareas] = useState([])
const categorias = ["Trabajo", "Estudio", "Dormir"]
const [filtrocategoria, setFiltrocategoria] = useState("");
const [filtroprioridad, setFiltroprioridad] = useState("");



const prioridades= [
    {numero:1, texto:"alta"},
    {numero:2, texto:"media"},
    {numero:3, texto:"baja"}
]



    const actualizar = () =>{
        const url ='https://api-tareas.ctpoba.edu.ar/api/tareas'
        const config = {
            headers: { Authorization: "48191338"}
        }
    
    
    axios.get(url, config)
    .then((resp)=> {
        console.log(resp)
        setTareas(resp.data.tareas)
    })
    .catch((error) => {
        console.error(error)
    })
}

useEffect(() => {
    actualizar();
},[])


const eliminar = (tarea_id) => {
    const url =  `https://api-tareas.ctpoba.edu.ar/api/tareas/${tarea_id}`
    const config = {
        headers: {Authorization: "48191338"}
    }

    axios.put(url, config)
    .then((resp) =>{
        console.log(resp.data)
        alert("se elimina la tarea")
    })
    .catch((error) =>{
        console.error(error)
    })
    .finally(() =>{
        actualizar();
    })

}

const cambiarEstado = (tarea_id, nuevoEstado) =>{
   const url = `https://api-tareas.ctpoba.edu.ar/api/tareas/estado/${tarea_id}`
    const config = {
        headers:{Authorization: "48191338"}
    }

    axios.put(url, {estado:nuevoEstado}, config)
    .then((resp) => {
        console.log(resp.data)
    })
    .catch((error) => {
        console.error(error)
    })
    .finally(() => {
        actualizar();
    })
}


const tareasfiltrada = tareas
    .filter((tarea) => filtrocategoria === "" || tarea.categoria === filtrocategoria)
    .filter((tarea) => filtroprioridad === "" || Number(tarea.prioridad) === filtroprioridad)

return(
    <div className="Listado">
        <h1>Tarjeta Formulario</h1>
        <select onChange={(e) => setFiltrocategoria(e.target.value)}>
            <option value="">filtrar por categoria</option>
            {categorias.map((categoria) => (
                <option key={categoria} value={categoria}>{categoria}</option>
            ))}
        </select>
        <select onChange={(e) => setFiltroprioridad(Number(e.target.value))}>
            <option value="">filtrar por prioridad</option>
            {prioridades.map((prioridad) => (
                <option key={prioridad.numero} value={prioridad.numero}>{prioridad.texto}</option>
            ))}
        </select>
        {tareasfiltrada.map((tarea,index)=>  
            <Tarjeta
            key={tarea.id}
            nombre={tarea.nombre}
            categoria={tarea.categoria}
            prioridad={tarea.prioridad}
            estado={tarea.estado}
            eliminar={()=> eliminar(tarea.id)}
            cambiarEstado={(nuevoEstado) => cambiarEstado(tarea.id,nuevoEstado)}
            />
        )}
    </div>
)
}