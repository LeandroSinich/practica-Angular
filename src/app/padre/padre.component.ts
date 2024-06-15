import { Component, EventEmitter, Output } from '@angular/core';
import { ServicioFamiliarService } from '../servicio-familiar.service';

@Component({
  selector: 'app-padre',
  templateUrl: './padre.component.html',
  styleUrls: ['./padre.component.css']
})
export class PadreComponent {

  contador: number = 0;
  mensage: string = 'mensage del padre'
  mensageRecibido: string = '';
  like: boolean = false;
  nombre: string = '';
  insta: string = '';
  fecha: Date = new Date();
  constructor(private _servicioFamiliar: ServicioFamiliarService){}

  saludar(){
    this._servicioFamiliar.saludar(this.nombre);
  }
  likearPadre(){
    this.like = !this.like
  }

  recibirMensaje($event: string){
    this.mensageRecibido = $event;
  }
 

  incrementar(){
    this.contador++;
  }
  decrementar(){
    this.contador--;
  }
}
