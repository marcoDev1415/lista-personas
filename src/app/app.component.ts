import { Component } from '@angular/core';
import { Persona } from './persona.model';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})


export class AppComponent {
  titulo = 'listado de personas';
  
  //crear un array 

  personas: Persona[] = [new Persona('Marco','Antonio'),new Persona('Juan','Perez')];
  //-------------------
  nombreInput:string ="";
  apellidoInput:string = "";


  agregarPersona():void{
    
    let persona1 = new Persona(this.nombreInput , this.apellidoInput); //let para declarar variables

    this.personas.push(persona1);

  }

}
