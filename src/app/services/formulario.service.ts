import { Injectable } from '@angular/core';
import { empleados } from './empleados.service';

@Injectable({
  providedIn: 'root'
})
export class FormularioService {

  CLAVE_LOCAL_STORAGE = "empleados_angular"

  constructor() { }

  obtenerEmpleados(): empleados[] {
    return JSON.parse(localStorage.getItem(this.CLAVE_LOCAL_STORAGE) || "[]")
  }
  guardarEmpleados(tareas: empleados[]) {
    let arreglo = [];
    arreglo = JSON.parse(localStorage.getItem(this.CLAVE_LOCAL_STORAGE) || "[]")
    tareas.forEach(tarea => {
      arreglo.push(tarea)
    });
    
    localStorage.setItem(this.CLAVE_LOCAL_STORAGE, JSON.stringify(arreglo))
  }
}
