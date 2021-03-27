import { Component } from '@angular/core';

@Component({
  selector: 'app-body',
  templateUrl: 'body.component.html'
})
export class BodyComponent {
  // The code in this class drives the component's behavior.
  Titulo = 'Proyecto NG-IF';
  Empleado = 'Camilo Alberto Trujillo';
  Descripcion = 'Por el gran labor que ha cumplido el empleado, se conmemora para felicitarlo y agradecerle los años en la compañia y esperando que continue con su gran labor muchos años mas.';
  Condecoracion = true;
  Empleado1= ['1','Carlos', 'Bonanza', 4200];
  Empleado2= ['2','Camilo', 'Trujillo', 3200];
  Empleado3= ['3','David', 'Fuentes', 2350];


}