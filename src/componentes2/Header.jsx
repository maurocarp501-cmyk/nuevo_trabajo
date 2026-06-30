import { Link } from "wouter";

export default function Header(){
    return(
 <div className="">
        <Link className="opcion" href="/">Inicio</Link>
        <Link className="opcion" href="/nueva">Nueva Tarea</Link>
        <Link className="opcion" href="/Listado">Listado</Link>
    </div>
    )
}