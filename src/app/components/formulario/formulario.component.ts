import { Component, OnInit } from '@angular/core';
import { FormBuilder, FormGroup, Validators } from '@angular/forms';
import { empleados } from 'src/app/services/empleados.service';
import { FormularioService } from 'src/app/services/formulario.service';

@Component({
  selector: 'app-formulario',
  templateUrl: './formulario.component.html',
  styleUrls: ['./formulario.component.css']
})
export class FormularioComponent implements OnInit {

  empleadosForm!: FormGroup;

  public empleados: empleados[] = [];

  constructor(private readonly fb: FormBuilder, private formularioService: FormularioService) { }

  ngOnInit(): void {
    this.empleadosForm = this.initForm();
  }

  onSubmit(): void {
    this.guardarEmpleado(this.empleadosForm);
    console.log(this.empleados)
  }

  initForm(): FormGroup {
    return this.fb.group({
      id: ['',[Validators.required,Validators.minLength(8)]],
      name: ['', [Validators.required, Validators.minLength(3)]],
      lastName: ['', [Validators.required, Validators.minLength(3)]],
      phone: ['', [Validators.required,]],
      department: [''],
      email: ['', [Validators.required, Validators.email]],
      adress: ['', [Validators.required,]],
    })
  }

  guardarEmpleado(empleadosForm: FormGroup) {
    const empleado = new empleados(empleadosForm.value.id,
      empleadosForm.value.name, empleadosForm.value.lastName, empleadosForm.value.adress, empleadosForm.value.phone,
      empleadosForm.value.department, empleadosForm.value.email);

    this.empleados.push(empleado);
    this.formularioService.guardarEmpleados(this.empleados)
    this.formularioService.obtenerEmpleados()
  }

}
