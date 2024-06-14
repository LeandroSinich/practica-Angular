import { Component, EventEmitter, Output } from '@angular/core';

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
