    import { useState } from "react";


    export default function Formulario({guardar}){


        const handlerSubmit = (e) => {
            e.preventDefault();
              const id= (new Date()).getTime();
            guardar({...tarea,id})
        }

        const [tarea, setpruebas]= useState({
        nombre:"",
        prioridad:"",
        categoria:"",
        estado:""


        })

        return(
            <div className="Formulario">
            <h1>Tarjetas Formulario!</h1>
          <form  onSubmit={handlerSubmit}>
           <input
           type="text"
           placeholder="Document"
           onChange={(e) => setpruebas({...tarea, nombre: e.target.value})}
           value={tarea.nombre}
           />
         <select onChange={(e) => setpruebas({...tarea,categoria: e.target.value})}   value={tarea.categoria}  >
            <option value="Trabajo">Trabajo</option>
             <option value="Estudio">Estudio</option>
             <option value="Dormir">Dormir</option>
         </select>


           <select onChange={(e) => setpruebas({...tarea,prioridad: e.target.value})}   value={tarea.prioridad}  >
            <option value="alta">alta</option>
             <option value="media">media</option>
             <option value="baja">baja</option>
         </select>

         <select onChange={(e) => setpruebas({...tarea,estado: e.target.value})}   value={tarea.estado}  >
            <option value="pendiente">pendiente</option>
             <option value="en proceso">en proceso</option>
             <option value="finalizado">finalizado</option>
         </select>
         <button type="submit">Guardar</button>

          </form>
        </div>
        )
    }