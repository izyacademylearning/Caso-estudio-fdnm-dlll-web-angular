import { Component, OnInit } from '@angular/core';
import { empleados } from 'src/app/services/empleados.service';
import { FormularioService } from 'src/app/services/formulario.service';

@Component({
  selector: 'app-tabla',
  templateUrl: './tabla.component.html',
  styleUrls: ['./tabla.component.css']
})
export class TablaComponent implements OnInit {

  constructor(private empleados: FormularioService) { }

  public listaEmpleados: empleados[] = [];

  
  
  radioButtonSeleccionado = 'Todos'

  ngOnInit(): void {
    this.obtenerEmpleados()
  }

  obtenerEmpleados(){
    this.listaEmpleados=this.empleados.obtenerEmpleados()
  }

  eliminarEmpleado(indice:number){

    const confirma = confirm("¿Realmente quiere eliminar el empleado?");
    if (!confirma) {
      return;
    }
    this.listaEmpleados.splice(indice, 1);
    this.empleados.guardarEmpleados(this.listaEmpleados);

  }
  obtenerTotalEmpleados(): number {
    return this.listaEmpleados.length;
  }

  obtenerTotalDesarrollo(): number {
    return this.listaEmpleados.filter(list => list.department === 'desarrollo').length;
  }

  obtenerTotalAprendiz(): number {
    return this.listaEmpleados.filter(list => list.department === 'aprendiz').length;
  }

  obtenerTotalVentas(): number {
    return this.listaEmpleados.filter(list => list.department === 'ventas').length;
  }

  obtenerTotalAuto(): number {
    return this.listaEmpleados.filter(list => list.department === 'automatizacion').length;
  }

  empleadoCountRadioButtonChange(radioButtonSelec: string): void {
  this.radioButtonSeleccionado = radioButtonSelec;
  }
}
