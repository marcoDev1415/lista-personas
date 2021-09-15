import { Component, Input, OnInit } from '@angular/core';
import { Persona } from '../persona.model';

@Component({
  selector: 'app-persona',
  templateUrl: './persona.component.html',
  styleUrls: ['./persona.component.css']
})
export class PersonaComponent {

 

  nombreInput ="";
  apellidoInput = "";

  @Input() persona: Persona = new Persona(this.nombreInput , this.apellidoInput);
  @Input() indice: number = 0   // pasar variable del compente padre a hijo;


}
