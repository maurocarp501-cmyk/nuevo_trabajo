import Tarjeta from "./Tarjeta";

export default function Listado({tareas,eliminar,cambiarEstado}){

return(
    <div className="Listado">
        <h1>Tarjeta Formulario</h1>
        {tareas.map((tarea,index)=>  
        
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