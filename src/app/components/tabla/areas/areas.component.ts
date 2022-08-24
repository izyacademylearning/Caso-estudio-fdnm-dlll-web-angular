import { Component, EventEmitter, Input, OnInit, Output } from '@angular/core';

@Component({
  selector: 'app-areas',
  templateUrl: './areas.component.html',
  styleUrls: ['./areas.component.css']
})
export class AreasComponent implements OnInit {

  @Input() todos: number;
  @Input() desarrollo: number;
  @Input() automatizacion: number;
  @Input() ventas: number;
  @Input() aprendiz: number;
  @Output() countRadioButtonChange = new EventEmitter<string>();

  radioButtonSeleccionado = 'Todos'

  constructor() {
    this.todos = 0;
    this.desarrollo = 0;
    this.automatizacion = 0;
    this.ventas = 0;
    this.aprendiz=0;
   }

  ngOnInit(): void {
  }

  radioChange(): void {
    this.countRadioButtonChange.emit(this.radioButtonSeleccionado);
  }

}
